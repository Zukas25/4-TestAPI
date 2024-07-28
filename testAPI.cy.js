//HTTP API Tests 
describe('HTTPBin API Tests', () => {
    it('response code should be 200', () => {
        cy.request('http://httpbin.org').then(response => {
          const status = response.status;
          assert.equal(200, status);
        })
     })
    })
// GET method 
it('GET request)', () => {
    const request = {
        method: 'GET',
      url: 'https://httpbin.org/get',
      qs: {
        "key": 'testValue'
      },
      passStatusCode: pass
      };
        it('response code should be 200', () => {
        cy.request(request).then(response => {
              assert.equal("testValue", response.body.args.key);
              })
      })
    })        
// PUT Request with form data 
    it('PUT request with form data', () => {
        cy.request({
          method: ' PUT',
          url: 'httpbin.org/put',
          form: true,
          body: {
            field: 'value1',
            field2: 'value'
          }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.form.field1).to.eq('value1');
            expect(response.body.form.field2).to.eq('value2');
        });
      });
// DELETE REquest
      it('DELETE request', () => {
        cy.request({
          method: 'DELETE',
          url: 'https://httpbin.org/delete'
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
      });
// GET request with custom headers
      it('GET request with custom headers', () => {
        cy.request({
          method: 'GET',
          url: 'https://httpbin/org/headers',
          headers: {
             'User-Agent' : 'CypressTestAgent',
             'Custom-Header' : 'CustomValue'
            }
        }).then((response) => {
             expect(response.status).to.eq(200);
             expect(response.body.headers['User-Agent']).to.eq('CypressTestAgent');
             expect(response.body.headers['Custom-Header']).to.eq('CustomValue');
        });
      }); 
// GET Request and chesk response time 
      it('GET request and check response time', () => {
        cy.request({
            method: 'GET',
            url: 'httpbin.org/get'
        })  .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(2000); // 2 seconds    
        });    
      });  
// GET request to return a 404 status code', () => {   
      it('GET request to return a 404 status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/status/404',
            failOnstatusCode: false
        })  .then((response) => {
            expect(response.status).to.eq(404);
        });
      });
// GET request to check response time with delay 
     it('GET request to check response time with delay', () => {
        cy.request({
            method: 'GET',
            ulr: 'https:/httpbin.org/delay/1' // 1 second delay
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.greaterThan(1000); // Greater 1 second
        });
     });

// POST method
describe('httpbin tests', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };

    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status):
        })    
    })   
})
// User-Agent
describe('httpbin tests', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers'
        headers: {
            'user-agent': 'My test user-agent'
        },
        failOnStatusCode: false
        },

        it('test that user-agent set correctly', () => {
            cy.request(request).then(response => {
                assert.equal(200, response.status);
                assert.equal('My test user-agent", response.requestHeaders['user-agent'])
            })
        })
    })  