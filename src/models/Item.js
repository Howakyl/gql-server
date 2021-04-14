// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
  item: String
})

 const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;