import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";



export default function EmployeesPage() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Employees</h2>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rajni</td>
                <td>rajni@email.com</td>
                <td>Manager</td>
                <td>₹50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}