const data = require('./items.json');
// import * as data from './items.json';
// import { Item } from './models/Item';
const db = require('./models');


// function makeObj () {
  // for (let i = 0; i < data.length; i++) {
    // console.log(data[i]) 
    db.Item.insertMany(data)
  // }
// }
// makeObj()
// Item.deleteMany({}, (err, deletedItems) => {
  // if (err) console.log(err);
  // data.forEach(index => {
  // console.log('deleted items: ', deletedItems)
  //   Item.create(data, (err, seededItems) => {
  //     if (err) console.log(err);

  //     console.log(data);
  //     process.exit();
  // });

  // });
// });


// createCat: async (_, {name, age}) => {
//   const kitty = new Cat({ name, age });
//   await kitty.save();
//   return kitty;
// }