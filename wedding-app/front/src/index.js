import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import Create from "./components/create";
import RecordList from "./components/recordlist";
import Edit from "./components/edit";
import RegistryList from "./components/registrylist";
import CreateEntry from "./components/createEntry";
import EditEntry from "./components/editEntry";
import GuestList from "./components/guestlist";
import CreateGuest from "./components/createGuest";
import EditGuest from "./components/editGuest";


const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/recordlist" element={<RecordList />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/registrylist" element={<RegistryList />} />
      <Route path="/createEntry" element={<CreateEntry />} />
       <Route path="/editEntry/:id" element={<EditEntry />} />
       <Route path="/guestlist" element={<GuestList />} />
       <Route path="/createGuest" element={<CreateGuest />} />
       <Route path="/editGuest/:id" element={<EditGuest />} />
     </Routes>
   </div>
 );
};
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
