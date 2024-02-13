exports.middleware = async = (request, _reply, done) => {
  request.user = { id: "1", name: "some user" };
  done();
};
