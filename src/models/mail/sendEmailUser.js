import transporter from "./elements/transporter.js";
import { areas } from "../mail/elements/areas.js";
import { config } from "dotenv";
config();

export async function sendEmailUser(data, routeUser) {
  try {
    await transporter.sendMail({
      from: `"Firmas ACS" <${process.env.USER_EMAIL}>`,
      to: `${data.correo}, ${areas[35].correo}`,
      subject: "Firmas ACS - Confirmación de Registro y envío de Firma",
      html: `<h2>Cordial saludo</h2>
      </br>
      <p style='font-size:15px'>Estimado ${
        data.nombre
      } espero te encuentres muy bien. Por parte de <span style='font-Weight:bold'>ACS - Aciel Soluciones Integrales S.A.S</span> y del <span style='font-Weight:bold'>equipo de soporte</span>, te hacemos entrega de tu firma digital(el archivo adjunto fima${
        data.cedula
      }.p12), además de ello te adjuntamos un video para que puedas hacer la instalación de tu firma en tu equipo y como usarla correctamente.</p></br><p>Debes de tener en cuenta lo siguiente para el manejo y uso de tu firma digital:</p>
      <ol style='font-size:15px'>
        <li>La contraseña de tu firma es la misma que colocaste en el formulario de creación y solicitud de firmas.</li>
        <li>El programa recomendado para el uso de firmas digitales es Adobe Acrobat Reader.</li>
        <li>Las firmas vencen, tienen una durabilidad de 6 meses, por lo que deberás de solicitar una nueva firma pasado dicho tiempo.</li>
        <li>En caso de pérdida del .p12, puedes solicitarla desde la misma página de creación de firmas digitales.</li>
      </ol>
        </br>
      <p style='font-size:15px'>En caso de presentar algún inconveniente externo puedes crear un caso en las siguientes mesas de ayuda:</p>
      <ol style='font-size:15px'>
        <li>HelpDesk ACS:<a style='color:#00a8c3;text-decoration:none' href='${
          process.env.HELPDESK_ACS
        }'>${process.env.HELPDESK_ACS}</a></li>
        <li>HelpDesk NuevaEPS:<a style='color:#00a8c3;text-decoration:none' href='${
          process.env.HELPDESK_NUEVAEPS
        }'>${process.env.HELPDESK_NUEVAEPS}</a></li>
      </ol>
      </br>
      <p style='font-size:15px'><span style='font-Weight:bold'>NOTA:</span> Ten en cuenta que este correo es enviado a tu coordinador de calidad, es decir al señor o señora <span style='font-Weight:bold'>${
        areas[35].coordinador
      }</span> para que él pueda tener el seguimiento de las veces en las que has solicitado la creación de tu firma.</p>
      </br>
      <div>
        <table id="x_table_0_0_0" style="font-family: 'Segoe UI', 'Lucida Sans', sans-serif; font-size: 14.16px; width: 465.75pt; color: #242424; border-collapse: collapse; border-spacing: 0px;">
            <tbody>
                <tr>
                    <td style="padding: 0cm; width: 255.75pt; height: 22px;">
                        <div class="elementToProof" style="font-family: verdana, geneva, sans-serif; font-size: 12pt; color: #000000;"><b>Cordialmente,</b></div>
                        <div class="elementToProof" style="font-family: verdana, geneva, sans-serif; font-size: 12pt; color: #000000;"></div>
                        <div class="elementToProof" style="font-family: verdana, geneva, sans-serif; font-size: 12pt; color: #000000;"><b>Soporte</b></div>
                    </td>
                    <td style="padding: 0cm; width: 9.55pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 21.45pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 255.75pt; height: 7.5pt;">
                        <div class="elementToProof" style="font-family: verdana, geneva, sans-serif; font-size: 9pt; color: #000000;"><i>Sistemas Aciel</i></div>
                    </td>
                    <td style="padding: 0cm; width: 9.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 21.45pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 255.75pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td rowspan="6" style="border-left: 1pt solid #cdcdcd; padding: 0cm; width: 8.8pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 21.45pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 22px;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;">&nbsp;</span></p>
                    </td>
                </tr>
                <tr>
                    <td rowspan="4" style="padding: 0cm; width: 255.75pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span><span style="font-family: aptos, aptos_embeddedfont, aptos_msfontservice, calibri, helvetica, sans-serif; font-size: 16px; color: #000000;"><span class="Object" role="link" id="OBJ_PREFIX_DWT61_com_zimbra_url" style="color: #005a95; cursor: pointer;"><a href="https://aciel.co/acielemailsig/acsiso900120152020.pdf" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: #005a95; text-decoration-line: none; cursor: pointer; margin: 0px;"><img id="x_x_x_x_image_0_0_0" width="358" height="86" pnsrc="cid:imgLogo" src="cid:imgLogo" saveddisplaymode="" style="width: 358px; height: 86px; max-width: 746px; margin: 0px;" /></a></span></span></p>
                        <div class="elementToProof" style="margin: 0cm; font-family: verdana, sans-serif; font-size: 10.5pt; color: black;"></div>
                    </td>
                    <td style="padding: 0cm; width: 21.45pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;"><img width="12" height="12" pnsrc="cid:imgCorreo" src="cid:imgCorreo" style="width: 12px; height: 12px; min-width: auto; min-height: auto; margin: 0px;" /></span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 9pt; color: blue;"><u>soporte<span class="Object" role="link" id="OBJ_PREFIX_DWT62_ZmEmailObjectHandler" style="color: #005a95; text-decoration-line: none; cursor: pointer;"><a href="mailto:sucorreo@aciel.co" target="_blank" rel="nofollow noopener noreferrer" style="color: blue; text-decoration-line: none; cursor: pointer; margin: 0px;">@aciel.co</a></span></u></span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 21.45pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;"><img width="12" height="12" pnsrc="cid:imgTelefono" src="cid:imgTelefono" style="width: 12px; height: 12px; min-width: auto; min-height: auto; margin: 0px;" /></span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 9pt; color: black;"><span class="Object" role="link" id="OBJ_PREFIX_DWT63_com_zimbra_phone" style="color: #005a95; cursor: pointer;"><a href="callto:+57 (601) 268-7585" style="color: #005a95; text-decoration-line: none; cursor: pointer;">+57&nbsp;(601) 268-7585</a></span></span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 21.45pt; height: 3.75pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;"><img width="12" height="12" pnsrc="cid:imgDireccion" src="cid:imgDireccion" style="width: 12px; height: 12px; min-width: auto; min-height: auto; margin: 0px;" /></span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 3.75pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 9pt; color: black;">Calle 85A #28C11, Bogot&aacute;, Colombia, 111211</span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 21.45pt; height: 3.75pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;"><img width="12" height="12" pnsrc="cid:imgHipervinculo" src="cid:imgHipervinculo" style="width: 12px; height: 12px; min-width: auto; min-height: auto; margin: 0px;" /></span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 3.75pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 9pt; color: blue;"><u><span class="Object" role="link" id="OBJ_PREFIX_DWT64_com_zimbra_url" style="color: #005a95; text-decoration-line: none; cursor: pointer;"><a href="https://aciel.co/" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: blue; text-decoration-line: none; cursor: pointer; margin: 0px;">https://aciel.co/</a></span></u></span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 255.75pt; height: 7.5pt;"></td>
                    <td style="padding: 0cm; width: 21.45pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 11pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 7.5pt;">
                        <p align="right" class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: blue;"><u><span class="Object" role="link" id="OBJ_PREFIX_DWT65_com_zimbra_url" style="color: #005a95; text-decoration-line: none; cursor: pointer;"><a href="https://www.linkedin.com/company/acielcolombia/mycompany/" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: blue; text-decoration-line: none; cursor: pointer; margin: 0px;"><img width="23" height="23" pnsrc="cid:imgLinkedin" src="cid:imgLinkedin" style="width: 23px; height: 23px; min-width: auto; min-height: auto; margin: 0px;" /></a></span></u></span><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: blue;"><u><span class="Object" role="link" id="OBJ_PREFIX_DWT66_com_zimbra_url" style="color: #005a95; text-decoration-line: none; cursor: pointer;"><a href="https://www.facebook.com/AcielColombia.S.A.S" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: blue; text-decoration-line: none; cursor: pointer; margin: 0px;"><img width="23" height="23" pnsrc="cid:imgFacebook" src="cid:imgFacebook" style="width: 23px; height: 23px; min-width: auto; min-height: auto; margin: 0px;" /></a></span></u></span><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: blue;"><u><span class="Object" role="link" id="OBJ_PREFIX_DWT67_com_zimbra_url" style="color: #005a95; text-decoration-line: none; cursor: pointer;"><a href="https://www.youtube.com/channel/UC2xTc4uxduvw0DXv670Sjcw" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: blue; text-decoration-line: none; cursor: pointer; margin: 0px;"><img width="33" height="23" pnsrc="cid:imgYoutube" src="cid:imgYoutube" style="width: 33px; height: 23px; min-width: auto; min-height: auto; margin: 0px;" /></a></span></u></span></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0cm; width: 255.75pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 9.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 21.45pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                    <td style="padding: 0cm; width: 225.55pt; height: 7.5pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;">&nbsp;</span></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style="border-top: 1pt solid #cdcdcd; padding: 0cm; width: 512.25pt; height: 3.75pt;">
                        <p class="elementToProof" style="margin: 0cm; font-family: aptos, sans-serif; font-size: 12pt;"><span style="font-family: verdana, sans-serif; font-size: 10.5pt; color: black;"><img id="x_image_1" width="683" height="260" pnsrc="cid:imgDescripcion" src="cid:imgDescripcion" style="width: 683px; height: 260px; min-width: auto; min-height: auto; margin: 0px;" /></span></p>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>`,
      attachments: [
        {
          filename: `firma${data.cedula}.p12`,
          path: `${routeUser}`.replace(/\\/g, "/"), // Reemplazar las barras invertidas por barras normales
        },
        {
          filename: `correo.png`,
          path: "src/models/mail/img/correo.png",
          cid: "imgCorreo",
        },
        {
          filename: `telefono.png`,
          path: "src/models/mail/img/telefono.png",
          cid: "imgTelefono",
        },
        {
          filename: `direccion.png`,
          path: "src/models/mail/img/direccion.png",
          cid: "imgDireccion",
        },
        {
          filename: `hipervinculo.png`,
          path: "src/models/mail/img/hipervinculo.png",
          cid: "imgHipervinculo",
        },
        {
          filename: `descripcion.png`,
          path: "src/models/mail/img/descripcion.png",
          cid: "imgDescripcion",
        },
        {
          filename: `youtube.png`,
          path: "src/models/mail/img/youtube.png",
          cid: "imgYoutube",
        },
        {
          filename: `facebook.png`,
          path: "src/models/mail/img/facebook.png",
          cid: "imgFacebook",
        },
        {
          filename: `linkedin.png`,
          path: "src/models/mail/img/linkedin.png",
          cid: "imgLinkedin",
        },
        {
          filename: `logo.png`,
          path: "src/models/mail/img/logo.png",
          cid: "imgLogo",
        },
      ],
    });
    alert("Correo enviado")
    return {message: 'Correo ha sido enviado'};
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return JSON.stringify({ message: error.message, stack: error.stack });
  }
}