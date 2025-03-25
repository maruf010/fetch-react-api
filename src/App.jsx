import Users from './users'
import Friends from './friends'
import './App.css'
import { Suspense } from 'react'
import Posts from './Posts'

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Post are Coming...</h3>}>
      <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

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
