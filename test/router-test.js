var chai = require('chai');
var router = require('../lib/router');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

describe('Router', function() {
  describe('route setters', function() {
    after(function() {
      router.resetRouter();
    });

    it('should assign a route to the route object for GET', function() {
      router.get('/test', function(req, res) {});
      var routes = router.showRoutes();
      expect(routes['/test'].GET).to.be.a('function');
    });

    it('should assign a route to the route object for POST', function() {
      router.post('/test', function(req, res) {});
      var routes = router.showRoutes();
      expect(routes['/test'].POST).to.be.a('function');
    });

    it('should assign a route to the route object for PUT', function() {
      router.put('/test', function(req, res) {});
      var routes = router.showRoutes();
      expect(routes['/test'].PUT).to.be.a('function');
    });

    it('should assign a route to the route object for PATCH', function() {
      router.patch('/test', function(req, res) {});
      var routes = router.showRoutes();
      expect(routes['/test'].PATCH).to.be.a('function');
    });

    it('should assign a route to the route object for DELETE', function() {
      router.del('/test', function(req, res) {});
      var routes = router.showRoutes();
      expect(routes['/test'].DELETE).to.be.a('function');
    });

  });
  describe('route function', function() {

    after(function() {
      router.resetRouter();
    });

    it('should call stored function', function() {
      var results;
      router.get('/lasttest', function() {
        results = true;
      });

      router.route('/lasttest', 'GET', 'req', 'res');
      expect(results).to.eql(true);
    });

  });
});
