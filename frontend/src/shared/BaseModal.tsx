import { Dialog, Transition } from "@headlessui/react";

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const BaseModal = ({ isOpen, onClose, title, children }: BaseModalProps) => {
    return (
        <Transition appear show={isOpen} as="div">
            <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
                <div className="fixed inset-0 bg-black/70"></div>
                <div className="flex items-center justify-center min-h-screen p-4">
                    <Transition.Child
                        as="div"
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        className="w-full max-w-md"
                    >
                        <Dialog.Panel className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-6">
                            <button
                                type="button"
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                onClick={onClose}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>

                            <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">{title}</Dialog.Title>

                            <div className="mt-4">{children}</div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default BaseModal;
