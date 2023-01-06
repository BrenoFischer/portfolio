import Description from '../../components/description/description.component';
import Projects from '../../components/projects/projects.component';

import '../../sass/__utilities.scss';


function Home() {
  return (
    <>
      <main>
        <Description />
        <Projects />
      </main>

      {/* <footer>
        <p>footer</p>
      </footer> */}
    </>
  );
}

export default Home;
