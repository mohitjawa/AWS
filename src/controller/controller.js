const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const ObjectModel = require("../models/Object");
const CodesAndMessages = require("../../helper/error-codes-messages/error-code-messages");

// Create user (registration)
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    UserModel.create({ username, password: hashedPassword });
   return res.json({ httpCode: CodesAndMessages.successCreated,
      code: CodesAndMessages.successCreated,
      message: CodesAndMessages.successMessage});
  } catch (e) {
    return res
    .status(500)
    .json({
      httpCode: CodesAndMessages.dbErrHttpCode,
      code: CodesAndMessages.dbErrCode,
      message: e.message,
    });
  }
};

// Login route
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username }).lean();
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(CodesAndMessages.notFoundUserCode).json({
      message: CodesAndMessages.incorrectPass,
      code: CodesAndMessages.notFoundUserCode,
      httpCode: CodesAndMessages.notFoundUserHttpCode,
    });
  }
  let newToken = jwt.sign(
    { id: user._id },
    "uwduhjdhsajkchjewhdgehdahjshachjsdak",
  );
  return res.json({ httpCode: CodesAndMessages.successCreated,
    code: CodesAndMessages.successCreated,
    message: CodesAndMessages.successMessage,
  token:newToken});
};
exports.createObject = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const objectKey = req.file.filename;
  const bucketName = req.params.bucketName;
  const objects={objectKey:objectKey,originalName:req.file.originalname}
  const userId=req.userId
  try {
    await ObjectModel.findOneAndUpdate({userId,bucketName},{$push:{objects:objects}},{upsert:true})
    return res.json({
      httpCode: CodesAndMessages.successCreated,
      code: CodesAndMessages.successCreated,
      message: `File ${objectKey} uploaded to bucket ${bucketName}`,
    });
  } catch (e) {
    res
      .status(500)
      .json({
        httpCode: CodesAndMessages.dbErrHttpCode,
        code: CodesAndMessages.dbErrCode,
        message: e.message,
      });
  }
};
// Get object
exports.getObject = (req, res) => {
  const filePath = path.join(path.dirname(path.dirname(__dirname)), "uploads", req.params.objectKey);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ message: "file not found" });
  }
};

// Delete object
exports.deleteObject = async (req, res) => {
  const objectKey = req.params.objectKey;
  const bucketName = req.params.bucketName;
const userId=req.userId
  try {
    await ObjectModel.findOneAndUpdate({userId,bucketName},{$pull:{objects:{objectKey:objectKey}}},{new:true});
    const filePath = path.join(path.dirname(path.dirname(__dirname)), "uploads", objectKey);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    res.json({
      message: `Object ${objectKey} deleted from bucket ${bucketName}`,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to delete object" });
  }
};

// List objects in bucket
exports.listObject = async (req, res) => {
  const bucketName = req.params.bucketName;
  const userId=req.userId
  try {
    const objects = await ObjectModel.findOne({userId, bucketName },{__v:0}).exec();
    res.json(objects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch objects" });
  }
};

// List buckets
exports.listBucket = async (req, res) => {
  try {
    const buckets = await ObjectModel.find({userId:req.userId}).exec();
    res.json(buckets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch buckets" });
  }
};
