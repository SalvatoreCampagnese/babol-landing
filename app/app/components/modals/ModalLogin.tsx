import { FormBox } from "../login-form/FormBox";

const ModalLogin = () => {
  return (
    <div className="fixed w-screen md:w-full h-full bg-[#000000A3] backdrop-blur-[5px] top-0 left-0 z-10 flex justify-center items-center">
      <div className="w-11/12 md:w-full flex justify-center items-center">
        <FormBox />
      </div>
    </div>
  );
};

export default ModalLogin;
