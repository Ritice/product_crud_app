import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import { New_product } from './components/New_product'
import { Products } from './components/Products'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState,  } from 'react'


function App() {

 const [currentRoute,setCurrentRoute]=useState("");

 useEffect(()=>{
    const path=window.location.pathname;
    setCurrentRoute(path.slice(1,path.length))
 },[]);
 
  return (
     <BrowserRouter>
  
     {/* declaratio de la navigation  */}
     <nav className='m-1 p-2 border border-info'>
      <ul className="nav na-pills">
          <li>
             <Link 
             onClick={()=>setCurrentRoute("home")}
              className={currentRoute=="home" ?
               "btn btn-info ms-1":
               "btn btn-outline-info ms-1"}
               to={"/home"}
               > Home</Link>
          </li>

          <li>
             <Link
             onClick={()=>setCurrentRoute("products")}
              className={currentRoute=="products" ? 
             "btn btn-info ms-1":
             "btn btn-outline-info ms-1"} 
             to={"/products"}> Products</Link>
          </li>

          <li>
             <Link 
             onClick={()=>setCurrentRoute("new")}
             className={currentRoute=="new" ? 
             "btn btn-info ms-1":
             "btn btn-outline-info ms-1"}
             to="/new"> 
             New product</Link>
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
