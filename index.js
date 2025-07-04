import { PORT } from "./src/config.js";
import app from "./src/app.js";
import { loginDomain } from "./src/models/loginDomain.js";
import { config } from "dotenv";
config()

async function index() {
  try {
    app.listen(PORT || 3000, () => {
      console.log(`El servidor esta activo en ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

index();
console.log(process.env.USER_DOMAIN)


await loginDomain({user:"luis.sarmiento",password:"Lui$20102006"})

//lsarmiento@acielcolombia.com
//anisbel1985@gmail.com

// await transporter.verify();
// console.log("El correo esta activo");