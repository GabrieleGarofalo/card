import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const pStyle = {textTransform: 'uppercase'}
const Product = () => {
  const prezzo = '14'
  const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg";
  const alt = 'valore';
  return (
    <article>
    <div className='card'>
    <img src={img} alt={`${alt}`}/>
    <h6>10euro Amazon + 20p</h6>
    <hr/>
    <p>2.16 euro</p>
    <p style={pStyle}>bamby000</p>
    </div>
    <p className='card'>Riapre presto</p>
    <button>{prezzo}</button>
    
    </article>
    );
  }
  
  export default Product;
  