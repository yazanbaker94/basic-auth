'use strict';
const server = require('../server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);
require('dotenv').config();

describe('my API Server', ()=> {

    beforeEach(()=> {
        jest.spyOn(console, 'log').mockImplementation();
    })


    it('get data from /signup ', async () => {
      let obj = {
        
            username:'Rami',
            password:'hey@123'
        
      }
        const response = await request.post('/signup').send(obj); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('check if signin good from /signin ', async () => {
        let obj = {
          
              username:'Rami',
              password:'hey@123'
          
        }
          const newObj = await request.post('/signup').send(obj);
          const response = await request.post('/signin').auth('Yazan', 'hey@123') // async
          expect(response.status).toEqual(200);
          expect(typeof response.body).toEqual('object'); // superagent is behind this 
      });
  

      


})