import BaseModal from "../../shared/BaseModal";

interface DeleteColorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDeleteColor: () => void;
}

const DeleteColorModal = ({ isOpen, onClose, onDeleteColor }: DeleteColorModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Are you sure?">
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Do you really want to delete this color? This action cannot be undone.
            </p>
            <div className="mt-6 flex justify-end space-x-3">
                <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-600">
                    No
                </button>
                <button onClick={onDeleteColor} className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700">
                    Yes, Delete
                </button>
            </div>
        </BaseModal>
    );
};

export default DeleteColorModal;
