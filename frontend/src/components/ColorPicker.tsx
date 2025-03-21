import { useState } from "react";
import * as React from "react";

interface ColorPickerProps {
    hex: string;
    setHex: (hex: string) => void;
}
function ColorPicker ({ hex, setHex }:ColorPickerProps)  {
    const [inputValue, setInputValue] = useState(hex);

    const isValidHex = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color) // regex code for checking hex color format


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (isValidHex(value)) {
            setHex(value);
        }
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHex(e.target.value);
    };

    return (
        <div className="flex border mt-2 rounded-md items-center pe-1 ">

            <input
                type="text"
                value={inputValue}
                onChange={handleTextChange}
                className=" w-full h-full p-2 text-white"
                placeholder="Enter hex value"
            />


            <input
                type="color"
                value={hex}
                onChange={handleColorChange}
                className="w-10 h-10 border-none cursor-pointer"
            />
        </div>
    );
};

export default ColorPicker;
