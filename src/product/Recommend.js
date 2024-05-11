import React from 'react';
import "./Recommend.css";

const Recommend = ({ selectedRecommendation,handleRecommendationChange }) => {
  return (
    <div className="column recommendations">
      {/* Third column with recommendations */}
      <h3>Recommended</h3>
      <select value={selectedRecommendation} onChange={handleRecommendationChange}>
        <option value="newest">Newest First</option>
        <option value="popular">Popular</option>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>
    </div>
  );
}

export default Recommend;
