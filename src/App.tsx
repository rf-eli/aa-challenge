import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { ImageData } from "./types/ImageData";
import ImageCard from "./components/ImageCard/ImageCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./stores/store";
import { fetchImages } from "./stores/imagesSlice";

function App() {
  const images = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch<AppDispatch>();

  if (images.status === "idle") dispatch(fetchImages());

  // console.log(images.data);
  // const sortedData = useMemo(() => {
  //   if (!images.data) return;
  //   let result = images.data;
  //   return result.sort((a: ImageData, b: ImageData): number => {
  //     const dateA: Date = new Date(a.createdAt);
  //     const dateB: Date = new Date(b.createdAt);
  //     return dateB.getTime() - dateA.getTime();
  //   });
  // }, [images.data]);

  if (images.status === "loading") return <>Loading...</>;

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.data &&
            images.data.map((data) => {
              return <ImageCard imageData={data} />;
            })}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
