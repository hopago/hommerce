import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function priceChange(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function setParentCategoryColor(text: BookParentCategory) {
  if (text === "국내도서") {
    return {
      backgroundColor: "#EAF0F9",
      color: "#3471c1",
    };
  }

  if (text === "외국도서") {
    return {
      backgroundColor: "#E9F7F7",
      color: "#2badb1",
    };
  }

  if (text === "eBook") {
    return {
      backgroundColor: "#FBEEED",
      color: "#d85954",
    };
  }
}