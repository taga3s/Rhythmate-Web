import { useEffect, useState } from "react";

type Args = {
  file: File | null;
};

export const useGetImageUrl = ({ file }: Args) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const base64 = reader && reader.result;
      if (base64 && typeof base64 === "string") {
        setImageUrl(base64);
      }
    };
    reader.readAsDataURL(file);
    return () => {
      reader = null;
    };
  }, [file]);
  console.log(imageUrl);
  return {
    imageUrl,
  };
};
