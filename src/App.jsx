import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./assets/pages/Dashboard";
import Home from "./assets/pages/Home";
import Transactions from "./assets/components/Transactions";
import Charts from "./assets/components/Charts";
import Transfer from "./assets/pages/Transfer";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import ForgetPassword from "./assets/pages/ForgetPassword";
import ProfieUpdate from "./assets/pages/ProfieUpdate";
import ProtectedRoutes from "./assets/components/protectedRoutes.jsx";
import Notfound from "./assets/pages/Notfound";
import RequestOTP from "./assets/pages/RequestOTP";

function App() {

  return (
    <>
     <button class="menu-toggle" id="menuToggle">
      <i class="fas fa-bars"></i>
    </button>
      <Routes>
        <Route element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}>
          <Route index path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/analytics" element={<Charts/>} />
          <Route path="/transfer" element={<Transfer/>} />
           <Route path="/profileupdate" element={<ProfieUpdate/>} />
        </Route>
         <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/requestotp" element={<RequestOTP/>} />

       
      </Routes>
    </>
  );
}

export default App;
