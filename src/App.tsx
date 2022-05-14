import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contacts } from './pages/Contacts/Contacts'
import { Layout } from './components/Layout/Layout'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
