import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-19D3AE text-white font-bold bg-gradient-to-r from-secondary to-primary ">{children}</button>
        </div>
    );
};

export default PrimaryButton;