/** @format */

import "../Contacto/contactoMain.scss";
import unDrawEmail from "../../../../img/unDraw_mobile-inbox_aszm.svg";

const ContactoMain = () => {
   return (
      <div className="contactoMain-global">
         <div className="contactoMain-container">
            <div>
               <img src={unDrawEmail} alt="" />
            </div>

            <div>
               <form className="contactoMain-form">
                    <div className="contactoMain-labelInputContainer">
                        <div className="contactoMain-labelInput">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ej: Nicolas"
                            />
                        </div>
                        <div className="contactoMain-labelInput">
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Ej: Trucco"
                            />
                        </div>
                    </div>

                    <div className="contactoMain-labelInputContainer">
                        <div className="contactoMain-labelInput">
                            <label htmlFor="celular">Número Celular:</label>
                            <input
                            type="tel"
                            id="celular"
                            name="celular"
                            placeholder="Ej: +5493416726255"
                            />
                        </div>
                        <div className="contactoMain-labelInput">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ej: example@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="contactoMain-textarea">
                        <label htmlFor="consulta">Consulta:</label>
                        <textarea id="consulta" name="consulta"></textarea>
                    </div>
                    <button className="contactoMain-btn" type="submit">
                        Enviar
                    </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ContactoMain;
