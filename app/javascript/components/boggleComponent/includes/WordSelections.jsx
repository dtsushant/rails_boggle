import React from 'react';

export default function WordSelections(props) {
    return (
        <div className='currentWordFormed'>
            <input value={props.currentWordFormed} />

            <div>
                <button onClick={props.clearWordClick} className='button clearBtn'>
                    x
                </button>
            </div>

        </div>
    )
}