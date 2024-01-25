import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Navigation/Home"
import About from "./Navigation/About"
import Contact from "./Navigation/Contact"
import Service from "./Navigation/Service"
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}