import { ImageData } from "../../types/ImageData";
import { bytesToMegabytes } from "../../utils/format-bytes";
import "./image-card.css";

interface Props {
  imageData: ImageData;
  selected: boolean;
}

const ImageCard: React.FC<Props> = ({ imageData, selected = false }: Props) => {
  return (
    <div className="image-card">
      <img
        src={imageData.url}
        alt={imageData.filename}
        className={`${selected && "selected"}`}
      />
      <div className="image-card-filename">{imageData.filename}</div>
      <div className="image-card-size">
        {bytesToMegabytes(imageData.sizeInBytes)}
      </div>
    </div>
  );
};

export default ImageCard;
