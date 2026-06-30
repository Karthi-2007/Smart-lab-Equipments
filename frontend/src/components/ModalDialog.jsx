import { useEffect } from "react";
import "./ModalDialog.css";

function ModalDialog({ isOpen, title, children, onClose, onConfirm, confirmText = "Confirm", cancelText = "Cancel", isDanger = false }) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="modal-dialog" role="dialog" aria-labelledby="modal-title">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">{children}</div>

          {/* Footer */}
          {onConfirm && (
            <div className="modal-footer">
              <button
                type="button"
                className="modal-btn modal-btn-cancel"
                onClick={onClose}
              >
                {cancelText}
              </button>
              <button
                type="button"
                className={`modal-btn modal-btn-confirm ${isDanger ? "is-danger" : ""}`}
                onClick={onConfirm}
              >
                {confirmText}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ModalDialog;
