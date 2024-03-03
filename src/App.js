//import Componente1 from "./Componente1";
//import Componente2 from "./Componente2";
import Product from "./Product";
import products from "./products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <h2>Card Dinamiche</h2>
        <section className="card-section">
           {products.map((prodotto) => {
            const {id} = prodotto;
            return <Product key={id} {...prodotto}/>
           })}
        </section>
         {/*<Componente1/>*/}
        {/*<Componente2/>*/}
    </div>
  );
}
export default App;
