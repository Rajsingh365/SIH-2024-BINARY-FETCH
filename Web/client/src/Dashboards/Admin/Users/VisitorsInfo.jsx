import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { motion } from "framer-motion";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const VisitorsInfo = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Visitors",
        data: [10, 900, 2000, 2500, 4500, 4600],
        fill: false,
        backgroundColor: "#CB964D",
        borderColor: "#CB964D",
      },
    ],
  };

  return (
    <motion.div 
    initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:3}} 
    className="bg-[#21222D] py-10 rounded-lg mx-5 w-[90%] ">
      <h2 className="text-3xl font-semibold ml-10 pb-5">Visitors Summary</h2>
      <div className="flex items-center justify-center p-5 text-3xl text-center">
        <Line data={data} height={50} width={''} />
      </div>
    </motion.div>
  );  
};

export default VisitorsInfo;