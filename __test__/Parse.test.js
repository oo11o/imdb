import Parse from '../src/Parse.js';
import * as fs from "fs/promises";
import * as path from "path";

const parse = new Parse();


describe('parse:', ()=>{
    test('check url', ()=>{
        expect(parse.checkUrl('https://www.imdb.com/title/tt0088247/?ref_=fn_al_tt_1')).toEqual('https://www.imdb.com/title/tt0088247/');
        expect(parse.checkUrl('tt0088247')).toEqual('https://www.imdb.com/title/tt0088247/');
    })
})


