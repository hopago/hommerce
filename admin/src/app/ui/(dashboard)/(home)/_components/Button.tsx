"use client";

import { ReactElement } from "react";

import Image from "next/image";

import styles from "./button.module.css";

import { cn } from "@/app/ui/lib/utils";

import {
  API_SUBMIT_BUTTON,
  CLOSE_BUTTON,
  MANAGE_BUTTON,
  USER_DETAIL_BUTTON,
} from "../constants/classNames";

type VoidFunc = () => void;
type PromiseVoidFunc = () => Promise<void>;
type ParamsVoidFunc = (params: unknown) => void;

type ButtonProps = {
  type: "button" | "submit";
  text?: string;
  onClick?: VoidFunc | PromiseVoidFunc | ParamsVoidFunc;
  icon?: string | ReactElement<any, any>;
  width?: number;
  height?: number;
  disabled?: boolean;
  display?: "none" | "flex" | "block" | "inline-block";
  className?: "manage" | "close" | "api-submit" | string;
  ariaLabel?: string;
};

export default function Button({
  type,
  text,
  icon,
  width,
  height,
  onClick,
  disabled,
  display = "flex",
  className,
  ariaLabel,
}: ButtonProps) {
  let btnIcon = icon;

  if ((icon || text) && display === "none") {
    console.log("text & display-none props coexisted, is it intended?");
    return null;
  }

  if (typeof icon === "string" && width && height) {
    btnIcon = (
      <Image width={width} height={height} alt="button-img" src={icon} />
    );
  }

  return (
    <button
      className={cn(
        styles.button,
        className === MANAGE_BUTTON && styles.manage,
        className === CLOSE_BUTTON && styles.close,
        className === API_SUBMIT_BUTTON && styles.apiSubmit,
        className === USER_DETAIL_BUTTON && styles.userDetail
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ display: `${display}` }}
      aria-label={ariaLabel}
    >
      <div className={styles.iconWrap}>{btnIcon}</div>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
