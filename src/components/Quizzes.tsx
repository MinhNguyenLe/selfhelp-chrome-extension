import React, { useRef, useState } from "react";
// import $ from "jquery";

const Quizzes = () => {
  const [showQuizzes, setShow] = useState<boolean>(false);

  function createArr(l: number): [number] {
    if (l > 1) {
      let arr: [number] = [1];
      for (let i: number = 2; i <= l; i++) {
        arr.push(i);
      }
      return arr;
    } else return [1];
  }

  const refNewVoc = useRef<HTMLInputElement>(null);

  const createQuizzes = () => {
    const arr = createArr(100);
    setShow(true);
  };
  return (
    <div className="">
      <button onClick={createQuizzes}>Create new quizzes</button>
      <div style={showQuizzes ? { display: "block" } : { display: "none" }}>
        {createArr(100).map((item) => {
          return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span style={{ fontSize: "18px", fontWeight: 700 }}>{item}</span>
              <input
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  margin: "4px 10px",
                }}
                type="radio"
                id={item.toString() + "1"}
                name={item.toString()}
              />
              <input
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  margin: "4px 10px",
                }}
                type="radio"
                id={item.toString() + "2"}
                name={item.toString()}
              />
              <input
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  margin: "4px 10px",
                }}
                type="radio"
                id={item.toString() + "3"}
                name={item.toString()}
              />
              <input
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  margin: "4px 10px",
                }}
                type="radio"
                id={item.toString() + "4"}
                name={item.toString()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quizzes;
