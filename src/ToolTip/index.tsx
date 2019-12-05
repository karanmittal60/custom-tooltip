import React from 'react';
import './ToolTip.css'

const ToolTip = (props: any) => {
    let {top, left, show, text} = props;

    // @ts-ignore
    // let textDoc = document.getElementById('tooltip-text')
    // let height = 0;
    // if(textDoc) {
    //     height = textDoc.offsetHeight
    //     console.log("height==>", height);
    // }
    const tooltipStyle = {
        top: top,
        left: left,
        display: show ? "block" : "none"
    }
    return (
        <div className="tooltip-container" style={tooltipStyle}>
            {/*{console.log("=tooltipStyle==",tooltipStyle)}*/}
            <div className="triangle-up"></div>
            <div className="d-flex">
                <div id="tooltip-text">{text}</div>
                <div className="ml-1">
                    <i className="fas fa-times" onClick={() => { props.handleCloseTooltip(!show) }}/>
                </div>
            </div>
        </div>
    );
};

export default ToolTip;