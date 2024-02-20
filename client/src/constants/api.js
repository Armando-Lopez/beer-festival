const BASE_API = process.env.NODE_ENV === 'production' ? '/api' :  'http://localhost:5001/api'
console.log(BASE_API, process.env.NODE_ENV);
export const SUBCRIBE_EMAIL_API_URL = `${BASE_API}/v1/subcribe`