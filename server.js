// DEPENDENCIES
const express = require('express')
const app = express()

const bandsController = require('./controllers/bands_controller');
const eventsController = require('./controllers/events_controller');
const stagesController = require('./controllers/stages_controller');


const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION

/*const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PG_PASS
  })
  
try {
    sequelize.authenticate();
    console.log( "CONNECTED TO POSTGRES" )
} catch(err) {
    console.log( `Unable to Connect to DB: ${err}` )
}
*/


//bandsontroller 
app.use('/bands', bandsController);
app.use('/events', eventsController);
app.use('/stages', stagesController);

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
