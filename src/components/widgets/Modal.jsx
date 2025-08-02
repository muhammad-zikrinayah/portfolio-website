import { useEffect } from "react";
import ReactDOM from "react-dom";
import CustomIcons from "./CustomIcons";
import { TextHeadingMedium, TextHeadingSmall } from "./CustomText";

export function ModalSkill({ isOpen, onClose, title, children }) {
  useEffect(() => {}, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-neutral-900/30">
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-20 2xl:mx-0 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-24 gap-y-16 flex flex-col">
          <div className="flex items-center justify-between">
            <TextHeadingSmall text={title}/>
            <button
              type="button"
              className="text-primary-main cursor-pointer hover:text-neutral-50 bg-primary-surface rounded-lg p-2 hover:bg-primary-main"
              onClick={onClose}
            >
              <CustomIcons
                icon="fi-FiX"
                iconColor=""
                iconSize="20"
              />
            </button>
          </div>

          <div className="border-2 rounded-4xl border-neutral-200 w-full"></div>
          <div className="text-justify" >{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}


export function ModalProject({ isOpen, onClose, title, children }) {
  useEffect(() => {}, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-neutral-900/30">
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-20 2xl:mx-0 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-24 gap-y-16 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-primary-main cursor-pointer hover:text-neutral-50 bg-primary-surface rounded-lg p-2 hover:bg-primary-main"
              onClick={onClose}
            >
              <CustomIcons
                icon="fi-FiX"
                iconColor=""
                iconSize="20"
              />
            </button>
          </div>

          <div className="border-2 rounded-4xl border-neutral-200 w-full"></div>
          <div className="text-justify" >{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
