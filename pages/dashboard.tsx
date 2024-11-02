
import Navbar from "../components/sidebar";
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="title">
         <h1>Bem-vindo ao Stock Smart</h1>
    <div className="container">
      <Navbar />
      <li></li>
    </div>
    </div>
  );
};

export default Dashboard;
