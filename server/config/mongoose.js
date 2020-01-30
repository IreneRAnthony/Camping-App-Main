const mongoose = require('mongoose');
const path       = require('path');
const fs         = require('fs');

mongoose.connect('mongodb://localhost/Camping', {useNewUrlParser: true});

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});