const express = require('express')
const config = require('./config/config')
const mongoose = require('mongoose')
const guestRoutes = require('./routes/guestRoutes');
const mentorRoutes = require('./routes/mentorRoutes');

const { db: { host, port, name } } = config
const connectionString = `mongodb://${host}:${port}/${name}`
const app = express()


//Configuring Express
app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => {
    console.log('MongoDB Database Running Successfully')
  })
  .catch(err => {
    console.log('MongoDB Database Connection Failed')
  });


app.use('/api', guestRoutes);
app.use('/api/mentor', mentorRoutes)

app.listen(config.app.port, (req, res) => {
  console.log(`Server Is Live At Port ` + config.app.port)
})
