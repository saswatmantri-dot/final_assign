
import { useState } from "react";
import logo from "../../assets/bank.png";

export default function Sidebar({ activePage, setActivePage }) {
  const [openBankMenu, setOpenBankMenu] = useState(true);

  return (
    <aside className="w-[250px] bg-white border-r border-gray-200 flex flex-col">

      <nav className="text-sm text-gray-700">

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Dashboard
        </button>

        <div className="text-[11px] text-gray-400 px-4 pt-2 pb-1">
          Widgets
        </div>

        <button
          onClick={() => setOpenBankMenu(!openBankMenu)}
          className="w-full text-left px-4 py-3 bg-red-50 text-red-600 flex justify-between"
        >
          <span>Bank User Management</span>
          <span>{openBankMenu ? "⌄" : "›"}</span>
        </button>

        {openBankMenu && (
          <div className="bg-white">
            <button
              onClick={() => setActivePage("user-request")}
              className={`w-full text-left pl-8 pr-4 py-2 border-r-2 ${
                activePage === "user-request"
                  ? "border-red-500 text-red-600 bg-red-50"
                  : "border-transparent hover:bg-gray-100"
              }`}
            >
              User Request
            </button>

            <button className="w-full text-left pl-8 pr-4 py-2 hover:bg-gray-100">
              User List Report
            </button>
          </div>
        )}

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Audit Trail
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Reports
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Wallet Adjustment
        </button>
      </nav>
    </aside>
  );
}