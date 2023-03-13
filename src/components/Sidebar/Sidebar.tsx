import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../../stores/imagesSlice';
import { select } from '../../stores/selectedImageSlice';
import { AppDispatch, RootState } from '../../stores/store';
import { bytesToMegabytes } from '../../utils/format-bytes';
import { formatDateAsString } from '../../utils/format-dates';
import './sidebar.css';

const Sidebar: React.FC = () => {
  const selected = useSelector((state: RootState) => state.selectedImage);
  const images = useSelector((state: RootState) => state.images.data);
  const dispatch = useDispatch<AppDispatch>();

  if (!selected.id) return <>Loading</>;

  const handleDelete = () => {
    const index = images.map((data) => data.id).indexOf(selected.id);
    dispatch(deleteImage(selected.id));
    if (index >= images.length - 1) dispatch(select(images[index - 1]));
    else dispatch(select(images[index + 1]));
  };

  return (
    <div className="sidebar">
      <img src={selected.url} alt={selected.filename} />
      <div className="sidebar-title-row">
        <div className="sidebar-filename">{selected.filename}</div>
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
      <p>{selected.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Sidebar;
