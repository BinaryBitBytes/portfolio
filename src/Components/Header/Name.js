import React from "react";
import ReactRevealText from 'react-reveal-text'

export default function Name() {
    return (
        <div>
            <ReactRevealText
                text= 'Miles Colòn'
                className= 'my-name'
                style={{color: "tomato", fontSize: "24px", lineHeight: "36px"}}
            />
        </div>
    )
}