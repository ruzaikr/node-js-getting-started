// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// server.js
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/public'));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);