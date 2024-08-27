import Image from "next/image";
import iconUpload from "../../assets/icon-upload-photo.svg";
import { useRef } from "react";
export const ImageInput = ({
  image,
  setImage
}:{
  image: any,
  setImage: Function
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full h-[124px] bg-surfaceAccentExtraLight rounded-lg flex justify-center items-center">
              <input type="file" name="file" ref={fileInput} onChange={(e) => {
                console.log(e.target.files);
              }}/>

        <Image src={image ? image : iconUpload} alt="Upload" width={80} height={80} />
    </div>
  );
};
