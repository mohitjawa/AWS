'use strict'
const Joi = require('joi').extend(require('@joi/date'))
const CodeAndMessage = require('../error-codes-messages/error-code-messages')

exports.registerVal = (req, res, cb) => {
  const Schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
  const result = Schema.validate(req.body)
  if (result.error) {
    return res.status(CodeAndMessage.badRequestCode).json({
      code: CodeAndMessage.validationErrCode,
      httpCode: CodeAndMessage.badRequestCode,
      message: result.error.message
    })
  } else {
    cb(null, true)
  }
}






