import Navbar from "@/app/ui/(dashboard)/_components/Navbar";
import Sidebar from "@/app/ui/(dashboard)/_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="dashboard">
      <section className="dashboard-sidebar">
        <Sidebar />
      </section>
      <Navbar />
      <section className="dashboard-contents">
        <aside>{children}</aside>
      </section>
    </div>
  );
}
