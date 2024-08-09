import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PostsComments from './pages/PostsComments'
import AlbumsPhotos from './pages/AlbumsPhotos'
import TodosUsers from './pages/TodosUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts-comments' element={<PostsComments />} />
          <Route path='albums-photos' element={<AlbumsPhotos />} />
          <Route path='todos-users' element={<TodosUsers />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
