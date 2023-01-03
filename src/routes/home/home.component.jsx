import descriptionPhoto from '../../assets/description-photo1.1.png';

import './home.styles.scss';

function Home() {
  return (
    <>
      <main className="App">
        <section className="description">
          <div className="description__text">
            <p>my description</p>
          </div>
          <div className="description__photo-box">
            <img className="description__photo" src={descriptionPhoto} alt="Description" />
          </div>
        </section>
      </main>

      {/* <footer>
        <p>footer</p>
      </footer> */}
    </>
  );
}

export default Home;
