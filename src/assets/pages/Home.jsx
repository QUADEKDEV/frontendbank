import Cards from "../components/Cards";
import Charts from "../components/Charts";
import QuickAction from "../components/QuickAction";
import Transactions from "../components/Transactions";
import BarChart from "../components/Mychart";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Home = () => {

  const location=useLocation()
  const apidata=location.state;

  const name1 = useSelector((state) => state.user.balance);
  const dispatch = useDispatch();
  
  return (
    <div>
      
      <Cards/>
      <Transactions/>
    </div>
  );
};

export default Home;
