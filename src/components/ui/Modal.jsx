import { useFocusTrap } from "@/hooks/useFocusTrap";
import { X } from "@/components/ui/Icons";
import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
export function Modal({ open, title, kicker, onClose, children }) {
  const dialogRef = useRef(null);
  const handleClose = useCallback(() => onClose(), [onClose]);
  useFocusTrap(open, dialogRef, handleClose);
  if (!open) return null;
  return createPortal(
    <div className="modal">
      <button
        type="button"
        className="modal__backdrop"
        aria-label="Fermer la fenêtre"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="modal__dialog"
      >
        <div className="modal__head">
          <div>
            {kicker ? <p className="modal__kicker">{kicker}</p> : null}
            <h2 id="project-dialog-title" className="modal__title">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="modal__close"
            aria-label="Fermer la modale"
          >
            <X className="icon icon--16" aria-hidden="true" />
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
