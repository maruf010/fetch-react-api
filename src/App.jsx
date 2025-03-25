import Users from './users'
import Friends from './friend'
import './App.css'
import { Suspense } from 'react'

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUser={fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h2>Friends are loading...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
    </>
  )
}

export default App
