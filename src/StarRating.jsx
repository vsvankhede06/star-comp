import React from "react";
import { useState } from "react";

export default function StarRating({ starCount = 5 }) {
  const [starValue, setStarValue] = useState();
  const [onHover, setOnHover] = useState(0);
  return (
    <div>
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={index < (onHover || starValue) ? "active" : "star"}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setOnHover(index + 1)}
            onMouseLeave={() => setOnHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
