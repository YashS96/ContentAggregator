import { assert, should, expect } from 'chai'
import { request } from 'supertest'

// Test your Endpoints and not the ones you're using externally


// import {BBC, NDTV, HINDU } from  '../testing-urls.js'

// describe('RSS feed API', () => {
//     describe('Fetching RSS feeds', () => {
//         it('BBC RSS feed fetch', done => {
//             request.get(BBC)
//                    .expect(200)
//                    .expect('Content-Type', /json/)
//                    .end((err,res)=>{
//                        if(err) return done(err)
//                        return done()
//                    })
            
//         })

//         it('NDTV RSS feed fetch', done => {
//             request.get(NDTV)
//                 .expect(200)
//                 .expect('Content-Type', /json/)
//                 .end((err,res)=>{
//                     if(err) return done(err)
//                     return done()
//                 })
//         })

//         it('HINDU RSS feed fetch', done => {
//             request.get(HINDU)
//                 .expect(200)
//                 .expect('Content-Type', /json/)
//                 .end((err,res)=>{
//                     if(err) return done(err)
//                     return done()
//                 })
//         })
//     })
// })