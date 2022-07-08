import { Fragment, useState } from "react"
import Modal from './Modal'

const Card = ({name, text, img, sectors}) => {

    const [show, setShow] = useState(false)

    const handleModal = () => {
        setShow(!show)
    }

  return (
    <Fragment>
        <div className='card-project' onClick={handleModal}>
            <img src={img} className='image-project' />
            <h2>{name}</h2>
            <p>
            {text}
            </p>
            <p> <span className='span-project'>Sectores:</span> {sectors}</p>
        </div>

        {show && 
            <Modal>
                <div className="modal-form-project">
                    <h2>{name}</h2>
                    <p>Texto de prueba</p>
                    <span className="span-project">El repartidor se contactará con usted en cuanto la administración verifique el pago</span>
                    <div className="btnBox-project">
                        <button onClick={handleModal} className='btn-project'>Cerrar</button>
                        <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdpUc-l_NFMVpWiyYJ2HqNDzvqw3tvHZiSpNtM-ciffc2ZOOQ/viewform?usp=sf_link" 
                        target='_blank'
                        className="a-project button"
                        >
                            Enviar datos
                        </a>
                    </div>
                </div>
            </Modal>
        }
    </Fragment>
  )
}

export default Card