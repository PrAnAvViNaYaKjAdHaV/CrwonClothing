import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Nevigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/sing-in/sing-in.component";
function App() {
  return (
    <Routes>
     <Route path="/" element={<Nevigation/>}>
       <Route index element={<Home/>}/>
       <Route path="shop"  element={<SingIn/>}/>
       <Route path="sing-in" element={<SingIn/>}/>
     </Route>
    </Routes>
  );
}
export default App;
