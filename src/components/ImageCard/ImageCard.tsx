import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../stores/imagesSlice";
import { select } from "../../stores/selectedImageSlice";
import { AppDispatch, RootState } from "../../stores/store";
import { ImageData } from "../../types/ImageData";
import { bytesToMegabytes } from "../../utils/format-bytes";
import "./image-card.css";

interface Props {
  imageData: ImageData;
}

const ImageCard: React.FC<Props> = ({ imageData }: Props) => {
  const selectedId = useSelector((state: RootState) => state.selectedImage.id);
  const dispatch = useDispatch<AppDispatch>();

  const isSelected = selectedId === imageData.id;

  return (
    <div className="image-card" onClick={() => dispatch(select(imageData))}>
      <img
        src={imageData.url}
        alt={imageData.filename}
        className={`${isSelected && "selected"}`}
      />
      <div className="image-card-text image-card-filename truncate">
        {imageData.filename}
      </div>
      <div className="image-card-text image-card-size">
        {bytesToMegabytes(imageData.sizeInBytes)}
      </div>
    </div>
  );
};

export default ImageCard;
