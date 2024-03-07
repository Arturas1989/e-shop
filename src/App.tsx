import { Footer, Header, SearchBar } from './components';
import { AllRoutes } from './routes/AllRoutes';
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SearchBar />
        <AllRoutes/>
        <Footer />
    </div>
  );
}

export default App;
