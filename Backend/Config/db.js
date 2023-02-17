const mongoose = require("mongoose");

const connectTodb = () => {
mongoose.connect(process.env.MONGO_URL ,{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
 .then((conn) =>{
    console.log(`connected to Db : ${conn.connection?.host}.`)
 })
 .catch((err) => {
    console.log(err.message);
    process.exit(1);

 });
}
mongoose.set('strictQuery',true);

module.exports = connectTodb;