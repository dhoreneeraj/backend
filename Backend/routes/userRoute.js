const express = require ("express");

const {home, createUser, getUSer, editUser,deleteUser} = require("../Controllers/Usercontroller");

const router = express.Router();
 

router.get("/",home);

router.post("/createUser",createUser);

router.get("/getUsers",getUSer);

router.put("/editUsers/:id",editUser);
 
router.delete("/delete/:id",deleteUser);

module.exports = router;