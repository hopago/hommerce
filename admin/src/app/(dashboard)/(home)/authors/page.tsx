import { ApiModal } from "@/app/ui/(dashboard)/(home)/@modal";
import ApiServices from "@/app/ui/(dashboard)/(home)/_components/ApiServices";

export default function AuthorMain() {
  return (
    <>
      <ApiServices title="저자 API" tag="authors" />
      <ApiModal />
    </>
  );
}
