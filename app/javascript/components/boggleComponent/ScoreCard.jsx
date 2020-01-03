import React from "react";

let test =[1,2,3,4,5]
export default function ScoreCard(props) {
    return (
        <div>

            <div className='scoreCard'>

                <table>
                    <thead>
                        <tr>
                            <th>Word Found</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.wordsFound.map((word, index) => {
                            return( <tr>
                                    <td>{word.word}</td>
                                    <td>{word.score}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
            <div>Total Words Found:- {props.wordsFound.length}</div>

            {totalScore(props.timeToPlay,props.wordsFound)}
        </div>
    )

    function totalScore(timeToPlay, words){
        if(timeToPlay<1){
            console.log("time has expired")
            console.log(words)
            let score =0;
            words.map((v,i)=>{
                score+=v.score
            });
            return "Final Score ="+score
        }
        return ""
    }
}

