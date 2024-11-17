import './App.css'
import { Routes, Route } from 'react-router-dom';
import Create from './pages/Create'
import Delete from './pages/Delete'
import Edit from './pages/Edit'
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cats/create' element={<Create />} />
        <Route path='/cats/edit' element={<Edit />} />
        <Route path='/cats/delete' element={<Delete />} />
      </Routes>
  )
}

export default App
