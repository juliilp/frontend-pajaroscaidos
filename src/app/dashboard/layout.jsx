import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="w-full lg:w-[80%]">{children}</section>
    </div>
  );
}
