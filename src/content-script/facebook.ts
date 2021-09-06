const listElement_b = document.getElementsByTagName(
  "b"
) as any as Array<HTMLElement>;
const searchText = "Được tài trợ";
let found;
let parentText;

function search() {
  for (let item of listElement_b) {
    if (item.textContent == searchText) {
      parentText = item?.parentNode;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      while (parentText?.parentNode?.nodeName !== "DIV") {
        parentText = parentText?.parentNode;
      }
      found =
        parentText?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
          ?.parentNode;
      (found as HTMLElement)?.setAttribute("style", "display : none");
      break;
    }
  }
}
search();

console.log(found);
