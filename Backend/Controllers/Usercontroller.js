//Logic

const User = require("../Models/usermodel");

exports.home = (req,res)  => {
    res.send("Hello everyone");
};

//createUSer


exports.createUser = async (req,res)  => {
try {
    const { name, email } = req.body;
    // to check  all the details
    if(!name || !email){
        throw new Error("Name and email are required");
    }

// check for existiong user
     const existuser = await User.findOne({email});
     if(existuser){
        throw new Error("Email Already exists");
    }
    // insert into database
    const user = await user.create({name,email});
    res.status(201).json({
        success:true,
        mesaage: "user created sucessfully",
        user,
    });

} catch (error) {

    console.log(error);
}
}

exports.getUSer = async (req,res)  => {
try {
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    });
} catch (error) {
    console.log(error);
    res.status(401).json({
        success:false,
        mesaage: error.mesaage,
    });
}
}


exports.editUser= async (req,res)  => {
try {
    const user = await User.findByIdAndUpdate(req.param.id, req.body);
    res.status(200).json({
        success:true,
        mesaage : "user updated successfully"
    });
} catch (error) {
    console.log(error);
    res.status(401).json({
        success:false,
        mesaage: error.mesaage,
    });
}
}

exports.deleteUser = async (req,res)  => {
    try {
        const userid = req.params.id;
        const user = await User.findByIdAndDelete(userid);
        res.status(200).json({
            success:true,
            mesaage : "user deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            mesaage: error.mesaage,
        });
    }
    };
