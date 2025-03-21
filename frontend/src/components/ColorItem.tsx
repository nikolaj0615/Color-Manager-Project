import { IColor } from "../models/Color";
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'


interface Props {
    color: IColor;
    onEdit: (color: IColor) => void;
    onDeleteModal:(id: string) => void
}

function ColorItem ({ color, onEdit,onDeleteModal }: Props)  {

    // helper funkcija koja setuje text boju na osnovu boje pozadine
    function dynamicTextColor (hex)  {
        hex = hex.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        return luminance > 0.6  ? "text-black" : "text-white";
    };

    return (
        <div
            className={`p-4 border h-[160px] border-gray-200 rounded-2xl shadow-sm group relative`}
            style={{ backgroundColor: color.hex }}
        >
            <div className="text-left">
                <h5 className={`mb-1 text-2xl font-bold ${dynamicTextColor(color.hex)}`}>
                    {color.name}
                </h5>
                <p className={`font-normal text-gray-700 opacity-80 ${dynamicTextColor(color.hex)}`}>
                    {color.hex}
                </p>

                <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PencilSquareIcon onClick={() => onEdit(color) } className={`text-black w-6 h-6 cursor-pointer ${dynamicTextColor(color.hex)} `}/>
                        <TrashIcon onClick={() => onDeleteModal(color._id)}  className={`text-black w-6 h-6 cursor-pointer ${dynamicTextColor(color.hex)}`}/>
                </div>
            </div>
        </div>


    );
};

export default ColorItem;