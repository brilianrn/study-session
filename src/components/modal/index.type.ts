import { ReactNode } from 'react';

export interface ModalProps {
  title: string;
  showModal: boolean;
  closeModal: () => void;
  closeModalBackground?: () => void;
  cancelButtonRef?: React.MutableRefObject<null>;
  children?: ReactNode;
  confirmButton?: string;
}
