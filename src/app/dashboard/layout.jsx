export default function DashboardLayout({ children }) {
  return (
    <main className="h-screen pt-[70px] flex">
      {/* Aca va la Sidebar */}
      <div className="bg-[#4f4f4f] w-[20rem] h-full">Sidebar de Prueba</div>
      <>{children}</>
    </main>
  );
}
