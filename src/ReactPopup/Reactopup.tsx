import React, {Component, useState} from 'react';
import Popup from 'reactjs-popup';

const Tooltip = () => {
    const [show, setShow] = useState<any>(false)
    console.log("show==>", show);
    return(
        <>
            <Popup
                trigger={open => (

                    <button className="button">
                        {setShow(open)}
                        Trigger - {open ? "Opened" : "Closed"}
                    </button>
                )}
                open={show}
                closeOnEscape={true}
                position="top center"
                closeOnDocumentClick
                keepTooltipInside={false}
                modal={false}
                onClose={() => setShow(false)}
            >
                <>
                    <span>
                        Popup content
                        Popup content
                        Popup content
                    <button onClick={()=> setShow(false)}>x</button>
                    </span>
                </>
            </Popup>
        </>
    )
};


function Reactopup () {

    const [show, setShow] = useState<any>(false)
    const closeModal = () => {
        setShow(false)
    };
    console.log("show==>",show);
    return (
        <div>
            <button onClick={closeModal}>hel</button>
            <Tooltip/>
        </div>
    );
}

export default Reactopup;