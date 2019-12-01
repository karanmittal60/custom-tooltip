import React, {Component, useState} from 'react';
import './CustomInfoToolTip.css'

function CustomInfoToolTip (props: any) {

    console.log("props===>", props.popoverText);
    const [show, setShow] = useState<any>(false);
    const [left, setLeft] = useState<any>(0);
    const [top, setTop] = useState<any>(0);

    const toolTipStyle = {
        display: show ? 'block' : 'none',
        top: `${top+12}px`,
        left: `${left+12}px`,

    };
    const renderTooltip = () => {
        return <div className="popover-content" style={toolTipStyle}>
            <span>
                {props.popoverText}
            </span>
        </div>
    };

    const handleClick = () => {

        let tooltip = document.getElementById('infoButton');

        console.log("==>", tooltip)
        // @ts-ignore
        console.log("==>", tooltip.offsetTop);
        // @ts-ignore
        console.log("==>", tooltip.offsetLeft);

        // @ts-ignore
        setTop(tooltip.offsetTop);
        // @ts-ignore
        setLeft(tooltip.offsetLeft)
      setShow(!show)


    };
    return (
        <div>
            <span onClick={handleClick}  id="infoButton">
                <i className="fa fa-info-circle" aria-hidden="true"/>
            </span>
            {renderTooltip()}
        </div>
    );
}

export default CustomInfoToolTip;