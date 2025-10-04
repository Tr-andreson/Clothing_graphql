import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 1000 },  // ramp up to 1000 VUs
    { duration: '3m', target: 1000 },  // stay at 1000 VUs
    { duration: '2m', target: 5000 },  // scale up to 5000 VUs
    { duration: '5m', target: 5000 },  // sustain heavy load
    { duration: '2m', target: 0 },     // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% of requests < 800ms
    http_req_failed: ['rate<0.01'],   // <1% requests should fail
  },
};

const url = 'http://localhost:8080/graphql';

export default function () {
  const query = `
    query Users {
      Users {
        id
        email
        firstName
        lastName
        phoneNumber
        provider
        role
        created
      }
    }
  `;

  const payload = JSON.stringify({ query });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has data': (r) => r.json('data.Users') !== undefined,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });

  sleep(1);
}
