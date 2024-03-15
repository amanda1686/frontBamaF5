import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from "./pages/Login/Login.jsx"
import  Dashboard  from './pages/Dashboard/Dashboard.jsx';
import CreateClient from './components/CreateClient/CreateClient';
import ClientsView from './pages/ClientsView/ClientsView.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/clients-view' element={<ClientsView />} />
      <Route path='/create-client' element={<CreateClient />}/>
      </Routes>
      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
