import React from "react";
import ReactRevealText from 'react-reveal-text/lib/ReactRevealText.js'

export default function Name() {
    return (
        <ReactRevealText
            text= 'Miles Colòn'
            className= 'my-name'
            style={{color: "tomato", fontSize: "24px", lineHeight: "36px"}}
        />
    )
}