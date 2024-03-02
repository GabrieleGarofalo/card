import React from 'react';

const Componente1 = () => {
 // return React.createElement(
   // "div",
   //{}, 
   //React.createElement( "h3", {},"sono dentro un div")
  // );

  //=

  //return<div>
    //  <h3>sono dentro un div</h3>
    //</div>
    //se scritto cosi il div deve stare sotto il return 
    //altrimenti:
    return(
      <div>
        <h3 className='classe'>sono nel div</h3>
      </div>
    );
  
 };
  export default Componente1;
  
  