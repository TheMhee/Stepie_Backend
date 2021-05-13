import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import jwt from 'express-jwt'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { graphqlUploadExpress  } from 'graphql-upload'; 
import './mongoose-connect'
import schema from './graphql'
import { createWriteStream, unlink } from 'fs'

const AWS = require('aws-sdk');

// store each image in it's own unique folder to avoid name duplicates
const { v4: uuidv4 } = require('uuid');

// load config data from .env file

require('dotenv').config();
// update AWS config env data

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

// my default params for s3 upload
// I have a max upload size of 1 MB
const s3DefaultParams = {
  ACL: 'public-read',
  Bucket: process.env.S3_BUCKET_NAME,
  Conditions: [
    ['content-length-range', 0, 1024000], // 1 Mb
    { acl: 'public-read' },
  ],
};

const app = express()



const uploadFile = async (file) => {
  const { createReadStream, filename } = await file;

  const key = uuidv4();

  return new Promise((resolve, reject) => {
    s3.upload(
      {
        ...s3DefaultParams,
        Body: createReadStream(),
        Key: `images/${key}${filename}`,
      },
      (err, data) => {
        if (err) {
          console.log('error uploading...', err);
          reject(err);
        } else {
          console.log('successfully uploaded file...', data);
          resolve(data);
        }
      },
    );
  });
}

const server = new ApolloServer({
  uploads: false,
  schema,
  playground: true,
  introspection: true,
  context: ({ req }) => ({ user: req.user, uploadFile}),
})

const path = '/graphql'
app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: process.env.ORIGIN ?? ['http://localhost:3000',"https://stepie-backend-ry2mu.ondigitalocean.app/stepie-backend/graphql"], credentials: true }))
app.use('/public', express.static(`${__dirname}/../public`))
app.use(express.static(`${__dirname}/../public`))
app.use(express.urlencoded({ extended: false }))
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
app.use(
  path,
  jwt({
    secret: process.env.SECRET ?? 'default-secret',
    algorithms: ['HS256'],
    getToken: (req) => {
      if (req?.cookies?.token) {
        return req?.cookies?.token
      }
      if (req?.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
        return req?.headers?.authorization?.split(' ')?.[1]
      }
      if (req?.query?.token) {
        return req?.query?.token
      }
      return null
    },
    credentialsRequired: false,
  }),
  (err, req, res, next) => {
    res.status(200).json({
      errors: [
        {
          message: err.message,
        },
      ],
    })
  },
)
server.applyMiddleware({ app, path, cors: { origin: process.env.ORIGIN ?? ['http://localhost:3000',"https://stepie-backend-ry2mu.ondigitalocean.app/stepie-backend/graphql"], credentials: true }})

const port = process.env.PORT ?? 3001
app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})
