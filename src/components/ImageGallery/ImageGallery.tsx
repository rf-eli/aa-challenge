import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../stores/selectedImageSlice";
import { AppDispatch, RootState } from "../../stores/store";
import { SortBy } from "../../types/SortBy";
import ImageCard from "../ImageCard/ImageCard";
import "./image-gallery.css";

interface Props {
  sortBy: SortBy;
}

const ImageGallery: React.FC<Props> = ({ sortBy }: Props) => {
  const { images, selectedImage } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const favorites = images.data.filter((e) => e.favorited);

  // Effect to determine which image should be selected when first mounting, and when changing between recently added and favorited
  // During mount: Select first (most recent) image
  // When switching from recents to favorites: If image is favorited, do nothing. Otherwise select first image in favorites
  // When switching from favorites to recents: Do nothing
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
    return (
      <p>There was an error retrieving the images{images.error?.message}</p>
    );
  }

  if (sortBy === "favorited") {
    return (
      <div className="image-gallery">
        {favorites &&
          favorites.map((data) => {
            return <ImageCard key={data.id} imageData={data} />;
          })}
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {images.data &&
        images.data.map((data) => {
          return <ImageCard key={data.id} imageData={data} />;
        })}
    </div>
  );
};

export default ImageGallery;
