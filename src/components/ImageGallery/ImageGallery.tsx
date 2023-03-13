import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../stores/selectedImageSlice";
import { AppDispatch, RootState } from "../../stores/store";
import { SortBy } from "../../types/SortBy";
import ImageCard from "../ImageCard/ImageCard";

interface Props {
  sortBy: SortBy;
}

const ImageGallery: React.FC<Props> = ({ sortBy }: Props) => {
  const { images, selectedImage } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const favorites = images.data.filter((e) => e.favorited);

  useEffect(() => {
    if (images.status !== "success") return;
    if (sortBy === "recent" && !selectedImage.id) {
      dispatch(select(images.data[0]));
    } else if (
      sortBy === "favorited" &&
      !favorites.some((e) => e.id === selectedImage.id)
    ) {
      dispatch(select(favorites[0]));
    }
  }, [sortBy, images]);

  if (images.status === "fail") {
    return <>There was an error, {images.error?.message}</>;
  }

  if (sortBy === "favorited") {
    return (
      <>
        {favorites &&
          favorites.map((data) => {
            return <ImageCard key={data.id} imageData={data} />;
          })}
      </>
    );
  }

  return (
    <>
      {images.data &&
        images.data.map((data) => {
          return <ImageCard key={data.id} imageData={data} />;
        })}
    </>
  );
};

export default ImageGallery;
