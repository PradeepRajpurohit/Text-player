import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () =>{
        if(text===""){
            props.showAlert("warning","Please enter the text.")
        }
        else{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","Text Converted to Uppercase.")
        }
    }
    // let i = 0;

    const handleChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleLowerCase = () =>{
        if(text===""){
            props.showAlert("warning","Please enter the text.")
        }
        else{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Text Converted to Lowercase.")
        }
        // console.log(text.split(' ').filter(word => word).join(' '));
    }

    const handleClearText = () =>{
        if(text===""){
            props.showAlert("info","There is no text in box.")
        }
        else{
        setText("");
        props.showAlert("success","Text is Removed.")
        }
    }

    const handleSpace = () =>{
        if(text===""){
            props.showAlert("warning","Please enter the text.")
        }
        else{
        setText(text.split(" ").filter(word => word).join(" "))
        props.showAlert("success","Extra Spaces are removed.")
        }
    }

    // const handleWord = (text) =>{
    //     const arr = text.split(" ");
    //     console.log(arr);
    //     return arr.length;
    // }
        
    return (
        <div className='container'>

        <div>
            <div className="mb-3 my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontSize:25, fontWeight:'bold', color : props.mode.color}}>{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8" style={{background: props.mode.box}}></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpperCase} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleSpace}>Remove Extra Space</button>
        </div>
        <div className='container my-3' style={{color : props.mode.color}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s/).filter(word => word).length} words and {text.length} Character.</p>
            <p>{text.split(" ").length-1} Space in Text.</p>
            <p>{(text.split(/\s/).filter(word => word).length)*1/125} Minute to Read.</p>
        </div>
        </div>
    )
}
