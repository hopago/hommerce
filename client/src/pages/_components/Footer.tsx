import { useParams } from "react-router-dom";

import FooterBody from "./FooterBody";
import FooterFamilySite from "./FooterFamilySite";

import { cn } from "../../lib/utils";

export default function Footer() {
  const pathname = useParams();
  const { bookId } = pathname;

  return (
    <div className={cn("footer", bookId && "details-page")}>
      <FooterFamilySite />
      <FooterBody />
    </div>
  );
}
