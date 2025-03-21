import {useEffect, useState} from 'react'
import { getColors, addColor, updateColor, deleteColor } from "./services/colorService";
import {IColor} from "./Models/Color";
import './App.css'
import ColorList from "./components/ColorList";
import SearchColors from "./components/Search";
import CreateColorModal from "./components/modals/CreateColorModal";
import {toast, ToastContainer} from "react-toastify";
import { PlusIcon } from "@heroicons/react/24/outline";
import EditColorModal from "./components/modals/EditColorModal";
import DeleteColorModal from "./components/modals/DeleteColorModal";



function App() {
    const [colors, setColors] = useState<IColor[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedColor, setSelectedColor] = useState<null | { _id: string; name: string; hex: string }>(null);
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
    const [modalState, setModalState] = useState({
        create: false,
        edit: false,
        delete: false,
    });


    useEffect(() => {
        getColors().then(setColors);
    }, []);


    function handleDeleteColor () {
        if (selectedColorId) {
            setColors((prevColors) => prevColors.filter((color) => color._id !== selectedColorId));
        }
        handleModal("delete", false);
    };

    async function handleUpdateColor  (id: string, name: string, hex: string) {
            const updatedColor = await updateColor(id, { name, hex });
            setColors((prevColors) =>
                prevColors.map((color) =>
                    color._id === id ? { ...color, name: updatedColor.name, hex: updatedColor.hex } : color
                )
            );
        handleModal("edit", false)
    };

    const handleModal = (type: "create" | "edit" | "delete", open: boolean, color?: IColor | string) => {
        setModalState((prev) => ({ ...prev, [type]: open }));
        if (type === "edit" && color && typeof color !== "string") setSelectedColor(color);
        if (type === "delete" && typeof color === "string") setSelectedColorId(color);
    };


      const filteredColors = colors.filter(({ name, hex }) =>
        [name.toLowerCase(), hex.toLowerCase()].some((val) => val.includes(searchQuery.toLowerCase()))
    );

    return (
    <>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <div className="p-4 flex flex-col justify-center h-full">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-4xl font-bold text-gray-700 md:text-start mb-12 md:mb-4">Color Manager</h1>
                <div className="flex gap-4 items-center justify-between">
                    <SearchColors searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <button
                        type="button"
                        onClick={() => handleModal("create", true)}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        <div className="flex items-center">
                            <PlusIcon className="w-6 h-6 me-2" /> New color
                        </div>
                    </button>
                </div>
            </div>
            <ColorList
                colors={filteredColors}
                onDeleteColor={handleDeleteColor}
                onEditColor={(color) => handleModal("edit", true, color)}
                onDeleteModal={(id) => handleModal("delete", true, id)}
            />
            <CreateColorModal isOpen={modalState.create} onClose={() => handleModal("create", false)} setColors={setColors} />
            <EditColorModal
                isOpen={modalState.edit}
                onClose={() => handleModal("edit", false)}
                color={selectedColor}
                onUpdateColor={handleUpdateColor}
            />
            <DeleteColorModal isOpen={modalState.delete} onClose={() => handleModal("delete", false)} onDeleteColor={handleDeleteColor} />
        </div>
    </>
  )
}

export default App
