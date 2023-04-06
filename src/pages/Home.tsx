import { useContext } from 'react';
import styled from 'styled-components';
import AboutMe from '../components/home/AboutMe';
import Footer from '../components/home/Footer';
import Menu from '../components/home/Menu';
import Presentation from '../components/home/Presentation';
import Projects from '../components/home/Projects';
import { ITheme } from '../types';
import { Context } from '../context';
import EmailSender from '../components/home/EmailSender';

const Home = (): JSX.Element => {

  const { usingDarkMode, isModalShowing } = useContext(Context);

  return (
    <HomeContainer
      id='home-container'
      usingDarkMode={usingDarkMode}
    >
      <Menu />
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
      {isModalShowing && <EmailSender />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div<ITheme>`
  background-color: ${props =>
    props.usingDarkMode
      ? 'white'
      : 'black'
  };

  p, h1, h2 {
    color: ${props =>
    props.usingDarkMode
      ? 'black'
      : 'white'
  };
  }
`

export default Home;