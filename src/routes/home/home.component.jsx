import Description from '../../components/description/description.component';
import Projects from '../../components/projects/projects.component';
import About from '../about/about.component';
import Contact from '../contact/contact.component';

import '../../sass/__utilities.scss';
import Footer from '../../components/footer/footer.component';


function Home() {
  return (
    <main>
      <Description />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
