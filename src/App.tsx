import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { ImageData } from "./types/ImageData";
import ImageCard from "./components/ImageCard/ImageCard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { result, error, loading } = useFetch<ImageData[]>(
    "https://agencyanalytics-api.vercel.app/images.json"
  );

  const sortedData = useMemo(() => {
    if (!result) return;

    result.sort((a: ImageData, b: ImageData): number => {
      const dateA: Date = new Date(a.createdAt);
      const dateB: Date = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });

    return result;
  }, [result]);

  if (result) console.log(new Date(result[0].createdAt).valueOf());

  if (loading) return <>Loading...</>;
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {sortedData &&
            sortedData.map((data) => {
              return <ImageCard imageData={data} />;
            })}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
