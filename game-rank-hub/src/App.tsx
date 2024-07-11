import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Header from './components/Header'

function App() {


  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
