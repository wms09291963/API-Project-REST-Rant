require('dotenv').config();
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema()


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

.then(() => {
  console.log('Connected to MongoDB');
})
.catch(function (error) {
  console.error('Error connecting to MongoDB:', error);
});



//export const Place = require('./places')
//export const Comment = require('./comment')

module.exports = {
  Place: require('./places'),
  Comment: require('./comment')
};
