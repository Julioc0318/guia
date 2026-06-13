import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string; // 传入图标文件名
  size?: number;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ name, size = 20, ...props }) => {
  return (
    <svg
      style={{ width: size, height: size, display: "inline-block", verticalAlign: "middle" }}
      aria-hidden="true"
      {...props}
    >
      {/* 配合 Webpack/Vite 的 svg-sprite-loader 或者是用纯路径映射 */}
      <use href={`#icon-${name}`} />
    </svg>
  );
};