import type { PixelCrop } from "react-image-crop";

export const setCanvasPreview = (image: HTMLImageElement | null, canvas: HTMLCanvasElement | null, crop: PixelCrop) => {
  if (image === null || canvas === null) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("2dコンテクストがありません");
  }

  const pixelRatio = window.devicePixelRatio;
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";
  ctx.save();

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;
  ctx.translate(-cropX, -cropY);
  ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight);
  ctx.restore();
};
