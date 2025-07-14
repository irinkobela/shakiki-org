import React from 'react';

const Modal = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close modal">
                    <i className="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div className="p-6 text-gray-600 leading-relaxed">
                {content}
            </div>
            <div className="p-4 bg-gray-50 text-right rounded-b-lg">
                 <button onClick={onClose} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-6 py-2 rounded-lg font-semibold">
                    Close
                </button>
            </div>
        </div>
    </div>
);

export default Modal;