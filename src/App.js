import { useState, useEffect } from 'react'
import './App.css';
import Pages from './pages'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/aofwittawat')
      .then(res => res.json())
      .then(user => {
        setUser(user)
        console.log(user);
      })
  }, [])

  if (!user) {
    return <div />
  }
  return  <Pages user={user} />
}

export default App;
