import Image from 'next/image';
import { useState } from 'react';
import iconImage from '../../assets/icon-upload-photo.svg';

export default function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader : any = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label className="w-64 h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Selected"
              width={48}
              height={48}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="flex flex-col items-center">
            <Image
              src={iconImage}
              width={48}
              height={48}
              alt="Upload"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-600">Upload a photo</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
