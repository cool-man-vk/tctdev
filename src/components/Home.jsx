import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const divStyle = {
    'display':'flex',
    'flexDirection':'column',
    'justifyContent':'space-around',
    'alignItems':'center',
    'margin':'auto',
  }

  const buttonStyles = {
    'padding':'8px',
    'margin':'8px',
    'outline':'none',
    'border':'none',
    'borderRadius':'6px',
    'backgroundColor':'black',
    'color':'white',
    'cursor':'pointer',
    'fontSize':'14px'
  }

  return (
    <div>
        <h1 style={{'textAlign':'center','marginTop':'120px'}}>This is Home page</h1>
        <div style={divStyle}>
          <Link to='/merchant'>
              <button style={buttonStyles}>Go to Merchant page</button>
          </Link>
          <Link to='/categories'>
              <button style={buttonStyles}>Go to Categories page</button>
          </Link>
        </div>
        

    </div>
  )
}

export default Home