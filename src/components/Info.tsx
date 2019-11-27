import React, {useRef, useState} from 'react';
import {Button, Overlay} from "react-bootstrap";

/*source*/
//https://react-bootstrap.netlify.com/components/overlays/#tooltips
const Info = (props: any) =>  {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                Click
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props: any) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        Simple tooltip
                    </div>
                )}
            </Overlay>
        </>
    );
}

export default Info;