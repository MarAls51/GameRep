import React, {useState} from "react";
import "./Row.css";
const Row= ({ title, input }) => {
  return (
    <div className="upcomming-container2">
      <div className="row-posters2">
        {input.map((item) => (
          <div>
            <div className="style-images">
              <button className="game-button2">
                <img className="image-style" style ={{height:100, width: 100}} src={item.url} alt={item.name}/> 
                <h2 className="item-name1">{item.name}</h2>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;