import React from "react";

const notifications = [
  { id: 1, message: "Your order #1234 has been shipped.", read: false },
  { id: 2, message: "New plant care tips available!", read: true },
  { id: 3, message: "Discount on Indoor Plants this week.", read: false },
];

const Notification = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-3/4 md:w-1/3 lg:w-1/4 bg-green-50 shadow-lg border-l border-green-200 flex flex-col z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-green-200 flex justify-between items-center bg-green-100">
        <h1 className="font-semibold text-green-800">
          Notifications ({notifications.length})
        </h1>
        <button
          onClick={onClose}
          className="text-sm text-red-600 hover:underline cursor-pointer"
        >
          Close
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`p-3 rounded-lg shadow-sm border ${
              note.read ? "bg-white" : "bg-green-100"
            }`}
          >
            <p className="text-sm text-gray-800">{note.message}</p>
            <div className="mt-2 flex gap-3">
              {!note.read && (
                <button className="text-xs text-green-700 hover:underline cursor-pointer">
                  Mark as Read
                </button>
              )}
              <button className="text-xs text-red-600 hover:underline cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Notification;
