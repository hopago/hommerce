import Footer from "@/app/ui/(dashboard)/(home)/_components/Footer";
import Navbar from "@/app/ui/(dashboard)/(home)/_components/Navbar";
import Sidebar from "@/app/ui/(dashboard)/(home)/_components/Sidebar";

import styles from "@/app/ui/(dashboard)/(home)/dashboard.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.contents}>
          <section>{children}</section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
