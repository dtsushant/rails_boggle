import React from "react";
import {Link} from "react-router-dom";

export default () =>(
            <div className="container secondary-color">
                <h1 className="display-4">Assurance Boggle</h1>
                <p className="lead">
                    The original, traditional Wordtwist board. A four-by-four square of letters, with two minutes to find as many words as possible. Each word must have at least three letters.
                </p>
                <hr className="my-4" />
                <Link
                    to="/boggle/play"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    Start The Game
                </Link>
            </div>
)