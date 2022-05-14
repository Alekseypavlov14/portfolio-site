import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<div>home</div>} />
          <Route path='/about' element={<div>about</div>} />
          <Route path='/contacts' element={<div>contacts</div>} />
          <Route path='*' element={<Navigate to={'/home'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
