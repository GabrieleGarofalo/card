//import Componente1 from "./Componente1";
//import Componente2 from "./Componente2";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';

const primaCard = {
  nome: "Tazza 50pz.",
  img:
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg",
   prezzo: 8,
   costoFinale: 10,
  };

const secondaCard = {
  nome: "caricatore 50pz.",
  img:
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13733.jpg",
   prezzo: 20,
   costoFinale: 22
};

function App() {
  return (
    <div className="App">
        <h2>Card Dinamiche</h2>
        <section className="card-section">
        <Product 
        nome={primaCard.nome} 
        prezzo={primaCard.prezzo} 
        img={primaCard.img}
        costoFinale={primaCard.costoFinale}
        />
        <Product 
        nome={secondaCard.nome} 
        prezzo={secondaCard.prezzo} 
        img={secondaCard.img}
        costoFinale={secondaCard.costoFinale}
        />
        </section>
         {/*<Componente1/>*/}
        {/*<Componente2/>*/}
        
    </div>
  );
}






export default App;
