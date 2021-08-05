export const Configuration = () => ({
  development: process.env.NODE_ENV !== 'production',
  host: process.env.APP_HOST,
  port: parseInt(process.env.APP_PORT, 10),
  prefix: process.env.APP_PREFIX,
  clientAppUrl: process.env.CLIENT_APP_URL,
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  session: {
    key: process.env.SESSION_COOKIE_KEY,
    secret: process.env.SESSION_SECRET,
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
    },
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
  linkedin: {
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URL,
  },
  csrf: {
    cookie: process.env.CSRF_COOKIE_KEY,
    session: process.env.CSRF_SESSION_KEY,
  },
});
