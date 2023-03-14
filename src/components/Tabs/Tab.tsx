import { SortBy } from "../../types/SortBy";
import "./tab.css";

interface Props {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ active, onClick, children }: Props) => {
  const classes = `tab ${active && "active"}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Tab;
