import React, {useState} from 'react';
import './App.css';
import Reactopup from "./ReactPopup/Reactopup";
import ToolTip from "./ToolTip";

const App: React.FC = () => {

    const [showTooltip, setShowTooltip] = useState<any>(false);
    const [tooltipTop, setTooltipTop] = useState<any>(0);
    const [tooltipLeft, setTooltipLeft] = useState<any>(0);
    const [tooltipText, settooltipText] = useState<any>("");

    const handleCloseTooltip = () => {
      setShowTooltip(!showTooltip)
    };

    const handleshowTooltip = (event: any) => {
        console.log("==event==>", event);
        console.log("==left==>", event.target.offsetLeft);
        console.log("==top==>", event.target.offsetTop);
        setTooltipLeft(event.target.offsetLeft - 25);
        setTooltipTop(event.target.offsetTop - 30);
        setShowTooltip(true);
        settooltipText(event.target.id);

    };

    const hideTooltip = () => {
        setShowTooltip(false)
    };

    const [showFirst, setShowFirst] = useState<any>(false)
    const [showSecond, setShowSecond] = useState<any>(false)
    const [showThird, setShowThird] = useState<any>(false)
    const [showFourth, setShowFourth] = useState<any>(false)

    const handHideTooltip = () => {
        console.log("handHideTooltip");
        setShowFirst(false)
    };
    const handShowTooltip = () => {
        console.log("handShowTooltip");
        setShowFirst(true)
    }
    return (
        <div className="App">
            <h1>Custom Info Tooltip</h1>
            {/*<div className="m-4"><CustomInfoToolTip popoverText={"Hello world"}/></div>*/}


            <div className="m-4">
                {console.log("==showFirst==",showFirst)}
                <Reactopup
                    show={showFirst}
                    showTooltip={handShowTooltip}
                    hideTooltip={handHideTooltip}
                />
            </div>
            <div className="m-4"> <Reactopup show={showSecond} /></div>
            <div className="m-4"> <Reactopup show={showThird} /></div>
            <div className="m-4"> <Reactopup show={showFourth} /></div>


            {/*<div className="m-5">*/}
            {/*    <i className="fa fa-info-circle" aria-hidden="true" id="12345 fkjvn irofj reoheiuhefer fhefi ehriuerhiuerh eiuh67890" onClick={handleshowTooltip}/>*/}
            {/*</div>*/}
            {/*<div className="m-5">*/}
            {/*    <i className="fa fa-info-circle" aria-hidden="true" id="fdgkljr gour rtugrt utrt rtjrtoi rtoihrt ojoh" onClick={handleshowTooltip}/>*/}
            {/*</div>*/}

            <ToolTip show={showTooltip}
                     left={tooltipLeft}
                     top={tooltipTop}
                     text={tooltipText}
                     handleCloseTooltip={handleCloseTooltip}
            />
        </div>
    );
};

export default App;
