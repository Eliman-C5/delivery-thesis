import React, { Fragment, useState } from 'react'
import Card from './Card'

const workers = [
    {
        id: 1, 
        name: 'Eli Castellano', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Jorge Hernández',
    },
    {
        id: 2, 
        name: 'Juanito Pérez', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Ambrosio',
    },
    {
        id: 3, 
        name: 'Douglas Losada', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Arístides Calvani',
    },
    {
        id: 4, 
        name: 'Germán Sosa', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Arístides Calvani',
    },
    {
        id: 5, 
        name: 'Carlos Herrera', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Carmen Herrera',
    },
    {
        id: 6, 
        name: 'Ricardo Santos', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Germán Ríos Linares',
    },
    {
        id: 7, 
        name: 'Gustavo Coronel', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'La Rosa',
    },
    {
        id: 8, 
        name: 'Gerson Acosta', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Punta Gorda',
    },
    {
        id: 9, 
        name: 'Tiberio Matos', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'Rómulo Betancourt',
    },
    {
        id: 10, 
        name: 'Yoan Sánchez', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
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