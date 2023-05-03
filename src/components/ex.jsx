import React, { useState } from "react";

const Ex = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover over me!
      </div>
      {isHovered && (
        <div style={{ backgroundColor: "lightgray" }}>
          This will be displayed when hovering over the above div.
        </div>
      )}
    </div>
  );
};

export default Ex;
