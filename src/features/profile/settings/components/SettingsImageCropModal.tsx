import type React from "react";
import { type FC, useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop, type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ModalBase } from "../../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../../common/components/modal/ModalHeaderCloseButton";
import { setCanvasPreview } from "../funcs/setCanvasPreview";

type Props = {
  imageUrl: string;
  closeModal: () => void;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
};

export const SettingsImageCropModal: FC<Props> = ({ imageUrl, closeModal, setProfileImage }) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) => {
    const cropWidthInPercent = (150 / mediaWidth) * 100;
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: cropWidthInPercent,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setCrop(centerAspectCrop(naturalWidth, naturalHeight, 1));
  };

  return (
    <ModalBase onClickClose={closeModal}>
      <div className="order relative bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 md:p-4 rounded-t border-b">
          <h3 className="font-cp-font text-xl font-bold text-rhyth-dark-blue">画像の切り取り</h3>
          <ModalHeaderCloseButton onClickClose={closeModal} />
        </div>
        <div className="grid gap-3 p-4 md:p-4">
          <ReactCrop crop={crop} keepSelection onChange={(_, percentCrop) => setCrop(percentCrop)} aspect={1}>
            <img ref={imgRef} src={imageUrl} onLoad={onImageLoad} />
          </ReactCrop>
          <div className="hidden">
            <canvas
              ref={previewCanvasRef}
              style={{
                objectFit: "contain",
              }}
              className="w-full"
            />
          </div>
          <button
            type="button"
            className="w-full text-white bg-rhyth-gray hover:bg-hover-gray active:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => {
              setCanvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(crop, imgRef.current!.width, imgRef.current!.height),
              );
              const dataUrl = previewCanvasRef.current?.toDataURL();
              setProfileImage(dataUrl ?? "");
              closeModal();
            }}
          >
            画像を切り取る
          </button>
        </div>
      </div>
    </ModalBase>
  );
};
