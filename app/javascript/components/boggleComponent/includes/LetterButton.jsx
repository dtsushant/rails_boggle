import React, { Component } from 'react';

export default function LetterButton(props) {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.onClick} key={props.index} className={`ltrBtn ${props.active} ${props.allowedNextWordClick}`}>{props.value}</button>
        </div>
    )
}