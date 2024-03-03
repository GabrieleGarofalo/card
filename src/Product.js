import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({img,costoFinale,nome,prezzo}) => {
  // const{costoFinale, nome, prezzo, img} = props

  return (
    <article>
    <div className='card'>
    <img src={img} alt={`${nome}`}/>
    <h6>{nome}</h6>
    <hr/>
    <p>{prezzo}</p>
    <p>bamby000</p>
    </div>
    <p className='card-time'>RIAPRE PRESTO</p>
    <button>{costoFinale}</button>
    
    </article>
    );
  }
  
  export default Product;
  