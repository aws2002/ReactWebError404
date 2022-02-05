import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  
  const [isVisible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <span onClick={scrollToTop} className="scrolls">
          <FiArrowUp />
        </span>
      )}
    </div>
  );
}
