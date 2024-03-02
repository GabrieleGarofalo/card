import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
  console.log(props);

  return (
    <article>
    <div className='card'>
    <img src={props.img} alt={`${props.nome}`}/>
    <h6>{props.nome}</h6>
    <hr/>
    <p>{props.prezzo}</p>
    <p>bamby000</p>
    </div>
    <p className='card-time'>RIAPRE PRESTO</p>
    <button>{props.costoFinale}</button>
    
    </article>
    );
  }
  
  export default Product;
  