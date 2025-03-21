import ColorItem from "./ColorItem";
import { IColor } from "../models/Color";

interface Props {
    colors: IColor[];
    onEditColor: (color: IColor) => void;
    onDeleteModal: (id: string) => void;
}

function ColorList ({ colors, onDeleteColor, onEditColor,onDeleteModal }: Props)  {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[60px] min-h-[300px]">
            {colors.length > 0 ? (
                colors.map((color) => (
                    <ColorItem
                        onDeleteModal={onDeleteModal}
                        key={color._id}
                        color={color}
                        onDelete={() => onDeleteColor(color._id)}
                        onEdit={() => onEditColor(color)}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500 col-span-full">No colors available</p>
            )}
        </div>
    );
};

export default ColorList;