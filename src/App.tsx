import { Footer, Header, SearchBar } from './components';
import { CartContextProvider } from './contexts/cartContext';
import { ProductContextProvider } from './contexts/productContext';
import { AllRoutes } from './routes/AllRoutes';
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <Header />
          <ProductContextProvider>
            <SearchBar />
            <AllRoutes/>
          </ProductContextProvider>
          <Footer />
        </CartContextProvider>
    </div>
  );
}

export default App;
