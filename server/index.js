const express = require("express");
const sequelize = require('./database')
const Word = require('./database/models/Word')

sequelize.sync().then(() => console.log('database ready'))

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/words/:code', async (req, res) => {
  const words = await Word.findAll({ where: { code: req.params.code } })
  res.send(words.map(word => word.text))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});