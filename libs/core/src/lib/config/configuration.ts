export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3333', 10),
  apiPrefix: process.env.API_PREFIX,
});
