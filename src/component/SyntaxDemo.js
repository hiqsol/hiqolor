import React from "react";
import {MobXProviderContext, observer} from "mobx-react";
import HueInput from "./HueInput";

const SyntaxDemo = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);

  return (
    <div id="syntax-demo">
      <span className="Comment">
        Comment	any comment
      </span><br/>
      <br/>

      <span className="Constant">
        Constant	any constant
      </span><br/>
      <span className="String">
         String		a string constant: "this is a string"
      </span><br/>
      <span className="Character">
         Character	a character constant: 'c', '\n'
      </span><br/>
      <span className="Number">
         Number		a number constant: 234, 0xff
      </span><br/>
      <span className="Boolean">
         Boolean	a boolean constant: TRUE, false
      </span><br/>
      <span className="Float">
         Float		a floating point constant: 2.3e10
      </span><br/>
      <br/>

      <span className="Identifier">
	      Identifier	any variable name
      </span><br/>
      <span className="Function">
	      Function	function name (also: methods for classes)
      </span><br/>
      <br/>

      <span className="Statement">
	      Statement	any statement
      </span><br/>
      <span className="Conditional">
	      Conditional	if, then, else, endif, switch, etc.
      </span><br/>
      <span className="Repeat">
	      Repeat		for, do, while, etc.
      </span><br/>
      <span className="Label">
	      Label		case, default, etc.
      </span><br/>
      <span className="Operator">
	      Operator	"sizeof", "+", "*", etc.
      </span><br/>
      <span className="Keyword">
	      Keyword	any other keyword
      </span><br/>
      <span className="Exception">
	      Exception	try, catch, throw
      </span><br/>
      <br/>

      <span className="PreProc">
	      PreProc	generic Preprocessor
      </span><br/>
      <span className="Include">
	      Include	preprocessor #include
      </span><br/>
      <span className="Define">
	      Define		preprocessor #define
      </span><br/>
      <span className="Macro">
	      Macro		same as Define
      </span><br/>
      <span className="PreCondit">
	      PreCondit	preprocessor #if, #else, #endif, etc.
      </span><br/>
      <br/>

      <span className="Type">
	      Type		int, long, char, etc.
      </span><br/>
      <span className="StorageClass">
	      StorageClass	static, register, volatile, etc.
      </span><br/>
      <span className="Structure">
	      Structure	struct, union, enum, etc.
      </span><br/>
      <span className="Typedef">
	      Typedef	A typedef
      </span><br/>
      <br/>

      <span className="Special">
	      Special	any special symbol
      </span><br/>
      <span className="SpecialChar">
	      SpecialChar	special character in a constant
      </span><br/>
      <span className="Tag">
	      Tag		you can use CTRL-] on this
      </span><br/>
      <span className="Delimiter">
	      Delimiter	character that needs attention
      </span><br/>
      <span className="SpecialComment">
	      SpecialComment	special things inside a comment
      </span><br/>
      <span className="Debug">
	      Debug		debugging statements
      </span><br/>
      <br/>

      <span className="Underlined">
	      Underlined	text that stands out, HTML links
      </span><br/>
      <br/>

      <span className="Ignore">
	      Ignore		left blank, hidden  |hl-Ignore|
      </span><br/>
      <br/>

      <span className="Error">
	      Error		any erroneous construct
      </span><br/>
      <br/>

      <span className="Todo">
	      Todo		anything that needs extra attention; mostly the
      </span><br/>
    </div>
  );
})

export default SyntaxDemo;
