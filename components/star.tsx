import React from "react";

const Star = ({height, width} : {height: number, width: number}) => {
  const spikes = 24; // Number of edges
  const outerRadius = 12; // Outer radius of the star
  const innerRadius = 5; // Inner radius of the star

  // Calculate the coordinates for each point of the star
  const points = [];
  for (let i = 0; i < spikes; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos((i * 2 * Math.PI) / spikes) * radius + outerRadius;
    const y = Math.sin((i * 2 * Math.PI) / spikes) * radius + outerRadius;
    points.push(`${x},${y}`);
  }

  // Build the path string based on the calculated coordinates
  const path = `M ${points.join("L")} Z`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 25" className="dark:fill-white">
      <path d={path} />
    </svg>
  );
};

export default Star;
