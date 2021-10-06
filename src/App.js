import { Navbar, MyButton } from "./sample";
import { useState } from "react";
import "./App.css";
function App() {

  const [textarea, setTextarea] = useState(false);
  var code = "123";
  const [text, setText] = useState("");
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const cleartext = () => {
    setText("");
  };
  const decrypt = () => {
    var prop = prompt("Enter the decryption code");
    if (prop === code) {
      let decryptor = [];
      let i;
      const messagearr = text.split(" ").join(" ");
      // const messagearr = messagear.split("")
      for (i = 0; i < messagearr.length; i++) {
        let letter;
        switch (messagearr[i]) {
          case "+":
            letter = "a";
            break;
          case "-":
            letter = "b";
            break;
          case "*":
            letter = "c";
            break;
          case "/":
            letter = "d";
            break;
          case "|":
            letter = "e";
            break;
          case "`":
            letter = "f";
            break;
          case "~":
            letter = "g";
            break;
          case "!":
            letter = "h";
            break;
          case "@":
            letter = "i";
            break;
          case "#":
            letter = "j";
            break;
          case "$":
            letter = "k";
            break;
          case "%":
            letter = "l";
            break;
          case "^":
            letter = "m";
            break;
          case "&":
            letter = "n";
            break;
          case "(":
            letter = "o";
            break;
          case ")":
            letter = "p";
            break;
          case "=":
            letter = "q";
            break;
          case "_":
            letter = "r";
            break;
          case "]":
            letter = "s";
            break;
          case "[":
            letter = "t";
            break;
          case "}":
            letter = "u";
            break;
          case "{":
            letter = "v";
            break;
          case ">":
            letter = "w";
            break;
          case "<":
            letter = "x";
            break;
          case ":":
            letter = "y";
            break;
          case "?":
            letter = "z";
            break;
          default:
            letter = messagearr[i];
        }
        decryptor.push(letter);
      }

      setText(decryptor.join(""));
      // setTextarea("new")
    }
  else {
      alert("Wrong Code")
    }
  };
  const encrypt = () => {
    let encryptor = [];
    let i;
    const messagearr = text.split("").join("");
    // const messagearr = messagear.split("")
    for (i = 0; i < messagearr.length; i++) {
      let letter;
      switch (messagearr[i]) {
        case "a":
          letter = "+";
          break;
        case "b":
          letter = "-";
          break;
        case "c":
          letter = "*";
          break;
        case "d":
          letter = "/";
          break;
        case "e":
          letter = "|";
          break;
        case "f":
          letter = "`";
          break;
        case "g":
          letter = "~";
          break;
        case "h":
          letter = "!";
          break;
        case "i":
          letter = "@";
          break;
        case "j":
          letter = "#";
          break;
        case "k":
          letter = "$";
          break;
        case "l":
          letter = "%";
          break;
        case "m":
          letter = "^";
          break;
        case "n":
          letter = "&";
          break;
        case "o":
          letter = "(";
          break;
        case "p":
          letter = ")";
          break;
        case "q":
          letter = "=";
          break;
        case "r":
          letter = "_";
          break;
        case "s":
          letter = "]";
          break;
        case "t":
          letter = "[";
          break;
        case "u":
          letter = "}";
          break;
        case "v":
          letter = "{";
          break;
        case "w":
          letter = ">";
          break;
        case "x":
          letter = "<";
          break;
        case "y":
          letter = ":";
          break;
        case "z":
          letter = "?";
          break;
        default:
          letter = messagearr[i];
      }

      encryptor.push(letter);
    }
    setText(encryptor.join(""));
  };
  return (
    <div className="app">
      <Navbar></Navbar>
      <form className="container">
        <textarea
          className={textarea}
          value={text}
          onChange={handleonChange}
          rows="10"
          cols="70"
        />
      </form>
      <MyButton onClick={encrypt}>
        <h2>Encrypt</h2>
      </MyButton>
      <MyButton onClick={decrypt}>
        <h2>Decrypt</h2>
      </MyButton>
      <MyButton onClick={cleartext}>
        <h2>clear</h2>
      </MyButton>
      {/* <form className="container">
        <textarea
          className={textarea}
          value={text}
          onChange={handleonChange}
          rows="5"
          cols="80"
        />
      </form> */}
    </div>
  );
}

export default App;
