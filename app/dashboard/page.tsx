import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";


export default function DashboardPage() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <div className="stats-grid">
          <StatsCard title="Revenue" value="₹5,00,000" />
          <StatsCard title="Cost" value="₹3,50,000" />
          <StatsCard title="Margin" value="30%" />
          <StatsCard title="Employees" value="25" />
        </div>

        <div className="card">
          <h3>Recent Projects</h3>
          <p>Website Dev - 30%</p>
          <p>Mobile App - 25%</p>
        </div>
      </div>
    </div>
  );
}