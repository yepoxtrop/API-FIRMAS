import { domain } from "./domain/configDomain.js";

export async function loginDomain(data) {
  try {
    data.user = `ACIEL\\${data.user}`;

    const result = await new Promise((resolve, reject) => {
      domain.authenticate(data.user, data.password, function (error, authentication) {
        if (error) {
          resolve(false);
        }
        if (authentication) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
