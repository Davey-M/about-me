import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// component imports
import Home from '../Home/Home';

function App() {
  return (
    <Router>
      <>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/games'>Games</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<h1>About Page</h1>} />
            <Route path='/contact' element={<h1>Contact Page</h1>} />
            {/* snake is a snake game to play */}
            <Route path='/games' element={<h1>Snake Page</h1>} />
          </Routes>
        </section>
      </>
    </Router>
  );
}

export default App;
