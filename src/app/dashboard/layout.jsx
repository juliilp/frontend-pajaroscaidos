
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <>{children}</>
    </div>
  );