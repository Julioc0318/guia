import { useRef, useState } from "react";
import { ExploreCity } from "./Comp/ExploreCity";
import { Introduce } from "./Comp/Introduce";
import styles from "./Home.module.less";

export const Home = () => {
  const [showExplore, setShowExplore] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  const handleShowExplore = () => {
    setShowExplore(true);
    
    // 使用 setTimeout 确保组件在渲染并完成初次渐变后再滚动
    setTimeout(() => {
      exploreRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={styles.home}>
      {/* 将点击函数传给 Introduce */}
      <Introduce onExploreClick={handleShowExplore} />
      
      {/* 使用 CSS 类控制渐变 */}
      <div 
        ref={exploreRef} 
        className={`${styles.exploreWrapper} ${showExplore ? styles.visible : styles.hidden}`}
      >
        <ExploreCity />
      </div>
    </div>
  );
};