import React, { useRef, useState } from "react";

const InputNewVocabulary = () => {
  const refNewVoc = useRef<HTMLInputElement>(null);

  const click = () => {
    console.log(refNewVoc.current?.value);
  };
  return (
    <div className="">
      <input type="text" ref={refNewVoc} placeholder="new vocabulary" />
      <button onClick={click}>click</button>
    </div>
  );
};

export default InputNewVocabulary;
