import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { ImageData } from "./types/ImageData";
import ImageCard from "./components/ImageCard/ImageCard";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";
import { useDispatch } from "react-redux/es/exports";
import { select } from "./stores/selectedImageSlice";

function App() {
  const { result, error, loading } = useFetch<ImageData[]>(
    "https://agencyanalytics-api.vercel.app/images.json"
  );

  const selected = useSelector((state: RootState) => state.selectedImage);
  const dispatch = useDispatch();

  if (result) {
    dispatch(select(result[0]));
  }

  if (loading) return <>Loading...</>;
  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {result &&
          result.map((data) => {
            return <ImageCard imageData={data} selected={false} />;
          })}
      </div>
    </div>
  );
}

export default App;
