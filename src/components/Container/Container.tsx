import "./container.css";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
