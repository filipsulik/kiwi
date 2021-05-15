const express = require("express");
const sequelize = require('./database')

sequelize.sync().then(() => console.log('database ready'))

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});