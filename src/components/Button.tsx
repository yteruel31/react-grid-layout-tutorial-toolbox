import React from 'react';
import Icon from "@mdi/react";
import clsx from "clsx";

interface ButtonProps {
    color?: 'link' | 'primary';
    icon?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {children, color, icon} = props

    return (
        <button className={clsx(`rounded-md p-1.5 text-alt-text transition`, `hover:bg-${color}-hover`, `bg-${color}`)}>
            {icon ? <Icon path={icon} size={1}/> : children}
        </button>
    );
};

Button.defaultProps = {
    color: "primary"
}

export default Button;