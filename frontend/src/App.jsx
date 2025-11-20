import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Home from './pages/Home'
import CreateUser from './pages/Users/create'
import Login from './pages/Login'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './router/PrivateRoute'

function App() {
  return (
    <AuthProvider>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path='/users' element={<Users />} />
          <Route path='/create/user' element={<CreateUser />} />
        </Route>

      </Routes>

      <Footer />
      
    </AuthProvider>
  )
}

export default App