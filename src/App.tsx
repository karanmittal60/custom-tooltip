import React from 'react';
import './App.css';
import CustomInfoToolTip from "./components/CustomInfoToolTip";
import InfoTooltip from "./ReactBootstrap/InfoTooltip";
import Reactopup from "./ReactPopup/Reactopup";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Custom Info Tooltip</h1>
            {/*<div className="m-4"><CustomInfoToolTip popoverText={"Hello world"}/></div>*/}


            <div className="m-4">
                {/*<InfoTooltip popoverText={"Hello world"}/>*/}
<Reactopup/>
            </div>

        </div>
    );
};

export default App;
