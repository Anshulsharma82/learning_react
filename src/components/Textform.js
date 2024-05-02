import React,{useState} from "react";
import Proptype from "prop-types"




export default function Textform(props) {
    let sentenceStyle = {
        color: 'red'
    }
    const [countSentenceText,setCountSentenceText] = useState('')
    const change = (event) => {
        setText(event.target.value)
    }
    function convertToUpperCase() {
        props.showAlert('Converted to upper case!','success')
        setText(text.toUpperCase())
    }
    function countWords() {
        console.log(text)
       if(text === "") {
        return 0
       } 
       else {
        return text.trim().split(" ").length
       }
    }
    function convertToLowerCase() {
        props.showAlert('Converted to lower case!','success')
        setText(text.toLowerCase())
    }
    function timeToReadTheText() {
        const secondsToReadTheTest = 0.5*countWords()
        const min = Math.floor(secondsToReadTheTest/60)
        const sec = Math.ceil(secondsToReadTheTest%60)
        return `${min} minutes and ${sec} seconds.`
    }
    function countSentence() {
        if (text === "") {
            setCountSentenceText('Write Something in Input field.')
            setTimeout(() => {
                setCountSentenceText('')
            },2000)
        }
        else {
            const numberOfSentence = text.split(/[.?]\s*(?=\S)/).length
            setCountSentenceText(`${numberOfSentence} Sentence.`)
            setTimeout(() => {
                setCountSentenceText('')
            },5000)
        }

        
        
    }
    function clearText() {
        if(text!== "") {
            setText('')
            props.showAlert('Text Cleared!','success')
        }
        
    }

    function toChangeButtonColor(mode){
        return mode === "green" ? 'success': mode === "dark"? 'dark': 'primary'
    }
    const [text,setText] = useState('');
    return (
        <>
        <div >
            <div className="container" >
                <h1 className="h11"> {props.heading} </h1>
                <textarea className="formC" aria-label="With textarea" rows="4" cols="120" value={text} 
                onChange={change} style={props.mode === "dark" ? {backgroundColor: 'grey', color: "white"}: {backgroundColor: 'white'}}></textarea>
                <br></br>
                <button onClick={convertToUpperCase} className = {`btn btn-${toChangeButtonColor(props.mode)} mx-2`}> Convert to Upper case</button>
                <button onClick={convertToLowerCase} className={`btn btn-${toChangeButtonColor(props.mode)} mx-2`}> Convert to Lower case</button>
                <button onClick={countSentence} className={`btn btn-${toChangeButtonColor(props.mode)} mx-2`}> Count total sentence</button>
                <button onClick={clearText} className={`btn btn-${toChangeButtonColor(props.mode)} mx-2`}> Clear Text </button>
            </div>
            <div className="container c" >
                <h1> Your Text Summary</h1>
                <p> {countWords()} words, {text.length} characters</p>
                <p>{timeToReadTheText()} to read the text.</p>
                <h4 style={sentenceStyle}>{countSentenceText}</h4>
                <h2>Preview</h2>
                <p>{text.length === 0? 'Enter text in text area to see preview': text}</p>
            </div>
            </div>
        </>
    )
}

Textform.prototype = {
    heading: Proptype.string
}

Textform.defaultProps = {
    heading: 'Enter Text to Analyze below'
}