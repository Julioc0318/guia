import React from "react";
import styles from "./index.module.less";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  // 根据传入的 variant 动态选择样式类名
  const variantClass =
    variant === "primary" ? styles.btnPrimary : styles.btnSecondary;

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
