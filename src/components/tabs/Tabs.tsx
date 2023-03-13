import { SortBy } from "../../types/SortBy";
import Tab from "./Tab";

interface Props {
  tabs: TabData[];
  sort: SortBy;
  setSort: any;
}

type TabData = {
  text: string;
  sortAction: SortBy;
};

const Tabs: React.FC<Props> = ({ tabs, sort, setSort }: Props) => {
  return (
    <>
      <div
        style={{
          width: "90%",
          borderBottom: "1px solid var(--light-gray)",
          display: "flex",
        }}
      >
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
