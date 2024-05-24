import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Messages from './pages/Messages';
import Match from './pages/Match';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/match" element={<Match />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
  );
}

export default App;
