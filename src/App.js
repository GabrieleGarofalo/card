//import Componente1 from "./Componente1";
//import Componente2 from "./Componente2";
//import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg";


const primaCard = {
  nome: "Tazza 50pz.",
  img:
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg",
   prezzo: 8,
}

const secondaCard = {
  nome: "caricatore 50pz.",
  img:
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12079.jpg",
   prezzo: 20,
}

function App() {
  return (
    <div className="App">
        <h2>La prima card</h2>
        <section className="card-section">
        <Product nome={primaCard.nome} prezzo={primaCard.prezzo} img={primaCard.img}/>
        <Product nome={secondaCard.nome} prezzo={secondaCard.prezzo} img={secondaCard.img}/>
        </section>
         {/*<Componente1/>*/}
        {/*<Componente2/>*/}
        
    </div>
  );
}


const Product = (props) => {
  console.log(props);
  const prezzo = '14'
const alt = 'valore';
  return (
    <article>
    <div className='card'>
    <img src={img} alt={`${alt}`}/>
    <h6>10euro Amazon + 20p</h6>
    <hr/>
    <p>2.16 euro</p>
    <p>bamby000</p>
    </div>
    <p className='card-time'>RIAPRE PRESTO</p>
    <button>{prezzo}</button>
    
    </article>
    );
  }



export default App;
