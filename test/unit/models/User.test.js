describe.only('UserModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Users.find().then(function(results) {
        // some tests
        done();
      }).fail(done);
    });
  });

});