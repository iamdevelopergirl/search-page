import React from 'react';
import { dispatchActionAfterGetList } from "../../App.js";
import './title.css';
import Button from '../Common/button.js';


function Title({titleText, titleDescription, buttonName, dispatch}){
    const _handleButtonClick = () => {
        dispatchActionAfterGetList(dispatch);
    }

    return(    
        <section className="title-container">
            <section className="title-section">
                <div className="title">
                    <p>{titleText}</p>
                </div>
                <div className="number-search">
                    <p className="inner-text">{titleDescription}</p>
                </div>
                <div className="reload-button">
                    <Button name={buttonName} className="black" onClick={_handleButtonClick}/>
                </div>
            </section>
        </section>
    )
}

export default Title;