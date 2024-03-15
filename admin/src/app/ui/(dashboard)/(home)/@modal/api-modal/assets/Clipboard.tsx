import styles from "../_components/image-urls.module.css";

import Spinner from "@/app/ui/_components/Spinner";

type ClipBoardProps = {
  onClick?: () => void;
  isLoading: boolean;
};

const stylesProps = {
  minHeight: "max-content",
  color: "white",
};

export const ClipBoard = ({ onClick, isLoading }: ClipBoardProps) => {
  const content = isLoading ? (
    <Spinner stylesProps={stylesProps} />
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={styles.icon}
    >
      <path
        d="M7.45487 18.5013H14.5827C14.819 18.5013 15.0456 18.5978 15.2127 18.7696C15.3798 18.9414 15.4736 19.1744 15.4736 19.4173C15.4736 19.6603 15.3798 19.8933 15.2127 20.065C15.0456 20.2368 14.819 20.3333 14.5827 20.3333H7.45487C6.27336 20.3333 5.14025 19.8508 4.3048 18.9919C3.46935 18.133 3 16.968 3 15.7533V6.59332C3 6.35038 3.09387 6.11739 3.26096 5.94561C3.42805 5.77383 3.65467 5.67732 3.89097 5.67732C4.12727 5.67732 4.3539 5.77383 4.52099 5.94561C4.68808 6.11739 4.78195 6.35038 4.78195 6.59332V15.7533C4.78195 16.4821 5.06356 17.1811 5.56483 17.6965C6.0661 18.2118 6.74596 18.5013 7.45487 18.5013Z"
        fill="#fff"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.13322 4.748C6.13322 3.23032 7.33016 2 8.80665 2H16.2155C17.692 2 18.8889 3.23032 18.8889 4.748V14.345C18.8889 15.8626 17.692 17.093 16.2155 17.093H8.80665C7.33016 17.093 6.13322 15.8626 6.13322 14.345V4.748ZM8.98671 3.92983C8.49454 3.92983 8.09556 4.33993 8.09556 4.84583V14.2234C8.09556 14.7293 8.49454 15.1394 8.9867 15.1394H16.0349C16.5271 15.1394 16.9261 14.7293 16.9261 14.2234V4.84583C16.9261 4.33993 16.5271 3.92983 16.0349 3.92983H8.98671Z"
        fill="#fff"
      ></path>
    </svg>
  );

  return content;
};
