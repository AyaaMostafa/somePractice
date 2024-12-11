// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} /> {/* Use Test component at root route */}
      </Routes>
    </Router>
  );
}

export default App;
