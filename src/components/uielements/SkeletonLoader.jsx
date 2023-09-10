import React from "react";

const SkeletonLoader = ({ height, width, round, className }) => {
  const style = {
    height: height,
    width: width,
    borderRadius: round ? "50%" : "0", // Apply rounded corners if 'round' prop is true
  };

  return (
    <div
      className={`skeleton-loader${round ? " round" : ""} ${className}`}
      style={style}
    ></div>
  );
};

export default SkeletonLoader;
