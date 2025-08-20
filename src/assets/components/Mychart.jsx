import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const id = useSelector((state) => state.user.id);
  const transactions = useSelector((state) => state.user.transactions);
 
//filters current year data
  const currentYear = new Date().getFullYear();
  let transaction = transactions.filter((story) => {
    const timestamp = Date(story.created_at)
    const year = new Date(timestamp).getFullYear();
    if (story.senderId == id && currentYear==year) {
      return story;
    } else {
      return false;
    }
  })

  console.log(transaction);

  let[
      January,February,March,April,May,June,July,August,September,October,November,December
    ]=[0,0,0,0,0,0,0,0,0,0,0,0]
    

  //get data for each month
  for (let index = 0; index < transaction.length; index++) 
    {
      let date=Date(transaction.created_at);
      let key =new Date( date).getMonth() + 1;
      
      switch (key) {
        case 1:
           January+=transaction[index].amount
          break;
          case 2:
           February+=transaction[index].amount
          break;
          case 3:
           March+=transaction[index].amount
          break;
          case 4:
           April+=transaction[index].amount
          break;
          case 5:
           May+=transaction[index].amount
          break;
          case 6:
           June+=transaction[index].amount
          break;
          case 7:
           July+=transaction[index].amount
          break;
          case 8:
            August+=transaction[index].amount
          break;
          case 9:
           September+=transaction[index].amount
          break;
          case 10:
           October+=transaction[index].amount
          break;
          case 11:
           November+=transaction[index].amount
          break;
          case 12:
          December.log(12);
          break;
        default:
          break;
      }

  }
  // let tran= transaction.map((story) => {
  //   if (new Date (story.created_at).getFullYear()==new Date().getFullYear()) {
  //     console.log("hi");
  //     return story;
  //   } else {
  //     return false;
  //   }
  // })



  

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [January,February,March,April,May,June,July,August,September,October,November,December],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
