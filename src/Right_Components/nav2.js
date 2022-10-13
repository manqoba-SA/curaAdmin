import React from "react";
import "./style.css";
import Data from "./products.json";

export function Products() {
  return (
    <div className="Style1">
      <div className="name">
        <text>Latest Articles</text>
      </div>

      <div>
        {Data.map((data) => {
          return (
            <div className="results" key={data.id}>
              <img src={data.image} alt="" />
              <div style={{ color: "black" }}>{data.name}</div>
              <div>{data.sales}</div>
              {data.revenue}
            </div>
          );
        })}
      </div>
      <div className="Button">
        <button>View all products</button>
      </div>
    </div>
  );
}
