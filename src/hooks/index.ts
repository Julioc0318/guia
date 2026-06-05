/* src/hooks/useNavigateLink.ts */
import { useNavigate } from 'react-router-dom';
import { isExternalLink } from '@/utils'; // 引入你之前写的判断外链的工具函数

export const useNavigateLink = () => {
  const navigate = useNavigate();

  const onJump = (url: string) => {
    if (isExternalLink(url)) {
      // 🌐 外部网站：在当前标签页覆盖打开（根据你写的 _self）
      window.open(url, '_self', 'noopener,noreferrer');
    } else {
      // 🏠 内部路由：由 React Router 接管
      navigate(url);
    }
  };

  // 把封装好的跳转函数返回出去供组件使用
  return { onJump };
};