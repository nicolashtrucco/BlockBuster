import '../Nosotros/nosotrosMain.scss'
import LastBlockBuster from "../../../../img/LastBlockBuster.jpg";

const NosotrosMain = () => {
  return (
    <div className="nosotrosMain-Global">
             <div className="nosotrosMain-Container">
                <div className="nosotrosMain-ImgP">
                   <img src={LastBlockBuster} alt="nosotrosBlockBuster" />
                   <div>
                      <p>
                         <span>BlockBuster</span> fue una de las franquicias de
                         alquiler de películas y videojuegos más emblemáticas de
                         todos los tiempos. Fundada en 1985, se convirtió en el
                         lugar de referencia para millones de personas que querían
                         disfrutar del cine en casa. Con la llegada del streaming,
                         el mercado evolucionó rápidamente, pero la huella de
                         BlockBuster sigue presente.
                      </p>
    
                      <p>
                         Durante su auge, la compañía alcanzó más de 9,000
                         sucursales en todo el mundo, ofreciendo un extenso catálogo
                         de películas y videojuegos para todos los gustos. Los
                         clientes encontraban en sus tiendas una experiencia única,
                         recorriendo pasillos llenos de estrenos esperados, clásicos
                         inolvidables y verdaderas joyas ocultas del cine.
                      </p>
    
                      <p>
                      A pesar de los cambios en la industria, el recuerdo de BlockBuster continúa vivo, no solo en la memoria de quienes disfrutaron su época dorada, sino también en la última tienda que aún resiste, recordándonos la emoción de elegir una película para llevar a casa.
                      </p>

                   </div>
                   
                   
                </div>
                <div className="nosotrosMain-p">
                   <div>
                      <p>
                         En <span>BlockBuster</span>, siempre creímos en la magia
                         del cine y en la experiencia de elegir una película para
                         disfrutar con amigos o familia. Nuestra historia es un
                         recordatorio de la evolución del entretenimiento, pero
                         también de la nostalgia de una época en la que recorrer los
                         pasillos de nuestras tiendas era una tradición.
                      </p>
                      <p>
                         Hoy, seguimos celebrando ese legado con la última tienda en{" "}
                         <span>Bend, Oregón</span>, que se ha convertido en un
                         símbolo para los amantes del cine. Además, BlockBuster
                         continúa en la memoria de quienes disfrutaron de su
                         experiencia única.
                      </p>
                   </div>
                </div>
             </div>
          </div>
  )
}

export default NosotrosMain