import { useEffect, useState, useMemo } from "react";
import ColorPicker from "../ColorPicker";
import BaseModal from "../../shared/BaseModal";

interface EditColorModalProps {
    isOpen: boolean;
    onClose: () => void;
    color: { _id: string; name: string; hex: string } | null;
    onUpdateColor: (id: string, name: string, hex: string) => void;
}

const EditColorModal = ({ isOpen, onClose, color, onUpdateColor }: EditColorModalProps) => {
    const [name, setName] = useState("");
    const [hex, setHex] = useState("");

    useEffect(() => {
        if (color) {
            setName(color.name);
            setHex(color.hex);
        }
    }, [color]);


    const isChanged = useMemo(() => color && (name !== color.name || hex !== color.hex), [name, hex, color]);

    const handleUpdate = () => {
        if (color && isChanged) {
            onUpdateColor(color._id, name, hex);
            onClose();
        }
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Edit Color">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Color Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-600 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4">Color Picker</label>
            <ColorPicker hex={hex} setHex={setHex} />

            <div className="mt-6 flex justify-end space-x-3">
                <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-600">
                    Cancel
                </button>
                <button
                    onClick={handleUpdate}
                    className={`px-4 py-2 text-white rounded-lg ${isChanged ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                    disabled={!isChanged}
                >
                    Update Color
                </button>
            </div>
        </BaseModal>
    );
};

export default EditColorModal;
