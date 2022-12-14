
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <div className="bg-lightGray h-screen">
      <Router>
        {/* <Sidebar/>
        <Header/> */}
        <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Table />} />
        </Routes>
        {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
