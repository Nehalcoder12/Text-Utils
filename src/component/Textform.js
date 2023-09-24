import React,{useState} from "react";

export default function Textform(props) {
    const[text,settext]=useState('enter text here')
   const uppcase=()=>{
   let next=text.toUpperCase()
   settext(next)
   }
   const lowcase=()=>{
    let next=text.toLowerCase();
    settext(next) 
   }
    const handleonchange=(event)=>{
        settext(event.target.value)
    }
    const clrtxt=()=>{
      let nxt=''
      settext(nxt)
    }
  //   function capitalized(){
  //     var arr = text.split(" ")
  //     var c = arr.length
  //     var temp = ""
  //     while(c!==0){
  //         temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
  //         c--;
  //     }

  //     settext(temp)
  // }

  return (<div>
    <h1>{props.heading}</h1>
      <div className="container">

        <textarea className="form-control"value={text} id="myBox" rows="10 " onChange={handleonchange}></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={uppcase}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={lowcase}>Convert to lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clrtxt}>Clear Text</button>
        {/*<button className="btn btn-primary my-3 mx-2" onClick={capitalized}>capitalize </button>*/}
      </div>
      <div className="container">
      <h1>Your Text Summary</h1>
      <p>words:{text.split(" ").length}  character:{text.length} </p>
      <p>Read Time: {(0.008*text.split(" ").length)} min</p>
      <h1>Preview</h1>
      <p>{text}</p>

    </div>
      </div>
  );
}
