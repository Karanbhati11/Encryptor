import { Navbar, MyButton } from "./sample";
import { useState } from "react";
import "./App.css";
function App() {
  const [btn_en,setbtn] = useState(false);
  const [btn_de,setbtn_de] = useState(false);
  var code = "123";
  const [text, setText] = useState("");
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const cleartext = () => {
    setText("");
    setbtn(false)
    setbtn_de(false);

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
          //Smallcase Starts here-----------------------------------------------------------
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
          //SmallCase Ends here ----------------------------------------------------

          //Uppercase Starts here----------------------------------------------------
          case "a":
            letter = "Z";
            break;
          case "b":
            letter = "Y";
            break;
          case "c":
            letter = "X";
            break;
          case "d":
            letter = "W";
            break;
          case "e":
            letter = "V";
            break;
          case "f":
            letter = "U";
            break;
          case "g":
            letter = "T";
            break;
          case "h":
            letter = "S";
            break;
          case "i":
            letter = "R";
            break;
          case "j":
            letter = "Q";
            break;
          case "k":
            letter = "P";
            break;
          case "l":
            letter = "O";
            break;
          case "m":
            letter = "N";
            break;
          case "n":
            letter = "M";
            break;
          case "o":
            letter = "L";
            break;
          case "p":
            letter = "K";
            break;
          case "":
            letter = "J";
            break;
          case "r":
            letter = "I";
            break;
          case "s":
            letter = "H";
            break;
          case "t":
            letter = "G";
            break;
          case "u":
            letter = "F";
            break;
          case "v":
            letter = "E";
            break;
          case "w":
            letter = "D";
            break;
          case "x":
            letter = "C";
            break;
          case "y":
            letter = "B";
            break;
          case "z":
            letter = "A";
            break;

          //Uppercase Ends Here-------------------------------------------

          //Numbers Start here--------------------------------------------
          case "6":
            letter = "1";
            break;
          case "7":
            letter = "2";
            break;
          case "8":
            letter = "3";
            break;
          case "2":
            letter = "4";
            break;
          case "1":
            letter = "5";
            break;
          case "3":
            letter = "6";
            break;
          case "4":
            letter = "7";
            break;
          case "5":
            letter = "8";
            break;
          case "0":
            letter = "9";
            break;
          case "9":
            letter = "0";
            break;
          //Numbers Ends

          //Special Characters starts----------------------------------------------------------------------------------

          case "T":
            letter = "+";
            break;
          case "S":
            letter = "-";
            break;
          case "D":
            letter = "*";
            break;
          case "F":
            letter = "/";
            break;
          case "G":
            letter = "|";
            break;
          case "H":
            letter = "`";
            break;
          case "J":
            letter = ",";
            break;
          case "K":
            letter = "?";
            break;
          case "L":
            letter = ">";
            break;
          case "Z":
            letter = "<";
            break;
          case "X":
            letter = "!";
            break;
          case "C":
            letter = "@";
            break;
          case "V":
            letter = "$";
            break;
          case "B":
            letter = "%";
            break;
          case "N":
            letter = "^";
            break;
          case "M":
            letter = "&";
            break;

          //Special characters Ends -----------------------------------------------------------------------------------
          default:
            letter = messagearr[i];
        }
        decryptor.push(letter);
      }

      setText(decryptor.join(""));
      // setTextarea("new")
      setbtn_de(true);
      setbtn(false)
    } else {
      alert("Wrong Code");
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
        //LowerCase Starts---------------------------------------------------------------------
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
        //LowerCase Ends-----------------------------------------------------------

        //Upper Case Letter Starts-------------------------------------------------
        case "A":
          letter = "z";
          break;
        case "B":
          letter = "y";
          break;
        case "C":
          letter = "x";
          break;
        case "D":
          letter = "w";
          break;
        case "E":
          letter = "v";
          break;
        case "F":
          letter = "u";
          break;
        case "G":
          letter = "t";
          break;
        case "H":
          letter = "s";
          break;
        case "I":
          letter = "r";
          break;
        case "J":
          letter = "q";
          break;
        case "K":
          letter = "p";
          break;
        case "L":
          letter = "o";
          break;
        case "M":
          letter = "n";
          break;
        case "N":
          letter = "m";
          break;
        case "O":
          letter = "l";
          break;
        case "P":
          letter = "k";
          break;
        case "Q":
          letter = "j";
          break;
        case "R":
          letter = "i";
          break;
        case "S":
          letter = "h";
          break;
        case "T":
          letter = "g";
          break;
        case "U":
          letter = "f";
          break;
        case "V":
          letter = "e";
          break;
        case "W":
          letter = "d";
          break;
        case "X":
          letter = "c";
          break;
        case "Y":
          letter = "b";
          break;
        case "Z":
          letter = "a";
          break;
        //UpperCase Letter Ends------------------------------------------------

        //Numbers Starts-------------------------------------------------------

        case "1":
          letter = "6";
          break;
        case "2":
          letter = "7";
          break;
        case "3":
          letter = "8";
          break;
        case "4":
          letter = "2";
          break;
        case "5":
          letter = "1";
          break;
        case "6":
          letter = "3";
          break;
        case "7":
          letter = "4";
          break;
        case "8":
          letter = "5";
          break;
        case "9":
          letter = "0";
          break;
        case "0":
          letter = "9";
          break;
        //Numbers Ends-------------------------------------------------------------------------------------
        //Special Characters starts----------------------------------------------------------------------------------

        case "+":
          letter = "T";
          break;
        case "-":
          letter = "S";
          break;
        case "*":
          letter = "D";
          break;
        case "/":
          letter = "F";
          break;
        case "|":
          letter = "G";
          break;
        case "`":
          letter = "H";
          break;
        case ",":
          letter = "J";
          break;
        case "?":
          letter = "K";
          break;
        case ">":
          letter = "L";
          break;
        case "<":
          letter = "Z";
          break;
        case "!":
          letter = "X";
          break;
        case "@":
          letter = "C";
          break;
        case "$":
          letter = "V";
          break;
        case "%":
          letter = "B";
          break;
        case "^":
          letter = "N";
          break;
        case "&":
          letter = "M";
          break;

        //Special characters Ends -----------------------------------------------------------------------------------

        default:
          letter = messagearr[i];
      }

      encryptor.push(letter);
    }
    setText(encryptor.join(""));
      setbtn(true)
      setbtn_de(false);
  };


  return (
    <div className="app">
      <Navbar></Navbar>
      <form className="container">
        <textarea
          className="textarea"
          value={text}
          onChange={handleonChange}
          rows="10"
          cols="70"
        />
      </form>
      <MyButton disabled={btn_en} onClick={encrypt}>
        <h2>Encrypt</h2>
      </MyButton>
      <MyButton disabled={btn_de} onClick={decrypt}>
        <h2>Decrypt</h2>
      </MyButton>
      <MyButton  onClick={cleartext}>
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
