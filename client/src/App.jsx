import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Signin from './Pages/Signin';
import Projects from './Pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PrivateRoute/>}>
         <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/project' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
