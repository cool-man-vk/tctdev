// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/widgets/Header';
import { RouteNames } from './routes/RouteNames';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouteNames />
      </Router>
      
    </div>
  );
}

export default App;
