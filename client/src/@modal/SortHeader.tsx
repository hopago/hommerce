import trash from "../assets/ico_delete@2x.png";

type SortHeaderProps = {
  length: number;
}

export default function SortHeader({ length }: SortHeaderProps) {
  return (
    <div className="sort-list-header">
    <span>{length}건</span>
    <button>
      <img src={trash} alt="delete-icon" />
      <span>전체삭제</span>
    </button>
  </div>
  )
}
