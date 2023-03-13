import { useState } from "react";
import { SortBy } from "../../types/SortBy";
import ImageGallery from "../ImageGallery/ImageGallery";
import Tabs from "../Tabs/Tabs";
import "./content.css";

const Content: React.FC = () => {
  const [sort, setSort] = useState<SortBy>("recent");

  return (
    <div className="content">
      <h1>Photos</h1>
      <Tabs
        tabs={[
          { text: "Recently Added", sortAction: "recent" },
          { text: "Favorited", sortAction: "favorited" },
        ]}
        sort={sort}
        setSort={setSort}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ImageGallery sortBy={sort} />
      </div>
    </div>
  );
};

export default Content;
