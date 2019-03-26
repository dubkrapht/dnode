class UserController {
  async get(request, h) {
    return request.app.moment();
  }
}

module.exports = UserController;
