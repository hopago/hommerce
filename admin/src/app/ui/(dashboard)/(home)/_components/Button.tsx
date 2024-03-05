"use client";

import { ReactElement } from "react";

import Image from "next/image";

import styles from "./button.module.css";

import { cn } from "@/app/ui/lib/utils";

type ButtonProps = {
  type: "button" | "submit";
  text?: string;
  onClick?: () => void | (() => Promise<void>) | ((params: unknown) => void);
  icon?: string | ReactElement<any, any>;
  width?: number;
  height?: number;
  disabled?: boolean;
  display?: "none" | "flex" | "block" | "inline-block";
  className?: "manage" | "close" | string;
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
}: ButtonProps) {
  let btnIcon = icon;

  console.log(className === "close");

  if ((icon || text) && display === "none") {
    console.log("Something went wrong in props.");
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
        className === "manage" && styles.manage,
        className === "close" && styles.close
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ display: `${display}` }}
    >
      <div className={styles.iconWrap}>{btnIcon}</div>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
