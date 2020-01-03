import React from 'react';

export default function ListItem(props) {
    return (
        <div className='listItem'>
            <li key={props.index} style={props.style}>{props.word}</li>
        </div>
    )
}