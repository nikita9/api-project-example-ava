export const Constants = {
  baseUrl: 'http://localhost:3000', // e.g. https://stg.mysite.com
  resourceName: '', // e.g. /api/v1
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  timeout: {
    response: 3000, // maximum time to wait for the first byte to arrive from the server
    deadline: 5000  // deadline for the entire request to complete
  }
};
