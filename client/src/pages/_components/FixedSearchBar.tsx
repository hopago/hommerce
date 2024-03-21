import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";
import UserButton from "./UserButton";

import { useRecoilState } from "recoil";
import { GNBModalState } from "../../recoil/nav-gnb";

import { MdClose, MdOutlineFormatListBulleted } from "react-icons/md";
import AllCategories from "../@modal/AllCategories";
import Logo from "./Logo";

type FixedSearchBarProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm?: string;
};

export default function FixedSearchBar({
  onChange,
  searchTerm,
  onSubmit,
}: FixedSearchBarProps) {
  const [show, setShow] = useRecoilState(GNBModalState);

  const toggleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="fixed-search-section">
      <div className="fixed-search-section__wrapper">
        <div
          className="icon-wrap"
          onClick={toggleModal}
          style={
            show
              ? {
                  backgroundColor: "#000000",
                  borderColor: "#000000",
                  color: "#ffffff",
                }
              : {}
          }
        >
          {show ? <MdClose /> : <MdOutlineFormatListBulleted />}
        </div>
        <Logo className="fixed" />
        <form onSubmit={onSubmit}>
          <SearchSelect className="fixed" />
          <SearchInput onChange={onChange} searchTerm={searchTerm} />
          <SearchButton />
        </form>
        <div className="user-button-wrap">
          <UserButton />
        </div>
      </div>
      {show ? <AllCategories className="fixed" /> : null}
    </div>
  );
}
