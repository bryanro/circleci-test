var request = require('supertest');
var app = require('../server.js');

describe('api', function() {
    it('responds with hello world', function(done) {
        request(app)
            .get('/hello')
            .expect('hello world!', done);
    });
});