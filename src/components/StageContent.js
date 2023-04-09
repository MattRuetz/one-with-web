import React from "react";

const StageContent = ({ stageName }) => {
  switch (stageName) {
    case "Design":
      return (
        <>
          <row>
            <div class='col-8'>
              <p>
                <span class='highlight'>
                  Every project at OWW starts with the perfect design.
                </span>
              </p>
            </div>
          </row>
        </>
      );
    default:
      return <h3>No content designed for stage {stageName}</h3>;
  }
};

export default StageContent;
