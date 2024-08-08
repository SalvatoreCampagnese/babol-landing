import Image from "next/image";
import iconUpload from "../../assets/icon-upload-photo.svg";
export const ImageInput = () => {
  return (
    <div className="w-full h-[124px] bg-surfaceAccentExtraLight rounded-lg flex justify-center items-center">
        <Image src={iconUpload} alt="Upload" width={80} height={80} />
    </div>
  );
};
