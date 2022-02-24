import * as React from 'react';
import "./topbar.scss";

interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-wrapper">
                <div className="top-left">
                    Left
                </div>
                <div className="top-right">
                    Right
                </div>
            </div>
        </div>
    );
};

export default Topbar;
