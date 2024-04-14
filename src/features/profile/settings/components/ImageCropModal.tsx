import { FC, useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop, type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ModalBase } from "../../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../../common/components/modal/ModalHeaderCloseButton";
import { setCanvasPreview } from "./setCanvasPreview";

type Props = {
  closeModal: () => void;
  imageUrl: string;
};

export const ImageCropModal: FC<Props> = ({ imageUrl, closeModal }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) => {
    const cropWidthInPercent = (150 / mediaHeight) * 100;
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
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-4 rounded-t border-b">
          <h3 className="font-cp-font text-xl font-bold text-rhyth-dark-blue">あああ</h3>
          <ModalHeaderCloseButton onClickClose={closeModal} />
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-4">
          <ReactCrop
            crop={crop}
            keepSelection
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            aspect={1}
            className="bg-red-400"
          >
            <img ref={imgRef} src={imageUrl} onLoad={onImageLoad} />
          </ReactCrop>
          <button
            className="border p-2 bg-gray-300"
            onClick={() => {
              setCanvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height),
              );
            }}
          >
            画像を切り取る
          </button>
          {crop && <canvas ref={previewCanvasRef} style={{ objectFit: "contain", width: 200, height: 200 }} />}
        </div>
      </div>
    </ModalBase>
  );
};
