import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './page/Index';
import Header from './component/common/Header.jsx'
import Layout from './component/common/Layout.jsx';
import Login from './page/Login.jsx';
import Rental from './page/Rental.jsx';
import Curriculum from './page/Curriculum.jsx';
import Signup from './page/Signup.jsx';
import Hospital from './page/Hospital.jsx';
import Medicine from './page/Medicine.jsx';
import MedicineApproval from './page/MedicineApproval.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/rental' element={<Rental/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/hospital/:hospital_name" element={<Hospital />} />
          <Route path='/curriculum' element={<Curriculum/>}/>
          <Route path='/medicine' element={<Medicine/>}/>
          <Route path='/medicine/approval' element={<MedicineApproval/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
