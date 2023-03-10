import { SortBy } from "../../types/SortBy";
import Tab from "./Tab";
import "./tabs.css";

interface Props {
  tabs: TabData[];
  sort: SortBy;
  setSort: any;
}

export type TabData = {
  text: string;
  sortAction: SortBy;
};

const Tabs: React.FC<Props> = ({ tabs, sort, setSort }: Props) => {
  return (
    <>
      <div className="tabs">
        {tabs.map((data, index) => {
          return (
            <Tab
              key={index}
              onClick={() => setSort(data.sortAction)}
              active={sort === data.sortAction}
            >
              {data.text}
            </Tab>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
