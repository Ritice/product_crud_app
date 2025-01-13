import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import { New_product } from './components/New_product'
import { Products } from './components/Products'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {


  return (
     <BrowserRouter>
     
     {/* declaratio de la navigation  */}
     <nav className='m-1 p-2 border border-info'>
      <ul className="nav na-pills">
          <li>
             <Link to={"/home"} className='btn btn-outline-info ms-1'> Home</Link>
          </li>

          <li>
             <Link to={"/products"} className='btn btn-outline-info ms-1'> Products</Link>
          </li>

          <li>
             <Link to="/new" className='btn btn-outline-info ms-1'> New product</Link>
          </li>
        
      </ul>
     </nav>

     {/* declaratio des routes */}
     <Routes>

        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/new" element={<New_product/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
