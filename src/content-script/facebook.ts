const listElement_b = document.getElementsByTagName(
  "b"
) as any as Array<HTMLElement>;
const listElement_span = document.getElementsByTagName(
  "span"
) as any as Array<HTMLElement>;

const textSponsor = "Được tài trợ";
const textGame = "Trò chơi";

function findElementWithText(text: string, tagName: Array<HTMLElement>) {
  for (let item of tagName) {
    if (item.textContent == text) {
      return item;
    }
  }
  return undefined;
}

function displayNone(node: ParentNode | null | undefined) {
  (node as HTMLElement)?.setAttribute("style", "display : none");
}

// function findDivParent(num : number,node : ParentNode){

// }

function findParentElementWithType(
  type: string,
  child: HTMLElement | undefined
) {
  let parentText;

  parentText = child?.parentNode;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  while (parentText?.parentNode?.nodeName !== type) {
    parentText = parentText?.parentNode;
  }

  return parentText?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
    ?.parentNode;
}

function hiddenElement(text: string, tagName: Array<HTMLElement>) {
  if (findElementWithText(text, tagName)) {
    let item = findElementWithText(text, tagName);
    displayNone(findParentElementWithType("DIV", item));
  }
}

hiddenElement(textSponsor, listElement_b);
hiddenElement(textGame, listElement_span);
