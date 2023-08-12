const express = require("express");
const router = express.Router();
const UsrVld = require("../../helper/validation/joi");
const Ctrl = require("../../src/controller/controller");
const upload = require("../../helper/utility/utility");
const authenticateToken=require('../../helper/authentication/auth')

router.post("/register", UsrVld.registerVal, Ctrl.register);
router.post("/login",UsrVld.registerVal, Ctrl.login);
router.post( "/buckets/:bucketName/objects",authenticateToken.checkToken,upload.single('file'), Ctrl.createObject);
router.get("/buckets/objects/:objectKey",authenticateToken.checkToken, Ctrl.getObject);
router.delete("/buckets/:bucketName/objects/:objectKey", authenticateToken.checkToken,Ctrl.deleteObject);
router.get("/buckets/:bucketName/objects", authenticateToken.checkToken,Ctrl.listObject);
router.get("/buckets",authenticateToken.checkToken, Ctrl.listBucket);
module.exports = router;
