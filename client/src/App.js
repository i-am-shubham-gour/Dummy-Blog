import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Createpost from "./component/Createpost";
import Displaycard from "./component/Displaycard";
import Header from "./component/Header";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>

      <Routes>
        <Route exact path="/myPost" element={<Displaycard/>} />
        <Route exact path="/createPost" element={<Createpost/>}/>
      
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
