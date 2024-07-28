import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../src/pages/HomePage';
import SignIn from '../src/pages/SignInPage';
import Threads from '../src/pages/ThreadsPage';
import DetailThread from '../src/pages/DetailThreadPage';
import Navbar from '../src/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Threads" element={<Threads />} />
          <Route path="/DetailThread" element={<DetailThread />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
