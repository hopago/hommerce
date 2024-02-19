import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

export const createScoreIcons = (rating: number) => {
  const floorRating = Math.floor(rating);
  const isHalf = rating !== floorRating;

  if (floorRating < 0 || floorRating > 5) {
    return null;
  }

  return Array.from({ length: 5 }, (_, i) => {
    if (i < floorRating) {
      return <MdOutlineStar key={i} className="score-icon" />;
    } else if (isHalf && i === floorRating) {
      return <MdOutlineStarHalf key={i} className="score-half-icon" />;
    } else {
      return <MdOutlineStarBorder key={i} className="score-outline-icon" />;
    }
  });
};
