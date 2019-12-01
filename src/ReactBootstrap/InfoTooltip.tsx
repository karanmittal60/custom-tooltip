import React, {useState, useRef} from 'react';
import './InfoTooltip.css'
// import ReactTooltip from 'react-tooltip';
import {Button, Overlay} from "react-bootstrap";


const InfoTooltip = (props: any) => {
    // @ts-ignore
    const [show, setShow] = useState<any>(false);
    // @ts-ignore
    const [target, setTarget] = useState<any>(null);
    // @ts-ignore
    console.log("props ==>", props);
    // @ts-ignore
    const handleClick = () => {
        // @ts-ignore
        let tooltip = document.getElementById('infoButton');

        console.log("==>", tooltip);
        setTarget(tooltip);
        // @ts-ignore
        console.log("==>", tooltip.offsetTop);
        // @ts-ignore
        console.log("==>", tooltip.offsetLeft);


        setShow(!show)
    };

    const addClickAnyWhere = () =>{
        console.log("==hello= tooltip is hsows==?")
    };

    const removeClickAnyWhere = () => {
        console.log("remove click listener");
    }
    // @ts-ignore
    return (
        <div>
            {/*<ReactTooltip*/}
            {/*    place="top"*/}
            {/*    multiline={true}*/}
            {/*    afterShow={addClickAnyWhere}*/}
            {/*    afterHide={removeClickAnyWhere}*/}
            {/*    clickable={true}*/}
            {/*/>*/}

            {/*<h1>InfoTooltip</h1>*/}
            {/*<p data-tip="hello world">Tooltip</p>*/}


            {/*<Button variant="danger"  id="infoButton" onClick={handleClick}>*/}
            {/*    Click me to see*/}
            {/*</Button>*/}
            {/*<Button variant="danger"  id="infoButton" onClick={handleClick}>*/}
            {/*    Click me to see*/}
            {/*</Button>*/}

            {/*<Overlay target={target} show={show} placement="right">*/}
            {/*    {(props: any) => (*/}
            {/*        <div*/}
            {/*            {...props}*/}
            {/*            style={{*/}
            {/*                backgroundColor: 'rgba(255, 100, 100, 0.85)',*/}
            {/*                padding: '2px 10px',*/}
            {/*                color: 'white',*/}
            {/*                borderRadius: 3,*/}
            {/*                ...props.style,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            Simple tooltip*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Overlay>*/}
        </div>
    );
};

export default InfoTooltip;