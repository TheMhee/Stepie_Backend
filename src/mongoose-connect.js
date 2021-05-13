import mongoose from 'mongoose'

const fs = require('fs')
const path = require('path')

mongoose.Promise = Promise
mongoose.connect(
  'mongodb://user:<password>@stepie-documentdb-cluster.cluster-co08z1ygs8vo.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
  {
    dbName: 'nottest',
    user: 'yay ',
    pass: 'yay!',
    promiseLibrary: Promise,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    ssl: true,
    sslValidate: false,
    sslCA: fs.readFileSync(path.resolve(__dirname, 'rds-combined-ca-bundle.pem')),
  },
).then(() => console.log('Connection to DB successful'))
  .catch((err) => console.error(err, 'Error'))

