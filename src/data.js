import markwebber from "./assets/images/avatar-mark-webber.webp";
import angelagray from "./assets/images/avatar-angela-gray.webp";
import jacobthompson from "./assets/images/avatar-jacob-thompson.webp";
import rizkyhasan from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlysmith from "./assets/images/avatar-kimberly-smith.webp";
import nathanpeterson from "./assets/images/avatar-nathan-peterson.webp";
import annakim from "./assets/images/avatar-anna-kim.webp";

import chessPic from "./assets/images/image-chess.webp";

export const NOTIFICATIONDATA = [
  {
    image: markwebber,
    name: "Mark Webber",
    message: "reacted to your recent post",
    highlight: " My first tournament today!",
    time: "1m ago",
    reddot: true,
  },
  {
    image: angelagray,
    name: "Angela Gray",
    message: "followed you",
    time: "5m ago",
    reddot: true,
  },
  {
    image: jacobthompson,
    name: "Jacob Thompson",
    message: "has joined your group",
    highlight: " Chess Club",
    time: "1 day ago",
    reddot: true,
  },
  {
    image: rizkyhasan,
    name: "Rizky Hasanuddin",
    message: "sent you a private message",
    time: "5 days ago",
    reddot: false,
    relatedcomment: `Hello thanks for setting upt the Chess Club. I've been a member for a
    few weeks and I'am already having lots of fun and improving my game.`,
  },
  {
    image: kimberlysmith,
    name: "Kimberly Smith",
    message: "commented on your picture",
    time: "1 week ago",
    commentimage: chessPic,
    reddot: false,
  },
  {
    image: nathanpeterson,
    name: "Nathan Peterson",
    message: "reacted to your recent post",
    highlight: " 5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    reddot: false,
  },
  {
    image: annakim,
    name: "Anna Kim",
    message: "left the group ",
    highlight: " Chess Club",
    time: "2 weeks ago",
    reddot: false,
  },
];
