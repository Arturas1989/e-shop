import { Footer, Header, SearchBar } from './components';
import { CartContextProvider } from './contexts/cartContext';
import { AllRoutes } from './routes/AllRoutes';
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <Header />
          <SearchBar />
          <AllRoutes/>
          <Footer />
        </CartContextProvider>
    </div>
  );
}

export default App;
