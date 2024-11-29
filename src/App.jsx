import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import FilmGallery from './components/FilmGallery';
//import Settings from './components/Settings';
//import ProfileSettings from './components/ProfileSettings'

function App() {
  return(
    <>{/*Ho deciso di scrivere cosi l header e main poiche era poca roba, non so se ho sbagliato.*/}
    <div className='bg-black'>
      <Topbar />
      <header className="bg-black">
        <div className="container align-items-center bg-black d-flex mt-3">
          <h1 style={{ color: 'white', marginTop:"20px", marginBottom:"20px"}}>Tv Shows</h1>
          <div className="dropdown ps-5 d-flex align-items-center" style={{marginTop:"20px", marginBottom:"20px"}}>
          <button className="btn btn-outline-light rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genres
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Horror</a></li>
            <li><a className="dropdown-item" href="#">Animated</a></li>
          </ul>
        </div>
        </div>
      </header>
      <main>
         <FilmGallery title="Star Wars" genre="Star Wars"/>
         <FilmGallery title="Harry Potter" genre="Harry Potter" className=""/>
         <FilmGallery title="Lord of The Rings" genre="Lord of the rings"/>
      </main>
      {/*<ProfileSettings /> Per ottenere la ProfileSettings page bisogna commentare da inizio Topbar fino a fine main, stessa cosa per i Settings
      <Settings /> Bisogna togliere i commenti anche agli import,*/}
      <Footer />
    </div>
    </>
  );
}

export default App
