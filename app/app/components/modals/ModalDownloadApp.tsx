import Image from "next/image";
import iconClose from "../../assets/icon-close.svg";
import qrCodeImage from "../../assets/qr-code.svg";
import Modal from 'react-modal';

export const ModalDownloadApp = ({
  open,
  hideModal,
}: {
  open: boolean;
  hideModal: Function;
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: '#00000050'
    },
    content: {
      right: 'auto',
      bottom: 'auto',
      backgroundColor: 'transparent',
      border: '0px'
    },
  };
  
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => hideModal()}
      style={customStyles}
    >
      <div className="fixed top-0 left-0 w-screen h-screen bg-surfaceBlackAlpha flex justify-center items-center">
        <div className="bg-white rounded-xxl w-11/12 sm:w-3/6 md:w-2/6 h-fit p-2 gap-xl py-2 sm:py-2">
          <div className="w-full h-[40px] flex justify-end">
            <button
              onClick={() => hideModal()}
              className="w-[40px] h-[40px] flex justify-center items-center text-black"
            >
              <Image src={iconClose} width={30} height={30} alt="close" />
            </button>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-black gap-lg sm:gap-xl">
            <h1 className="text-black font-satoshiBold text-xxxl sm:text-xxxl leading-9">
              Download the app
            </h1>
            <div className="bg-surfaceAccentLighter px-4 py-10 w-full rounded-xl sm:w-5/6 sm:mb-xl sm:py-xxl sm:px-6">
              <Image
                src={qrCodeImage}
                width={104}
                height={104}
                alt="qr code"
                className="min-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
