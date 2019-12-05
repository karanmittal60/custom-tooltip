import React, {Component, useState} from 'react';
import Popup from 'reactjs-popup';

const Tooltip = (props: any) => {
    // const [show, setShow] = useState<any>(props.show)
    console.log("show==>", props.show);
    return(
        <>
            <Popup
                trigger={open => (
                    <i className="fa fa-info-circle" aria-hidden="true">
                            {props.showTooltip}.
                        </i>
                )}
                open={props.show}
                closeOnEscape={true}
                position="top center"
                closeOnDocumentClick={true}
                keepTooltipInside={false}
                modal={false}
                onClose={props.hideTooltip}
            >
                <>
                    <span>
                        Popup content
                        <i className="fas fa-times" onClick={props.hideTooltip}></i>
                    </span>
                </>
            </Popup>
        </>
    )
};


function Reactopup (props: any) {
    return (
        <div>
            <Tooltip {...props}/>
        </div>
    );
}

export default Reactopup;