import React from "react";
import "./Comment.css";
function Comment({ content, passedName, passedArray }) {
  return (
    <div
      className={
        passedName === "Rizky Hasanuddin" &&
        passedArray.includes(passedName) === false
          ? "commentSection"
          : ""
      }
    >
      {content}
    </div>
  );
}

export default Comment;
