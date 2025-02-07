
import React from "react";

const Square = ({ onClick, value }) => {
    return (
        <div 
            onClick={onClick} 
            className="border-2 border-black h-20 w-20 flex items-center justify-center text-2xl font-bold cursor-pointer bg-white"
        >
            {value}
        </div>
    );
};

export default Square;
