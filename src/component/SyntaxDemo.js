import React from "react";
import {MobXProviderContext, observer} from "mobx-react";
import HueInput from "./HueInput";

const SyntaxDemo = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);

  return (
    <div id="syntax-demo">
      <table border="0">
        <tr className="Comment">
          <td>*</td><td>Comment</td><td>any comment</td>
        </tr>

        <tr className="Constant next-item">
          <td>*</td><td>Constant</td><td>any constant</td>
        </tr>
        <tr className="String">
           <td></td><td>String</td><td>a string constant: "this is a string"</td>
        </tr>
        <tr className="Character">
           <td></td><td>Character</td><td>a character constant: 'c', '\n'</td>
        </tr>
        <tr className="Number">
           <td></td><td>Number</td><td>a number constant: 234, 0xff</td>
        </tr>
        <tr className="Boolean">
           <td></td><td>Boolean</td><td>a boolean constant: TRUE, false</td>
        </tr>
        <tr className="Float">
           <td></td><td>Float</td><td>a floating point constant: 2.3e10</td>
        </tr>

        <tr className="Identifier next-item">
          <td>*</td><td>Identifier</td><td>any variable name</td>
        </tr>
        <tr className="Function">
          <td></td><td>Function</td><td>function name (also: methods for classes)</td>
        </tr>

        <tr className="Statement next-item">
          <td>*</td><td>Statement</td><td>any statement</td>
        </tr>
        <tr className="Conditional">
          <td></td><td>Conditional</td><td>if, then, else, endif, switch, etc.</td>
        </tr>
        <tr className="Repeat">
          <td></td><td>Repeat</td><td>for, do, while, etc.</td>
        </tr>
        <tr className="Label">
          <td></td><td>Label</td><td>case, default, etc.</td>
        </tr>
        <tr className="Operator">
          <td></td><td>Operator</td><td>"sizeof", "+", "*", etc.</td>
        </tr>
        <tr className="Keyword">
          <td></td><td>Keyword</td><td>any other keyword</td>
        </tr>
        <tr className="Exception">
          <td></td><td>Exception</td><td>try, catch, throw</td>
        </tr>

        <tr className="PreProc next-item">
          <td>*</td><td>PreProc</td><td>generic Preprocessor</td>
        </tr>
        <tr className="Include">
          <td></td><td>Include</td><td>preprocessor #include</td>
        </tr>
        <tr className="Define">
          <td></td><td>Define</td><td>preprocessor #define</td>
        </tr>
        <tr className="Macro">
          <td></td><td>Macro</td><td>same as Define</td>
        </tr>
        <tr className="PreCondit">
          <td></td><td>PreCondit</td><td>preprocessor #if, #else, #endif, etc.</td>
        </tr>

        <tr className="Type next-item">
          <td>*</td><td>Type</td><td>int, long, char, etc.</td>
        </tr>
        <tr className="StorageClass">
          <td></td><td>StorageClass</td><td>static, register, volatile, etc.</td>
        </tr>
        <tr className="Structure">
          <td></td><td>Structure</td><td>struct, union, enum, etc.</td>
        </tr>
        <tr className="Typedef">
          <td></td><td>Typedef</td><td>A typedef</td>
        </tr>

        <tr className="Special next-item">
          <td>*</td><td>Special</td><td>any special symbol</td>
        </tr>
        <tr className="SpecialChar">
          <td></td><td>SpecialChar</td><td>special character in a constant</td>
        </tr>
        <tr className="Tag">
          <td></td><td>Tag</td><td>you can use CTRL-] on this</td>
        </tr>
        <tr className="Delimiter">
          <td></td><td>Delimiter</td><td>character that needs attention</td>
        </tr>
        <tr className="SpecialComment">
          <td></td><td>SpecialComment&nbsp;&nbsp;</td><td>special things inside a comment</td>
        </tr>
        <tr className="Debug">
          <td></td><td>Debug</td><td>debugging statements</td>
        </tr>

        <tr className="Underlined next-item">
          <td>*</td><td>Underlined</td><td>text that stands out, HTML links</td>
        </tr>

        <tr className="Ignore next-item">
          <td>*</td><td>Ignore</td><td>left blank, hidden</td>
        </tr>

        <tr className="Error">
          <td>*</td><td>Error</td><td>any erroneous construct</td>
        </tr>

        <tr className="Todo">
          <td>*</td><td>Todo</td><td>anything that needs extra attention; mostly the keywords TODO FIXME and XXX</td>
        </tr>
      </table>
    </div>
  );
})

export default SyntaxDemo;
