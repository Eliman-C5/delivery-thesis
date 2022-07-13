import React, { Fragment, useState } from 'react'
import Card from './Card'

const workers = [
    {
        id: 1, 
        name: 'Eli Castellano', 
        text: 'Trabajador super responsable y que llega a cualquier parte. Tu pedido nunca estará más seguro',
        img: '/img/Eli.png',
        sectors: 'Jorge Hernández',
    },
    {
        id: 2, 
        name: 'Diover Pérez', 
        text: 'Los paquetes llegan rápido a su destino y nunca se ha recibido una sola queja',
        img: '/img/usuario-1.png',
        sectors: 'Ambrosio',
    },
    {
        id: 3, 
        name: 'Amador Yanez', 
        text: 'Disponible frecuentemente en horas de la noche. Incluidos sábados y domingos',
        img: '/img/usuario-2.png',
        sectors: 'Arístides Calvani',
    },
    {
        id: 4, 
        name: 'Luis Galbán', 
        text: 'Trabajar en este sector cambió su vida y ahora se dedica a extrapolar ese cambio al resto del mundo',
        img: '/img/usuario-3.png',
        sectors: 'Arístides Calvani',
    },
    {
        id: 5, 
        name: 'Noslen Figueroa', 
        text: 'Disfruta de hacer largas rutas para llevar el paquete a su destino',
        img: '/img/usuario-4.png',
        sectors: 'Carmen Herrera',
    },
    {
        id: 6, 
        name: 'Leandro Daza', 
        text: 'Centrado en trabajar principalmente en la mañana',
        img: '/img/usuario-5.png',
        sectors: 'Germán Ríos Linares',
    },
    {
        id: 7, 
        name: 'Gustavo Díaz', 
        text: 'La velocidad sería su mejor cualidad. Sin duda, ama este trabajo',
        img: '/img/Eli.png',
        sectors: 'La Rosa',
    },
    {
        id: 8, 
        name: 'Gerson Acosta', 
        text: 'Llega con tiempo de sobra y con gran precisión',
        img: '/img/Eli.png',
        sectors: 'Punta Gorda',
    },
    {
        id: 9, 
        name: 'Tiberio Matos', 
        text: 'Es quién manda en esta zona a nivel de pedidos',
        img: '/img/Eli.png',
        sectors: 'Rómulo Betancourt',
    },
    {
        id: 10, 
        name: 'Yoan Sánchez', 
        text: 'Goza de gran reputación entre los clientes por su carisma y responsabilidad',
        img: '/img/Eli.png',
        sectors: 'San Benito',
    },
]

const Cards = () => {

    const [dropdown, setDropdown]  = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    const [item, setItem] = useState('Elegir parroquia')

  return (
    <Fragment>

        <div className='dropdown-project' onClick={handleDropdown}>
            {item}
            <ul className={`list-project ${dropdown? 'list-project list-project-active' : 'list-project'}`}>
                <li className='list-item-project' onClick={() => {
                    setItem('Elegir parroquia')
                }}>Elegir parroquia</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Ambrosio')
                }}>Ambrosio</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Arístides Calvani')
                }}>Arístides Calvani</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Carmen Herrera')
                }}>Carmen Herrera</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Germán Ríos Linares')
                }}>Germán Ríos Linares</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Jorge Hernández')
                }}>Jorge Hernández</li>
                <li className='list-item-project' onClick={() => {
                    setItem('La Rosa')
                }}>La Rosa</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Punta Gorda')
                }}>Punta Gorda</li>
                <li className='list-item-project' onClick={() => {
                    setItem('Rómulo Betancourt')
                }}>Rómulo Betancourt</li>
                <li className='list-item-project' onClick={() => {
                    setItem('San Benito')
                }}>San Benito</li>
            </ul>
        </div>

        <div className='cards-project'>
            {
                item !== 'Elegir parroquia' ?
                workers.map(worker => (worker.sectors === item && 
                    <Card 
                        key={worker.id} 
                        name={worker.name} 
                        text={worker.text} 
                        sectors={worker.sectors} 
                        img={worker.img} 
                    />
                )) : 
                workers.map(worker => (
                    <Card 
                        key={worker.id} 
                        name={worker.name} 
                        text={worker.text} 
                        sectors={worker.sectors} 
                        img={worker.img} 
                    />
                ))
            }
        </div>
    </Fragment>
  )
}

export default Cards