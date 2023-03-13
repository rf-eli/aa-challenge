import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteImage, toggleFavoriteImage } from "../../stores/imagesSlice";
import { select } from "../../stores/selectedImageSlice";
import { AppDispatch, RootState } from "../../stores/store";
import { bytesToMegabytes } from "../../utils/format-bytes";
import { formatDateAsString } from "../../utils/format-dates";
import Button from "../Button/Button";
import HeartIcon from "../icons/HeartIcon";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  const selected = useSelector((state: RootState) => state.selectedImage);
  const images = useSelector((state: RootState) => state.images.data);
  const dispatch = useDispatch<AppDispatch>();
  const index = useMemo(
    () => images.map((data) => data.id).indexOf(selected.id),
    [images, selected]
  );

  if (!selected.id) return <>Loading</>;

  const handleDelete = () => {
    dispatch(deleteImage(selected.id));
    if (index >= images.length - 1) dispatch(select(images[index - 1]));
    else dispatch(select(images[index + 1]));
  };

  const handleFavorite = () => {
    dispatch(toggleFavoriteImage(index));
  };

  return (
    <div className="sidebar">
      <img src={selected.url} alt={selected.filename} />
      <div className="sidebar-title-row">
        <span className="sidebar-filename">{selected.filename}</span>
        <span>
          <HeartIcon
            width={20}
            height={20}
            stroke={1.5}
            favorited={images[index].favorited}
            onClick={handleFavorite}
          />
        </span>
      </div>
      <div className="sidebar-size">
        {bytesToMegabytes(selected.sizeInBytes)}
      </div>
      <div className="sidebar-info">
        <h3>Information</h3>
      </div>
      <div className="sidebar-info">
        <span>Uploaded By</span>
        <span>{selected.uploadedBy}</span>
      </div>
      <div className="sidebar-info">
        <span>Created</span>
        <span>{formatDateAsString(selected.createdAt)}</span>
      </div>
      <div className="sidebar-info">
        <span>Last modified</span>
        <span>{formatDateAsString(selected.updatedAt)}</span>
      </div>
      <div className="sidebar-info">
        <span>Dimensions</span>
        <span>
          {selected.dimensions.height} x {selected.dimensions.width}
        </span>
      </div>
      <div className="sidebar-info">
        <span>Resolution</span>
        <span>
          {selected.resolution.height} x {selected.resolution.width}
        </span>
      </div>
      {selected.description && (
        <>
          <h3>Description</h3>
          <p>{selected.description}</p>
        </>
      )}
      <Button onClick={handleDelete} text="Delete" />
    </div>
  );
};

export default Sidebar;
