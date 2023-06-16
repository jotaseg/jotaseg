import { useState } from "react";

export const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("joansegoviadev@pm.me");
    alert("Text copied!");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      className="button"
      onClick={copy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? "Click to copy" : "joansegoviadev@pm.me"}
    </a>
  );
};
