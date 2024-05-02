import React,{useState} from "react";
import cardImage from "../cardImage.png"

export default function About() {
    const [buttonStyle,setButtonStyle] = useState({
        color: 'white',
        backgroundColor: 'orange'
    })
    const [buttonText,setButtonText] = useState('Enable Dark Mode')
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [imgStyle,setImgStyle] = useState({
        border: ''
    })
    const toggleMode = () => {
        if(myStyle.color === "black") {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '8px solid grey'
            })

            setButtonStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '5px solid grey'
            })
            setButtonText("Enable Light Mode")
            setImgStyle({
                border: '5px solid grey'
            })
            
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setButtonStyle({
                color: 'white',
                backgroundColor: 'orange'
            })
            setButtonText("Enable Dark Mode")
            setImgStyle()
        }
    }
    return (
        <div className="container my-3" > 
            <div className="card" style={myStyle} >
                <img src={cardImage} className="card-img-top" alt="..." style={imgStyle}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary btn1" onClick={toggleMode} style={buttonStyle}>{buttonText}</button>
                    </div>
            </div>
        </div>
    )
}