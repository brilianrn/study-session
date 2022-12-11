import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

import { Button } from '../buttons';
import Card from '../card';
import { ModalProps } from './index.type';

const Modal = ({
  title,
  showModal,
  closeModal,
  children,
  confirmButton,
}: ModalProps) => {
  return (
    <React.Fragment>
      <Transition appear show={showModal} as="div">
        <Dialog as="div" className="bg-danger-default" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Card>
                  <Card.Header onClose={closeModal}>
                    <p className="font-bold md:text-[25px] text-[15px] w-full">
                      {title}
                    </p>
                  </Card.Header>
                  {children}
                  <div className={confirmButton ? 'visible' : 'hidden'}>
                    <Card.Footer>
                      <Button
                        onClick={closeModal}
                        title="Close"
                        type="danger"
                      />
                    </Card.Footer>
                  </div>
                </Card>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default Modal;
