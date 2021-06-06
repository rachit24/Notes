const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
};

module.exports = connectDB;


// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       db,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }
//     );

//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;