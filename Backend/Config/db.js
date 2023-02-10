const mongoose = require("mongoose");

const connectTodb = () => {
 mongoose.connect(process.env.MONGO_URL,{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
 .then((conn) =>{
    console.log(`connected to Db : ${conn.connecteion.host}`)
 })
 .catch((err) => {
    console.log(err.message);
    process.exit(1);

 });
}

module.exports = connectTodb;