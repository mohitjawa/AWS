module.exports = {
    // succes-codes
    successOk: 200,
    successCreated: 201,
    successAccepted: 202,
    successMessage: 'Success',
    inactiveMessage:403,
    // country-error
    countryServiceErr: 400,
    countryServiceErrHttp: 400,
    countryServiceErrMessage: 'Service not available in your country',
    duplicateCode: 409,
    // database-error
    dbErrHttpCode: 500,
    dbErrCode: 500,
    dbErrMessage: 'Database error.',
    // not-found-error
    notFoundHttpCode: 404,
    notFoundCode: 404,
    notFoundMessage: 'Not Found',
    // user-not-found
    notFoundUserCode: 401,
    notFoundUserHttpCode: 401,
    notFoundUserMessage: "User doesn't exist",
    // bad-request
    badRequestHttpCode: 400,
    badRequestCode: 400,
    badRequestMessage: 'Bad Request',
    // service-unavailble
    serviceUnavailableCode: 503,
    serviceUnavailableHttpCode: 503,
    serviceUnavailableMessage: 'Oops! Something went wrong',
    // validation-error
    validationErrCode: 400,
    validationErrHttpCode: 400,
    // email already registered
    emailExistCode: 409,
    emailExistHttpCode: 409,
    // inactive staff error
    inactiveStaffErrCode: 403,
    inactiveStaffErrMsg: 'Inactive Staff',
    // OTP-Err
    incorrectOtp: 'Incorrect otp.',
    emailNotFound: 'Email not registered with us',
    incorrectPass: 'Incorrect Password or username',
    emailExistErr: 'Email already exists.',
    companyNameErr:'companyName must be unique',
    mcNumberErr:'mcNumber must be unique',
    dotNumberErr:'dot number must be unique',
    dotNumberInvalid:'Dot number invalid',
    fleetExistErr: 'Fleet Already Exists',
    newEmailExistErr: 'New Email already exists.',
    phoneExistErr: 'Phone already exists.',
    uploadErr: 'Upload Error, Please Try again.',
    passcodeErr: 'Please enter correct otp.',
    noDataErr: 'No Data exists.',
    invalidUserErr: 'Invalid User.',
    paymentFailed: 'Payment Failed!',
    invalidTokenHttpCode: 400,
    invalidTokenCode: 400,
    tokenErrMessage: 'Invalid link or expired',
    passResetTokenErrMessage: 'Either password reset link is expired or invalid, please generate a new password reset link again.',
    invalidTokenMessage: 'Please Login Again',
    currentPassErr: 'Incorrect Current Password',
    currentOldPassErr: 'New password can not be same as Current Password',
    oldEmailErr: 'Old email not exist',
    emailChangeSuccess: 'Email Changed successfully',
    passwordChangeSuccess: 'Password Changed successfully',
    oldAndNewEmailSameErr: 'Email and New Email Should Not Be Same',
    linkSendMessage: 'Password reset link sent to your email',
    loadLimitErr:'load limit exceeded',
    resourceNotFoundMsg: 'The requested route was not found.',
    transporteNotExist: 'Transporter not exist!',
    fileLimitExeedMsg: 'Not allowed to upload more than 10 files',
    userExistErr: 'User already exist',
    emailVerifyErr:'Email not verified',
    emailVerified:'Email is verified',
    InactiveAccount:'Your Account is InActive Currently!!'
  }
  