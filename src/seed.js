// const data = require('./items.json');
// import * as data from './items.json';
// import {Item} from './models/Item.js';
import { Item } from './models/Item';
import mongoose, { disconnect } from 'mongoose';
// const db = require('./models');

mongoose.connect('mongodb://localhost:27017/gqltest', 
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

const data = [
  "cherimoya",
  "cherry",
  "pineapple",
  "pinapple",
  "pine nuts",
  "almonds",
  "milk",
  "almond milk",
  "broccoli",
  "broccolini",
  "pie",
  "cherry pie",
  "blueberry pie",
  "blueberries",
  "apples",
  "apple pie",
  "avocado",
  "sugar",
  "bacon",
  "eggs",
  "tofu",
  "tofurkey",
  "potatoes",
  "patatoes",
  "bananas",
  "grapes",
  "grapefruit",
  "grapefruit juice",
  "grape juice",
  "orange juice",
  "oranges",
  "orange bandana",
  "orangutan stuffed animal",
  "oranigram games and puzzled",
  "diapers",
  "tea tree shampoo",
  "hand soap",
  "dishsoap",
  "hand sanitizer",
  "paper plates",
  "paper towels",
  "raspberries",
  "cat food",
  "tuna fish",
  "kibbles",
  "English breakfast tea",
  "green tea",
  "cherry chapstick",
  "sirloin steak",
  "New York strip steak",
  "chicken nuggets",
  "sparkling water",
  "coconut water",
  "coconut flakes",
  "taco mix",
  "trailmix",
  "spam",
  "beef broth",
  "chicken soup",
  "tomato soup",
  "cherry tomatoes",
  "beefsteak tomatoes",
  "sun-dried tomatoes",
  "sunscreen",
  "sunblock",
  "shaving cream",
  "whipped cream",
  "creamy tomato soup",
  "chocolate candy bar",
  "chocolate-covered cherries",
  "milk",
  "chocolate milk",
  "protein bar",
  "bar soap",
  "pickles",
  "pickled fish",
  "olive oil",
  "olives",
  "coconut oil",
  "avocado oil",
  "zucchini",
  "zuchini",
  "peanut butter",
  "almond butter",
  "peanuts",
  "macadamia nuts",
  "butter"
  ]


// function makeObj() {

  // let arr = [];
  // for (let i = 0; i < data.length; i++) {
  //   const item = {name: data[i]}
    
  //   arr.push(item)
  // }
  // console.log(arr)

  
  let objItem = {
    name: "aaaa"
  }

  function  makeItem  () {
    const newItem = new Item(objItem);
    newItem.save((error, result) => {
      if (error) console.log(error)
      console.log(result)
    })
    console.log(newItem)
    process.exit()
    // return newItem;
  }
  makeItem()
// }

// const thing = new db.Item(objItem);
// thing.save();
// return thing;

// createCat: async (_, {name, age}) => {
//   const kitty = new Cat({ name, age });
//   await kitty.save();
//   return kitty;

