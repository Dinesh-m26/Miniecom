import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Cart } from "./Components/Cart"
import { createContext, useState } from "react"

export const cartContext = createContext()

export default function App() {
  const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{cart,setCart}} >
       <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/Cart" element={<Cart  />} />
      </Routes>
    </BrowserRouter>
    </cartContext.Provider>
   
  )
}