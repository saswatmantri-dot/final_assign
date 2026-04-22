import { useState } from "react";
import Sidebar from "./UserRequestSidebar";
import Topbar from "./Topbar";
import UserRequest from "./UserRequest";

export default function UserRequestPage() {
  const [activePage, setActivePage] = useState("user-request");

  return (
    <div className="h-screen w-screen bg-[#f3f3f3] flex overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 overflow-auto p-4">
          {activePage === "user-request" && <UserRequest />}
        </main>
      </div>
    </div>
  );
}