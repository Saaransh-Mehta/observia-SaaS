import { BrowserRouter,Route,Routes } from "react-router"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Signup/>}/>

        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
