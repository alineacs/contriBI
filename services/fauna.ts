import { Client } from 'faunadb';

export const fauna = new Client({
  secret: 'fnAEo7grNNAAQpuvhm3pA8dOkcp8a2XPtwQxvRAh',
  domain: 'db.us.fauna.com',
});
