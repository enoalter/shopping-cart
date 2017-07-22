var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Game',
    description: 'Awesome Game !!!',
    price: 10
  }),
    new Product({
    imagePath: 'https://vignette3.wikia.nocookie.net/harrypotter/images/3/3f/SOS_game_promo.jpg/revision/latest?cb=20150430211954',
    title: 'Harry Potter Game',
    description: 'So So Game !',
    price: 10
  }),
    new Product({
    imagePath: 'https://www.google.al/search?biw=1920&bih=974&tbm=isch&sa=1&q=call+of+duty&oq=call+of+duty&gs_l=img.3...36978.39133.0.39388.0.0.0.0.0.0.0.0..0.0....0...1.1.64.img..0.0.0.rfZi6OH-hNo#imgrc=wjTAB_wL5l4ZZM:',
    title: 'Call of Duty Game',
    description: 'Very Intresting !!',
    price: 10
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit () {
  mongoose.disconnect();
}
