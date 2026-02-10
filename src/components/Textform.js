import React, { useState } from "react";

export default function Textform(props) {
  const convertintouppercase = () => {
    const newWord = text.toUpperCase();
    setText(newWord);
    props.showAlert("Converted to upper case", "success")
  };

  const convertintolowcase = () => {
    const newlowWord = text.toLowerCase();
    setText(newlowWord);
    props.showAlert("Converted to lower case", "success")
  };

  const cleartext = () => {
    const newWord = "";
    setText(newWord);
    props.showAlert("Text Clear", "success")
  };

  const handleCopy = ()=>{
    const txtCopy = document.getElementById('myBox');
    txtCopy.select();
    navigator.clipboard.writeText(txtCopy.value);
    props.showAlert("Text Copied to Clipboard","success")
  }

  const removespace = () =>{
    const newWord = text.trim();
    setText(newWord);
    props.showAlert("Removed space from front", "success")
  }

  const makefirstlettercapital = () =>{
    const newword = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newword);
    props.showAlert("First Letter Capital", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value); //targetting the value of text and with the help of this function able to change the value on state value
  };

  const handleRemExtSpace = ()=>{
    const newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space", "success")
  }

  const [text, setText] = useState(""); //State
 
 
function countWordsWithoutSpaces(text) {

  const words = text.split(/\s+/);
  const filteredWords = words.filter(word => word.length > 0);
  return filteredWords.length;
}

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 style={{fontWeight:800}} className="mb-3 mt-3">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <div className="mb-5"> 
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

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleRemExtSpace}
        >
          Remove Extra Space
        </button>
        </div>
 

        


      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 style={{fontWeight:800}}>Your Text Summary</h2>
        <p>Words :- {countWordsWithoutSpaces(text)}</p>
          {/* {text.split(" ").length > 0}  and Characters :- {text.length} </p> */}
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <p> Sentence Counter :- {text.split(".").length}</p>
        <h3 style={{fontWeight:800}}>Preview</h3>
        <p>{text}</p>
        <div>Abc</div>


      </div>
    </>
  );
}
