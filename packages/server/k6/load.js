
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },  // ramp-up to 50 users
    // { duration: '2m', target: 50 },  // stay at 50 users
    // { duration: '1m', target: 0 },   // ramp-down
  ],
};

// const url = 'http://localhost:9000/graphql';
const url = 'http://localhost:8000/graphql';

export default function () {
  const query = `
query Products {
    Products {
        id
        sku
        name
        slug
        imageUrl
        imageKey
        description
        quantity
        price
        taxable
        isActive
    }
}
  `;

  const payload = JSON.stringify({
    query,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has data': (r) => r.json('data.getUsers') !== undefined,
  });

  sleep(1);
}
