import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./stores/store";
import { fetchImages } from "./stores/imagesSlice";
import Content from "./components/Content/Content";

function App() {
  const images = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch<AppDispatch>();

  if (images.status === "idle") dispatch(fetchImages());

  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vh" }}>
        <Content />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
