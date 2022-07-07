import { Fragment, useState } from "react"
import Modal from './Modal'

const Card = ({name, text, img, sectors, phone}) => {

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
                    <span className="span-project">{phone}</span>
                    <div className="btnBox-project">
                        <button onClick={handleModal}>Cerrar</button>
                        <button>Enviar datos</button>
                    </div>
                </div>
            </Modal>
        }
    </Fragment>
  )
}

export default Card