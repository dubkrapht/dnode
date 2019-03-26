class AuthenticationController {
  async login(request, h) {
    return request.app.authenticationService.signToken({ id: 1, name: 'Joan' });
  }
}

module.exports = AuthenticationController;
