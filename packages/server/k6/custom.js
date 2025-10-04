
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 200 },   // ramp up
    { duration: '3m', target: 200 },   // steady load
    { duration: '1m', target: 0 },     // ramp down
  ],
};

const url = 'http://localhost:8080/graphql';

// Define multiple queries
const queries = [
  {
    name: "getProducts",
    query: `
      query {
        products(limit: 10) {
          id
          name
          price
          image
        }
      }
    `
  },
  {
    name: "getProductDetails",
    query: `
      query {
        product(id: "123") {
          id
          name
          description
          stock
          price
        }
      }
    `
  },
  {
    name: "getCart",
    query: `
      query {
        cart(userId: "u123") {
          items {
            product {
              id
              name
            }
            quantity
          }
        }
      }
    `
  },
  {
    name: "createOrder",
    query: `
      mutation {
        createOrder(userId: "u123", productId: "123", quantity: 1) {
          id
          status
        }
      }
    `
  }
];

export default function () {
  // Pick a random query for this VU
  const chosen = queries[Math.floor(Math.random() * queries.length)];

  const payload = JSON.stringify({ query: chosen.query });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    [`${chosen.name} returned data`]: (r) => r.json('data') !== undefined,
  });

  sleep(1);
}
