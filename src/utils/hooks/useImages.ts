import { useEffect, useState } from "react";
import { ApiResponse } from "../../types/Image";
import { imagesApi } from "../../api/images.service";

export default function useImages() {
  const [images, setImages] = useState<ApiResponse>({
    hits: [],
    total: 0,
    totalHits: 0,
  });
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await imagesApi.getImages();
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);
  return images;
}
