import { check, group, sleep } from 'k6'; // eslint-disable-line
import http from 'k6/http'; // eslint-disable-line

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<100'],
  },
};

export default function () {
  group('test', () => {
    const r = http.post('http://127.0.0.1:8000/login');
    check(r, {
      'status is 200': (r) => r.status === 200,
    });
  });
  sleep(3);
}
