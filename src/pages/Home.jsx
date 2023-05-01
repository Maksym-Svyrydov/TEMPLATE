import { useLocation } from 'react-router-dom';
import { Wrapper, Page, IMG } from './Home.styled';
import BgImg from '../img/img2.png';

const Home = () => {
  const location = useLocation();

  return (
    <Wrapper state={{ from: location }}>
      <IMG src={BgImg} alt="IMG" />
      <Page>Welcome to my test-task</Page>
    </Wrapper>
  );
};

export default Home;
