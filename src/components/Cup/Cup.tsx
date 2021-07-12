import { styles } from "./CupStyles";
import React from "react";

export const Cup = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      style={styles.cup}
      id="cup"
      className="border-4 border-blue-500 fixed"
      ref={ref}
    >
      <div style={styles.handle} className="relative"></div>
    </div>
  );
});
