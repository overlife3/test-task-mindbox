import React, { useEffect } from "react";

const useOutsideClick = (
  elementRef: React.MutableRefObject<null>,
  onInactive: () => void
) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      const elem: any = elementRef.current;
      if (!elem) return;
      if (!elem.contains(e.target)) {
        onInactive();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
export default useOutsideClick;
