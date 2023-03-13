import { useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import { ImageData } from './types/ImageData';
import ImageCard from './components/ImageCard/ImageCard';
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './stores/store';
import { fetchImages } from './stores/imagesSlice';
import { select } from './stores/selectedImageSlice';

function App() {
  const images = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch<AppDispatch>();

  if (images.status === 'idle') {
    dispatch(fetchImages());
  }

  if (images.status === 'loading') return <>Loading...</>;

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {images.data &&
            images.data.map((data) => {
              return <ImageCard key={data.id} imageData={data} />;
            })}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
