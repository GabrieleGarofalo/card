import React from 'react';

const Componente2 = () => {
  return(
    <section>
    
    <Saluto/>
    <Saluto/>
    <Saluto/>
    </section>
 );
};
  
  const Persona = () => {
    return <h2>Mi chiano Gabiele</h2>
  };
  
  const Messaggio = () => <h4>queso è un Messaggio</h4>
  
  const Saluto = () => {
    return (
      <React.Fragment>
      <Persona/>
      <Messaggio></Messaggio>
      </React.Fragment>
      );
    };
    
    export default Componente2;