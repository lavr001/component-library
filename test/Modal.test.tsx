import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../src';
import { vi, describe, beforeEach, test, expect } from 'vitest';

describe('Modal', () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockReset();
  });

  const Scenario = (props: any) => (
    <Modal {...props}>
      <p>Modal Content</p>
    </Modal>
  );

  test('renders modal with expected controls', () => {
    render(<Scenario onClose={() => {}} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  describe('when passed onClose handler', () => {
    test('calls onClose action when pressing the ESC key', () => {
      render(<Scenario onClose={mockClose} />);
      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test('renders dismissible button that calls onClose action when clicked', async () => {
      render(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test('calls onClose action when clicking outside of the modal', async () => {
      render(<Scenario data-testid="mockId" onClose={mockClose} />);
      const scrimElement = screen.getByTestId('mockId');
      fireEvent.click(scrimElement);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
