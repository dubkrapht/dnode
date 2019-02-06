module.exports = {
  jwt: async (decoded, request) => {
    try {
      const user = await request.models.users.findOne({ username: decoded.username });
      if (!user) {
        return { isValid: false };
      }
      if (decoded.username !== user.username) {
        return { isValid: false };
      }
      return { isValid: true };
    } catch (err) {
      throw err;
    }
  }
}
