import React, { useState } from "react";

export default function Textform(props) {
  const convertintouppercase = () => {
    const newWord = text.toUpperCase();
    setText(newWord);
  };

  const convertintolowcase = () => {
    const newlowWord = text.toLowerCase();
    setText(newlowWord);
  };

  const cleartext = () => {
    const newWord = "";
    setText(newWord);
  };

  const removespace = () =>{
    const newWord = text.trim();
    setText(newWord);
  }

  const makefirstlettercapital = () =>{
    const newword = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newword);
  }

  const handleOnChange = (event) => {
    setText(event.target.value); //targetting the value of text and with the help of this function able to change the value on state value
  };

  const [text, setText] = useState(""); //State
  //text = "ABC";//Wrong Way to set the text
  // setText("Heading Two"); //Right way to set the text

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={convertintouppercase}
        >
          Convert to uppercase
        </button>

         <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={convertintolowcase}
        >
          Convert to lowercase
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={cleartext}
        >
          Clear Text
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={removespace}
        >
          Remove Space
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={makefirstlettercapital}
        >
          First Letter Capital
        </button>

        

        


      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <p> Sentence Counter :- {text.split(".").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>


      </div>
    </>
  );
}
