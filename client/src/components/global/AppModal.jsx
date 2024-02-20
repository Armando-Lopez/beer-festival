import React, { cloneElement, useState } from "react";

export default function AppModal({
  children,
  activator,
  isOpen,
  styleModal,
  styleIconClose,
  styleLabelClose,
  onClose = () => {},
}) {
  const [localIsOpen, setLocalIsOpen] = useState(isOpen);
  function toggleOpen() {
    const newValue = !localIsOpen;
    setLocalIsOpen(newValue);
    if (newValue === false) {
      onClose?.();
    }
  }

  return (
    <>
      {activator &&
        cloneElement(activator, {
          tabIndex: 0,
          className: `${activator.props.className}`,
          onClick: toggleOpen,
        })}
      <div className={`modal bg-black/60 ${localIsOpen && "modal-open"}`}>
        <div
          className={`modal-box w-[90%] max-w-[880px] p-0 rounded-sm px-4 md:my-auto relative ${
            styleModal || ""
          }`}
        >
          <label
            className={`items-center z-50 w-full absolute right-4 top-4 rounded-full h-10 grid place-items-end cursor-pointer ${
              styleLabelClose || ""
            }`}
            onClick={toggleOpen}
          >
            <i
              className={`iconify text-2xl ${styleIconClose}`}
              data-icon="ph:x-bold"
            />
          </label>
          {children}
        </div>
      </div>
    </>
  );
}
