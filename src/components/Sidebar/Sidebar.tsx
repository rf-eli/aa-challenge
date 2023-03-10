import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { bytesToMegabytes } from "../../utils/format-bytes";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  const selected = useSelector((state: RootState) => state.selectedImage);

  return (
    <div className="sidebar">
      <img src={selected.url} alt={selected.filename} />
      <div>{selected.filename}</div>
      <div>{bytesToMegabytes(selected.sizeInBytes)}</div>
      <div>Information</div>
      <div>{selected.uploadedBy}</div>
      {/* <div>{selected.createdAt.toDateString()}</div> */}
      {/* <div>{selected.updatedAt.toDateString()}</div> */}
      <div>
        {/* {selected.dimensions.height} x {selected.dimensions.width} */}
      </div>
      <div>
        {/* {selected.resolution.height} x {selected.resolution.width} */}
      </div>
      <p>{selected.description}</p>
      <button>Delete</button>
    </div>
  );
};

export default Sidebar;
