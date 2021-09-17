const listElement_b = document.getElementsByTagName(
  "b"
) as any as Array<HTMLElement>;
const listElement_span = document.getElementsByTagName(
  "span"
) as any as Array<HTMLElement>;

const account = document.querySelector(
  '[aria-label="Cài đặt và kiểm soát tài khoản"]'
);

function displayNone(node: ParentNode | null | undefined) {
  (node as HTMLElement)?.setAttribute("style", "display : none");
}

function findFBWatch() {
  const header = account?.parentNode?.parentNode;

  const parentFBWatch = header?.children[2];
  const FBWatch =
    parentFBWatch?.children[0]?.children[0]?.children[0]?.children[0];
  console.log(account, header, parentFBWatch, FBWatch);
  for (let i = 1; i < 5; i++) {
    displayNone(FBWatch?.children[i]);
  }
}

function findElementWithText(text: string, tagName: Array<HTMLElement>) {
  for (let item of tagName) {
    if (item.textContent === text) {
      console.log(item);
      return item;
    }
  }

  return undefined;
}

function findParentNodeWithType(
  type: string,
  child: HTMLElement | undefined,
  loop: number
) {
  let parentText;

  parentText = child?.parentNode;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  while (parentText?.parentNode?.nodeName !== type) {
    parentText = parentText?.parentNode;
  }
  for (let i = 0; i < loop; i++) {
    parentText = parentText?.parentNode;
  }
  return parentText;
}

function hiddenElement(
  text: string,
  tagName: Array<HTMLElement>,
  loop: number,
  type: string
) {
  if (findElementWithText(text, tagName)) {
    let item = findElementWithText(text, tagName);
    displayNone(findParentNodeWithType(type, item, loop));
  }
}

function findParentElementWithType( // parent element moi co event click , parent node khong handle click duoc
  type: string,
  child: HTMLElement | undefined,
  loop: number
) {
  let parentText;

  parentText = child?.parentElement;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  while (parentText?.parentElement?.nodeName !== type) {
    parentText = parentText?.parentElement;
  }
  for (let i = 0; i < loop; i++) {
    parentText = parentText?.parentElement;
  }
  return parentText;
}

function foundElementRoot(
  text: string,
  tagName: Array<HTMLElement>,
  loop: number,
  type: string
) {
  if (findElementWithText(text, tagName)) {
    let item = findElementWithText(text, tagName);
    // promise not work => use setTimeout
    new Promise(() => {
      findParentElementWithType(type, item, loop)?.click();
    }).then(() => {});
  }
}

hiddenElement("Được tài trợ", listElement_b, 7, "DIV");
hiddenElement("Trò chơi", listElement_span, 7, "DIV");
hiddenElement("Watch", listElement_span, 8, "DIV");

// handle show more for hidden game and playing game title
foundElementRoot("Xem thêm", listElement_span, 6, "DIV");

setTimeout(() => {
  hiddenElement("Chơi game", listElement_span, 8, "DIV");
  hiddenElement("Video chơi game", listElement_span, 8, "DIV");
  hiddenElement("Video trực tiếp", listElement_span, 8, "DIV");

  hiddenElement("Ẩn bớt", listElement_span, 6, "DIV");
}, 1500);

findFBWatch();
