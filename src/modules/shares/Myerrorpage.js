import React, { Fragment } from 'react'

function Myerrorpage() {
  const myimg = "https://studio.uxpincdn.com/studio/wp-content/uploads/2022/08/Zrzut-ekranu-2022-08-26-o-14.10.43-1024x589.png.webp";
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='cus-err'>404</h1>
            <h3>Page Note Found</h3>
              {/* <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2022/08/Zrzut-ekranu-2022-08-26-o-14.10.43-1024x589.png.webp"/> */}
            <img src={myimg} alt="myerro page"/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Myerrorpage