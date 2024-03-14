import ApiServices from "@/app/ui/(dashboard)/(home)/_components/ApiServices";
import UsersSearch from "@/app/ui/(dashboard)/(home)/users/_components/UsersSearch";
import UsersTable from "@/app/ui/(dashboard)/(home)/users/_components/UsersTable";
import { ApiModal } from "@/app/ui/(dashboard)/(home)/@modal";

export default function Users() {
  return (
    <>
      <UsersSearch />
      <UsersTable />
      <ApiServices tag="users" title="유저 API" />
      <ApiModal />
    </>
  );
}
