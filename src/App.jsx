import './App.css'

function App() {

  return (
    <>
    <header className='header'>
      <div className="container header__container">
        <a href="#"><img src="./public/logotip.svg" alt="logotip" /></a>
        <div className="src">
          <span><img src="./public/Icon.svg" alt="icon" /><input type="text" placeholder='Cari apapun disini...' /></span>
        </div>
        <div className="world-select">
          <span><img src="./public/Icon.copy.svg" alt="icon" /><select id="select"><option value=" Bahasa Indonesia"> Bahasa Indonesia</option></select></span>
        </div>
        <div className="social-maps">
          <a href="#">
            <img src="./public/Button.svg" alt="maps image" />
            <span> Lokasi <br /> <select id="select"><option value="Indonesia, Yogyakarta">Indonesia, Yogyakarta</option></select></span>
          </a>
        </div>
      </div>
    </header>
    </>
  )
}

export default App
