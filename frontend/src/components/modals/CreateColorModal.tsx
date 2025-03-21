import {useEffect, useState} from "react";
import ColorPicker from "../ColorPicker";
import { addColor } from "../../services/colorService";
import { IColor } from "../../Models/Color";
import BaseModal from "../../shared/BaseModal";

interface ColorModalProps {
    isOpen: boolean;
    onClose: () => void;
    setColors: React.Dispatch<React.SetStateAction<IColor[]>>;
}

const CreateColorModal = ({ isOpen, onClose, setColors }: ColorModalProps) => {
    const [name, setName] = useState("");
    const [hex, setHex] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isValid, setIsValid] = useState(false); // ✅ State za validaciju

    const handleSubmit = async () => {
        if (!name.trim() || !hex) {
            setError("All fields are required.");
            return;
        }

        const newColor = await addColor({ name, hex });
        setColors((prevColors) => [...prevColors, newColor]);

        setName("");
        setHex("");
        setError(null);
        onClose();
    };

    useEffect(() => {
        setIsValid(name.trim() !== "" && hex !== "");
    }, [name, hex]);

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Add New Color">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Color Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                }}
                className="w-full mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-600 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter color name..."
            />

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4">Color Picker</label>
            <ColorPicker hex={hex} setHex={setHex} />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-6 flex justify-end space-x-3">
                <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-600">
                    Cancel
                </button>
                <button onClick={handleSubmit}    className={`px-4 py-2 text-white rounded-lg ${isValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`} disabled={!isValid}>
                    Add Color
                </button>
            </div>
        </BaseModal>
    );
};

export default CreateColorModal;
