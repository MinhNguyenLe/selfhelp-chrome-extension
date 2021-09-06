import React, { useRef, useState } from "react";
// import $ from "jquery";

const InputNewVocabulary = () => {
  const refNewVoc = useRef<HTMLInputElement>(null);

  const click = () => {
    console.log(refNewVoc.current?.value);
  };
  return (
    <div className="">
      <input
        className="input-new-voca"
        type="text"
        ref={refNewVoc}
        placeholder="new vocabulary"
      />
      <button onClick={click}>click</button>
    </div>
  );
};

export default InputNewVocabulary;
