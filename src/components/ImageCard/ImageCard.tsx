import { useSelector, useDispatch } from "react-redux";
import { select } from "../../stores/selectedImageSlice";
import { RootState } from "../../stores/store";
import { ImageData } from "../../types/ImageData";
import { bytesToMegabytes } from "../../utils/format-bytes";
import "./image-card.css";

interface Props {
  imageData: ImageData;
}

const ImageCard: React.FC<Props> = ({ imageData }: Props) => {
  const selectedId = useSelector((state: RootState) => state.selectedImage.id);
  const dispatch = useDispatch();

  return (
    <div className="image-card" onClick={() => dispatch(select(imageData))}>
      <img
        src={imageData.url}
        alt={imageData.filename}
        className={`${selectedId == imageData.id && "selected"}`}
      />
      <div className="image-card-filename">{imageData.filename}</div>
      <div className="image-card-size">
        {bytesToMegabytes(imageData.sizeInBytes)}
      </div>
    </div>
  );
};

export default ImageCard;
