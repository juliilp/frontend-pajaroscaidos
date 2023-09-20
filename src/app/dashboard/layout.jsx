import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="w-[80%]">{children}</section>
    </main>
  );
}
