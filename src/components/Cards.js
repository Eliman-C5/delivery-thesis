import React from 'react'
import Card from './Card'

const workers = [
    {
        id: 1, 
        name: 'Eli Castellano', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'El Lucero, Los postes negros, Av. 32',
        phone: '+58 4146216537'
    },
    {
        id: 2, 
        name: 'Eli Castellano', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'El Lucero, Los postes negros, Av. 32',
        phone: '+58 4146216537'
    },
    {
        id: 3, 
        name: 'Eli Castellano', 
        text: 'Trabaja regularmente de x hora a y hora. Super responsable y llega a cualquier parte',
        img: '/img/Eli.png',
        sectors: 'El Lucero, Los postes negros, Av. 32',
        phone: '+58 4146216537'
    },
]

const Cards = () => {
  return (
    <div className='cards-project'>
        {
            workers.map(worker => (
                <Card 
                    key={worker.id} 
                    name={worker.name} 
                    text={worker.text} 
                    sectors={worker.sectors} 
                    img={worker.img} 
                    phone={worker.phone}
                />
            ))
        }
    </div>
  )
}

export default Cards