import React from "react";
import "./Notification.css";
import Comment from "../Comment/Comment.jsx";

function Notification({
  image,
  name,
  message,
  highlight,
  time,
  commentimage,
  styleFunction,
  classlessFlag,
  reddot,
  relatedcomment,
}) {
  return (
    <div>
      <div
        id="notificationTab"
        className={
          (name === "Mark Webber" && classlessFlag.includes(name) === false) ||
          (name === "Angela Gray" && classlessFlag.includes(name) === false) ||
          (name === "Jacob Thompson" && classlessFlag.includes(name) === false)
            ? "notificationTab"
            : ""
        }
      >
        <img id="profile" src={image} alt={name} />

        <div id="notificationBody">
          <section>
            <b
              className={
                name === "Angela Gray" && classlessFlag.includes(name) === false
                  ? "chosen"
                  : "userName"
              }
              onClick={name === "Angela Gray" ? styleFunction : null}
            >
              {name}
            </b>{" "}
            {message}
            <span
              className={classlessFlag.includes(name) === true ? "" : "chosen"}
              onClick={styleFunction}
            >
              {highlight}
            </span>
            <span
              className={
                reddot === true && classlessFlag.includes(name) === false
                  ? "redPoint"
                  : ""
              }
            ></span>
          </section>

          <article className={"timeClass"}>{time}</article>
        </div>
        <img
          src={commentimage}
          alt=""
          className={name === "Kimberly Smith" ? "commentimage" : ""}
        />
      </div>
      <Comment
        passedName={name}
        passedArray={classlessFlag}
        content={relatedcomment}
      />
    </div>
  );
}
export default Notification;
