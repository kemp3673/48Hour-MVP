//const newrelic = require('newrelic');
const express = require("express");
const cors = require('cors');
const path = require("path");
const controllers = require('./controllers.js');
const compression = require('compression');


const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(compression());

//define routes
app.get('/character', (req, res) => {
  controllers.getCharacters(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})

app.post('/character', (req, res) => {
  controllers.addCharacter(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})

app.put('/character', (req, res) => {
  controllers.updateCharacter(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})

app.delete('/character', (req, res) => {
  controllers.deleteCharacter(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})

app.get('/monster', (req, res) => {
  controllers.getMonsters(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})

app.post('/monster', (req, res) => {
  controllers.addMonsters(req)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
})


//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);



