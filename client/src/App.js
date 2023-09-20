// import React, { useState } from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main from "./components/main";
// import Book from "./components/book";
// import ThankYou from "./components/thankYou";
// import Navbar from "./components/navbar";
// import Menu from "./components/Menu/menu"

// export default _ => {
//   const [page, setPage] = useState(0);

//   return (
//     <div>
//       <Navbar setPage={setPage} />
//       {page === 0 ? <Main setPage={setPage} /> : null}
//       {page === 1 ? <Book setPage={setPage} /> : null}
//       {page === 3 ? <ThankYou /> : null}
//     </div>
    
//   );
// };

import React from "react";
import Navigation from "./components/navbar";
import Home from "./components/main";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Book from "./components/book";
import ThankYou from "./components/thankYou";

//import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<Book/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
      </Routes>
    </Router>
  );
}

export default App;






