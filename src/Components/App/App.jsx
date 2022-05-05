import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

// component imports
import Home from '../Home/Home';
import BackgroundCode from '../BackgroundCode/BackgroundCode';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/games'>Games</Link>
          </nav>
        </header>
        <section className={styles.main}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<h1>About Page</h1>} />
            <Route path='/contact' element={<h1>Contact Page</h1>} />
            {/* snake is a snake game to play */}
            <Route path='/games' element={<h1>Snake Page</h1>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
