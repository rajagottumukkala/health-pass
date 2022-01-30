import React from "react";
import { Cameras, Scanner } from "react-instascan-new";

class QRScanner extends React.Component {
    constructor(props) {
        super(props);
        this.handleScan.bind(this);
    }

    handleScan(content) {
        console.log(content);
        console.log(this);
        this.props.onScan(content);
    }

    render() {
        return (
            <Cameras>
                {cameras => (
                    <>
                        <Scanner camera={cameras[0]} onScan={(c) => this.handleScan(c)}>
                            <video style={{ width: 400, height: 300 }} />
                        </Scanner>
                    </>
                )}
            </Cameras>
        )
    }

}

export default QRScanner;
