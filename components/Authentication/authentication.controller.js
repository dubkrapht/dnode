class AuthenticationController {
  async login(request, h) {
    return request.app.authenticationService.signToken({ id: 1, name: 'Joan' });
  }

  async twitter(request, h) {
    try {
      console.log(request.auth);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthenticationController;
