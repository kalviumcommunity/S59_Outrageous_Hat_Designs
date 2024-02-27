const mongoose = require('mongoose');
require('dotenv').config()

const connectToDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@hatdesigns.zoiuhgq.mongodb.net/?retryWrites=true&w=majority&appName=HatDesigns`, {
    });
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('❌ error connecting to mongoDB:', err.message);
  }
};

const isConnected = () =>{
  return mongoose.connection.readyState === 1;
}

module.exports = {
  connectToDB,
  isConnected,
};
