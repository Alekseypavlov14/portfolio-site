import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/home' element={<div>home</div>} />
        <Route path='/about' element={<div>about</div>} />
        <Route path='/contacts' element={<div>contacts</div>} />
        <Route path='*' element={<Navigate to={'/home'} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
