import "./heart-icon.css";

interface Props {
  width: number;
  height: number;
  stroke: number;
  favorited: boolean;
  onClick?: () => void;
}

const HeartIcon: React.FC<Props> = ({
  height,
  width,
  stroke,
  favorited,
  onClick,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={favorited ? "red" : "none"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
      onClick={onClick}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};

export default HeartIcon;
