import type { ImageMetadata } from "astro";
import type { PhotoGalleryImage } from "../components/PhotoGallery.astro";

export function toPhotoGalleryImage(
  image: ImageMetadata,
  alt: string,
): PhotoGalleryImage {
  return {
    // @ts-expect-error type issue with astro-carousel
    src: image,
    alt,
    format: image.format,
    width: image.width,
    height: image.height,
  };
}
