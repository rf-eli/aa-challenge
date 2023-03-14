import { useState } from "react";
import { SortBy } from "../../types/SortBy";
import ImageGallery from "../ImageGallery/ImageGallery";
import Tabs, { TabData } from "../Tabs/Tabs";
import "./content.css";

const tabsList: TabData[] = [
  { text: "Recently Added", sortAction: "recent" },
  { text: "Favorited", sortAction: "favorited" },
];

const Content: React.FC = () => {
  const [sort, setSort] = useState<SortBy>("recent");

  return (
    <div className="content">
      <h1>Photos</h1>
      <Tabs tabs={tabsList} sort={sort} setSort={setSort} />
      <ImageGallery sortBy={sort} />
    </div>
  );
};

export default Content;
