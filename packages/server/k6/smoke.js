
import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   vus: 1,
//   duration: '10s',
// };

export const options = {
  vus: 500,
  duration: '30s',
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
        password
        provider
        role
        created
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
