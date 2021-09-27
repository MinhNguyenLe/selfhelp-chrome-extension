document
  .querySelector(".ytp-ad-overlay-image")
  ?.setAttribute("style", "display : none");

const noti = document.getElementById("end");
const todayYt = new Date();

if (todayYt.getHours() < 19 || todayYt.getHours() > 22) {
  noti?.setAttribute("style", "display : none");
}
