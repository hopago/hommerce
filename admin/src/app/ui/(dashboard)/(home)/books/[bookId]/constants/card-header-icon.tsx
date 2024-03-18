import { OptionalTitle } from "../_components/BookInfoDetailsCard";

import { CiDiscount1 } from "react-icons/ci";
import { IoMdPricetag } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { MdSell } from "react-icons/md";

export default function CardHeaderIcon({ title }: { title: OptionalTitle }) {
  switch (title) {
    case "discount":
      return <CiDiscount1 />;
    case "eBookPrice":
      return <IoMdPricetag />;
    case "unit":
      return <FaDollarSign />;
    case "comment":
      return <FaComment />;
    case "sellType":
      return <MdSell />;
    default:
      return null;
  }
}
