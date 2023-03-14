import Container from "../components/Container/Container";
import Content from "../components/Content/Content";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout: React.FC = () => {
  return (
    <Container>
      <Content />
      <Sidebar />
    </Container>
  );
};

export default AppLayout;
