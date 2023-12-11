const mode = import.meta.env.MODE;
const config = {
  MODE: mode,
  SERVER: mode === "production" ? import.meta.env.APP_SERVER_PROD : import.meta.env.APP_SERVER_DEV,
  PORT: mode === "production" ? import.meta.env.APP_PORT_PROD : import.meta.env.APP_PORT_DEV,
};

export { config };
