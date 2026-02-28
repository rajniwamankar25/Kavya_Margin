import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";


export default function ProjectsPage() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Projects</h2>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Revenue</th>
                <th>Cost</th>
                <th>Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Dev</td>
                <td>ABC Corp</td>
                <td>₹2,00,000</td>
                <td>₹1,40,000</td>
                <td>30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}