import { useNavigate } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/aboutme")
    }, 8000)
  }, [])

  return (
    <Home/>
  )
}

export default App
