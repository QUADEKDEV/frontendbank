import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
   let navigate=useNavigate()
  const logout=()=>{
    localStorage.clear();
  }
  return (
    <div>

      <div className="logo">
        <i className="fa-solid fa-building-columns"></i>
        <h2>Free Bank</h2>
      </div>
      <ul>
        <Link to={"/home"} className=" nav-item forLink active">
          <li>
            <i className="fas fa-home"></i>
            <span> Home</span>
          </li>
        </Link>
        <Link to={"/transfer"} className=" nav-item forLink">
          <li>
            <i className="fas fa-home"></i>
            <span> Transfer</span>
          </li>
        </Link>
        <Link to={"/transaction"} className=" nav-item forLink">
        <li>
          <i className="fas fa-exchange-alt"></i>
          <span>Transaction History</span>
        </li>
        </Link>
        <Link to={"/analytics"} className=" nav-item forLink">
        <li>
          <i className="fas fa-chart-line"></i>
          <span>Ananlytics</span>
        </li></Link>
         <Link to={"/profileupdate"} className=" nav-item forLink">
        <li>
          <i className="fa-solid fa-gear"></i>
          <span>Update Profile </span>
        </li></Link>
        <Link  className=" nav-item forLink"onClick={()=>logout()} to={'/'}>
        <li>
         <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout </span>
        </li></Link>
        
      </ul>
    </div>
  );
};

export default Sidebar;
