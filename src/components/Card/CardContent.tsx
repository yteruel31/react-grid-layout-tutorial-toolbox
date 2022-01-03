import React from 'react';

const CardContent: React.FC = (props) => {
    const {children} = props

    return (
        <div className="overflow-y-auto h-full">
            {children}
        </div>
    );
};

export default CardContent;