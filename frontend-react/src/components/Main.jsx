import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className="container ">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className='text-light'>STOCK PREDICTION PORTAL</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fuga voluptates autem quam commodi harum. Quae, asperiores similique exercitationem nobis sint corporis fugit dolorum dignissimos consequatur debitis dicta nam itaque at, voluptas blanditiis. Amet aspernatur eveniet laudantium natus eligendi eum dolores libero a dolorem incidunt?</p>
                <Button text='Login' class='btn-outline-info'/>
            </div>
        </div>
    </>
    )
}

export default Main