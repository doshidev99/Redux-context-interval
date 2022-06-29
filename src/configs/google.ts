export const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

export const apiKey = process.env.NEXT_PUBLIC_SECRET_KEY;
export const secretKey = process.env.NEXT_PUBLIC_API_KEY;

export const TwitterKey = {
  client_id: process.env.NEXT_PUBLIC_TW_client_id,
  client_secret: process.env.NEXT_PUBLIC_TW_client_secret,
  api_key: process.env.NEXT_PUBLIC_TW_API_KEY,
  secret_key: process.env.NEXT_PUBLIC_TW_SECRET_KEY,
  oauth_callback: 'http://localhost:3000/twlogin',
  endpoint: 'https://api.twitter.com/oauth/request_token',
};
