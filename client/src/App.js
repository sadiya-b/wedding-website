import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Create from "./components/create";
import RecordList from "./components/recordlist";
import Edit from "./components/edit";
import RegistryList from "./components/registrylist";
import CreateEntry from "./components/createEntry";
import EditEntry from "./components/editEntry";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
      <Route exact path="/" element={<RecordList />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/registrylist" element={<RegistryList />} />
      <Route path="/createEntry" element={<CreateEntry />} />
       <Route path="/editEntry/:id" element={<EditEntry />} />
     </Routes>
   </div>
 );
};
 
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/