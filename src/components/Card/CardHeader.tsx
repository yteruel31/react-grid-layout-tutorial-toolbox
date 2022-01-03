import React, {ReactNode} from 'react';

const CardHeader: React.FC<{title: string, action: ReactNode}> = (props) => {
    const {title, action} = props

    return (
        <div className="flex items-center justify-between">
            <span className="font-bold">{title}</span>
            <div>{action}</div>
        </div>
    );
};

export default CardHeader;