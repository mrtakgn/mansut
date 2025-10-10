import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Header />
      <div className="page-container">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
