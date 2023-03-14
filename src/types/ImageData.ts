export interface ImageData {
  id: string;
  url: string;
  filename: string;
  description: string;
  uploadedBy: string;
  createdAt: Date;
  updatedAt: Date;
  dimensions: DimensionData;
  resolution: DimensionData;
  sizeInBytes: number;
  sharedWith: SharedWith[];
  favorited: boolean;
  reclick?: boolean; // In case same image is selected, used for mobile sidebar modal
}

type DimensionData = {
  height: number;
  width: number;
};

type SharedWith = {
  id: string;
  name: string;
  avatar: string;
};
