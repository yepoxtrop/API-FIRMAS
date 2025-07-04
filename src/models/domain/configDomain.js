import ActiveDirectory from "activedirectory";

import { config } from "dotenv";
config()

const configDomain = {
  url: process.env.URL_DOMAIN,
  baseDN: process.env.BASEDN_DOMAIN,
  username: 'ACIEL\\user_firmas',
  password: process.env.PASSWORD_DOMAIN
};

export const domain = new ActiveDirectory(configDomain);