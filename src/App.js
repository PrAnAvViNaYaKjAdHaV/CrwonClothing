import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Nevigation from "./routes/navigation/navigation.component";
import Authantication from "./routes/authanticaition/authantication.component";
import Shop from "./routes/shop/shop.component";

function App() {
 
  return (
    <Routes>
     <Route path="/" element={<Nevigation/>}>
       <Route index element={<Home/>}/>
       <Route path="shop"  element={<Shop/>}/>
       <Route path="auth" element={<Authantication/>}/>
     </Route>
    </Routes>
  );
}
export default App;
