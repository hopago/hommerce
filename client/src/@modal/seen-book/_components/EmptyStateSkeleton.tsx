import { FilterOptions } from "../hooks/use-filter-option";

import alert from "../../../assets/ico_alert.png";

import handleNoDataMessage from "../utils/handle-no-data-message";

type EmptySkeletonProps = {
  option: FilterOptions;
};

export default function EmptyStateSkeleton({ option }: EmptySkeletonProps) {
  return (
    <div className="no-data">
      <img src={alert} alt="alert-icon" />
      <p>{handleNoDataMessage(option)}</p>
    </div>
  );
}
