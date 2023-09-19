import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <>{children}</>
    </div>
  );
}
