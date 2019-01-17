import test from 'ava';
import request = require('superagent');

test.failing('Check add a person',async (t) => {
  const expected = await request
    .get('http://localhost:3000/people')
    .set('API-Key', 'foobar')
    .set('Accept', 'application/json');
  const actual = await request
    .get('http://localhost:3000/people')
    .set('API-Key', 'foobar')
    .set('Accept', 'application/json');

  t.is(actual, expected);
});
