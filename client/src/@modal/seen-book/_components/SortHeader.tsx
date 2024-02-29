import trash from "../../../assets/ico_delete@2x.png";

type SortHeaderProps = {
  length: number;
};

export default function SortHeader({ length }: SortHeaderProps) {
  const onClick = () => {
    // TODO: Remove local-ids
  };

  return (
    <div className="sort-list-header">
      <span>
        <span>{length}</span>건
      </span>
      <button onClick={onClick}>
        <img src={trash} alt="delete-icon" />
        <span>전체삭제</span>
      </button>
    </div>
  );
}
