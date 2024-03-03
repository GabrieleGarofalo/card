import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({img,costoFinale,nome,prezzo,children}) => {
  // const{costoFinale, nome, prezzo, img} = props
   const handleClick = () => {
    console.log("mi hai premuto");
   }

   const paramsHandler = (prezzo) =>{
    console.log(prezzo);
   }

   const eventHandler = (price) => (e) => {
    console.log(e.target.innerText);
    console.log(price);
   }

   function prezzoPieno(price) {
    return function prova(e){
      console.log(e.target.innerText);
      console.log(price);
    }
   }

  return (
    // <article onMouseOver={() => console.log(costoFinale)}>
    <article >
    <div className='card'>
    <img src={img} alt={`${nome}`} onClick ={handleClick}/>
    <h6>{nome}</h6>
    <hr/>
    <p>{prezzo}</p>
    <p>bamby000</p>
    <p>{children}</p>
    </div>
    <p className='card-time'>RIAPRE PRESTO</p>
    <button onClick={() => alert(`nome: ${nome}`)}>{costoFinale}</button>
    <button onClick={prezzoPieno(prezzo)}>args</button>
    
    </article>
    );
  }
  
  export default Product;
  