import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <AllRoutes/>
        <Footer />
    </div>
  );
}

export default App;
