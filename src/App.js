
import './App.css';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';

import HomePage from './Customer/Components/Pages/HomePage';
import Product from './Customer/Components/Product/Product';

function App() {
  return (
    <>
      <div className="App">
        <Navigation/>
        {/* <HomePage/> */}
        <Product/>
        <Footer/>
      </div>
    </>
    
  );
}

export default App;
