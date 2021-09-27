document
  .querySelector(".ytp-ad-overlay-image")
  ?.setAttribute("style", "display : none");

const noti = document.getElementById("end");
const todayYt = new Date();

if (todayYt.getHours() < 19) {
  noti?.setAttribute("style", "display : none");
}
