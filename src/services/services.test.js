import { makeSearchResultsRequest } from './index';
import { Request } from 'request-promise';

it('makeSearchResultsRequest returns a Promise', ()=>{
    expect(makeSearchResultsRequest()).toBeInstanceOf(Request);
});