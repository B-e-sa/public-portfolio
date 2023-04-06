import { useEffect, useState } from 'react';
import projects from '../../utils/projects';
import DefaultCarousel from './DefaultCarousel';
import LargeCarousel from './LargeCarousel';
import VerticalProjects from './VerticalProjects';

const Projects = (): JSX.Element => {

  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth);

  const updateLayout = (): void => setLayoutWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const printProjects = () => {
    if (window.innerWidth < 510) {
      return <VerticalProjects />
    } else if (window.innerWidth > 730) {
      return <LargeCarousel />
    } else {
      return <DefaultCarousel />
    }
  }

  return (
    <div id='projects'>
        {printProjects()}
    </div>
  );
};


export default Projects;
