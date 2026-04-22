// src/pages/UserRequest.jsx
export default function UserRequest() {
  const rows = Array.from({ length: 8 });

  return (
    <div className="bg-white border border-gray-200 p-4">
      <div className="text-xs text-gray-400 mb-3">
        Bank User Management / User Request
      </div>

      <h2 className="text-lg font-semibold mb-4">User Request</h2>

      <div className="flex gap-6 text-sm mb-4">
        <label><input type="radio" defaultChecked /> Search by Date Range</label>
        <label><input type="radio" /> Search by User Name</label>
      </div>

      <div className="grid grid-cols-6 gap-3 mb-4">
        <input className="border p-2 text-sm" placeholder="Search here" />
        <input className="border p-2 text-sm" placeholder="Start date" />
        <input className="border p-2 text-sm" placeholder="End date" />
        <select className="border p-2 text-sm"><option>User Type</option></select>
        <select className="border p-2 text-sm"><option>Status</option></select>
        <button className="bg-red-700 text-white text-sm px-3 rounded">
          Download Excel
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr className="text-left border">
            <th className="p-2">S. No.</th>
            <th className="p-2">Username</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Employee Name</th>
            <th className="p-2">Email ID</th>
            <th className="p-2">Expand</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((_, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">john_doe</td>
              <td className="p-2">EMP92198</td>
              <td className="p-2">Carson Darrin</td>
              <td className="p-2">johndoe@gmail.com</td>
              <td className="p-2">⌄</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
