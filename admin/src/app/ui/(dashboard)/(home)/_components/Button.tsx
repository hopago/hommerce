"use client";

import { ReactElement } from "react";

import Image from "next/image";

import styles from "./button.module.css";

import { cn } from "@/app/ui/lib/utils";

import { BUTTON_CLASS } from "../constants/classNames";

type VoidFunc = () => void;
type PromiseVoidFunc = () => Promise<void>;
type ParamsVoidFunc = (params: unknown) => void;

type ButtonProps = {
  type: "button" | "submit";
  text?: string | null;
  onClick?: VoidFunc | PromiseVoidFunc | ParamsVoidFunc;
  icon?: string | ReactElement<any, any> | null;
  imgWidth?: number;
  imgHeight?: number;
  disabled?: boolean;
  display?: "none" | "flex" | "block" | "inline-block";
  className?: "manage" | "close" | "api-submit" | string;
  ariaLabel?: string;
  active?: boolean;
  backgroundColor?: string;
  right?: string;
  width?: string;
  height?: string;
  color?: string;
  border?: string | "none";
};

export default function Button({
  type,
  text,
  icon,
  imgWidth,
  imgHeight,
  onClick,
  disabled,
  display = "flex",
  className,
  ariaLabel,
  active,
  backgroundColor,
  right,
  width,
  height,
  color,
  border,
}: ButtonProps) {
  let btnIcon = icon;

  if ((icon || text) && display === "none") {
    console.log("text & display-none props coexisted, is it intended?");
    return null;
  }

  if (typeof icon === "string" && imgWidth && imgHeight) {
    btnIcon = (
      <Image width={imgWidth} height={imgHeight} alt="button-img" src={icon} />
    );
  }

  const btnStyles = {
    display: `${display}`,
    backgroundColor: `${backgroundColor}`,
    right: `${right}`,
    width: `${width}`,
    height: `${height}`,
    color: `${color}`,
    border: `${border}`,
  };

  return (
    <button
      className={cn(
        styles.button,
        className === BUTTON_CLASS.MANAGE && styles.manage,
        className === BUTTON_CLASS.CLOSE && styles.close,
        className === BUTTON_CLASS.SELECT_ALL && styles.selectAll,
        className === BUTTON_CLASS.REVIEW_ACTION && styles.reviewAction,
        className === BUTTON_CLASS.IMG_UPLOAD && styles.imgUpload,
        active && styles.active
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={btnStyles}
      aria-label={ariaLabel}
    >
      <div className={styles.iconWrap}>{btnIcon}</div>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
