import React from 'react';

const Index: React.FC = (props) => {
    const {children} = props

    return (
        <div className="flex flex-col p-5 bg-secondary-bg rounded-md">
            {children}
        </div>
    );
};

export default Index;