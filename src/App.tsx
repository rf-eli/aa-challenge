import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./stores/store";
import { fetchImages } from "./stores/imagesSlice";
import AppLayout from "./layouts/AppLayout";

function App() {
  const images = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch<AppDispatch>();

  if (images.status === "idle") dispatch(fetchImages());

  return <AppLayout />;
}

export default App;
