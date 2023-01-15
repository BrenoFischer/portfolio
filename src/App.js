import { Routes, Route } from 'react-router-dom';
// import Description from './components/description/description.component';
// import Projects from './components/projects/projects.component';
// import About from './routes/about/about.component';
// import Contact from './routes/contact/contact.component';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigaton.components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path='description/' element={<Description />} />
        <Route path='projects/' element={<Projects />} />
        <Route path='about/' element={<About />} />
        <Route path='contact/' element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
