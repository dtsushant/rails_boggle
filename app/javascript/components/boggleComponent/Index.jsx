import React from "react";
import {Link} from "react-router-dom";

export default () =>(
            <div className="container secondary-color">
                <h1 className="display-4">Assurance Boggle</h1>
                <p className="lead">
                    A curated list of recipes for the best homemade meal and delicacies.
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