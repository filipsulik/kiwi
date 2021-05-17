const express = require("express");
const sequelize = require('./database')
const Word = require('./database/models/Word')
const {allCombinations} = require('../client/src/utils')

sequelize.sync().then(() => console.log('database ready'))

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get('/words/:code', async (req, res) => {
  const words = await Word.findAll({ where: { code: req.params.code } }) || []
  res.send(
    words.map(word => ({text: word.text, code: word.code, real: true}))
      .concat(
        allCombinations(req.params.code, words.map(word => word.text))
          .map(word => ({text: word, code: req.params.code, real: false}))
      )
  )
})

app.post('/words', async (req, res) => {
  await Word.create(req.body)
  res.send('success')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});