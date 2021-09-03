class ApiError {
  constructor(code, message) {
    this.code = code
    this.message = message
  }

  static badRequest() {
    return new ApiError(400, 'Bad Request')
  }
  static unAuthorized() {
    return new ApiError(401, 'Request Unauthorized')
  }
  static forbidden() {
    return new ApiError(403, 'Request Forbidden')
  }
  static notFound() {
    return new ApiError(404, 'Resource Not Found')
  }
  static serverError() {
    return new ApiError(500, 'Internal Server Error')
  }
}
module.exports = ApiError

/*

router.post("/login",(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        next(ApiError.badRequest());
    }
})

*/
