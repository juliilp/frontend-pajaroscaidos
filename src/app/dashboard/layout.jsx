import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex mt-[70px]">
      <Sidebar />
      <>{children}</>
    </div>
  );
}
