import DataChart from "@/app/ui/(dashboard)/(home)/_components/DataChart";
import LatestReport from "@/app/ui/(dashboard)/(home)/_components/LatestReport";
import RightBar from "@/app/ui/(dashboard)/(home)/_components/RightBar";
import TotalCardList from "@/app/ui/(dashboard)/(home)/_components/TotalCardList";

import styles from "@/app/ui/(dashboard)/(home)/dashboard.module.css";

export default function DashBoard() {
  return (
    <div className={styles.dashboardContainer}>
      <main className={styles.main}>
        <TotalCardList />
        <LatestReport />
        <DataChart />
        {/* TODO: API Docs & Routes */}
      </main>
      <aside className={styles.aside}>
        <RightBar />
      </aside>
    </div>
  );
}
