import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex mt-[70px]">
      <Sidebar />
      <section className="w-[80%]">{children}</section>
    </main>
  );
}
