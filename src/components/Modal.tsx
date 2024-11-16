import React, { useEffect } from 'react';

interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
  'data-testid'?: string;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  'data-testid': dataTestId,
}) => {
  // Handle ESC key to close the modal
  useEffect(() => {
    if (!onClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Handle click outside the modal content
  const handleScrimClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target && onClose) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleScrimClick}
      data-testid={dataTestId}
    >
      <div>
        <header>
          <h2>Modal Title</h2>
          {onClose && (
            <button onClick={onClose} aria-label="Close">
              Close
            </button>
          )}
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};
