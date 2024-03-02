//import Componente1 from "./Componente1";
//import Componente2 from "./Componente2";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <h2>La prima card</h2>
        <section className="card-section">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </section>
         {/*<Componente1/>*/}
        {/*<Componente2/>*/}
        
    </div>
  );
}

export default App;
