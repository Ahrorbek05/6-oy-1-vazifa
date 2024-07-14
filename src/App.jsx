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
    <nav className="navigation">
      <div className="container navigation__container">
        <form id="form">
          <select id="select"><option value="Gunung">Gunung</option></select>
          <select id="select"><option value="Pantai">Pantai</option></select>
          <select id="select"><option value="Kuliner">Kuliner</option></select>
          <select id="select"><option value="Outbond">Outbond</option></select>
          <select id="select"><option value="Sejarah">Sejarah</option></select>
          <select id="select"><option value="Edukasi">Edukasi</option></select>
          <select id="select"><option value="Romantis">Romantis</option></select>
          <select id="select"><option value="Alam">Alam</option></select>
        </form>
        <div className="trash-and-contact">
          <button id='button'><i class="fa-regular fa-trash-can"></i></button>
          <button id='btn'><i class="fa-regular fa-user"></i></button>
        </div>
      </div>
    </nav>

    {/* ------ section ------ */}

    <section className="section">
      <div className="container section__container">
        <div className="text-info">
          <h1>Liburan & nikmati
          tempat baru di
          indonesia  ️🏝</h1>
          <p>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
          <span>
            <button id='button-second'>Mulai sekarang →</button>
            <button id='btn-two'><img src="./public/play-icon.svg" alt="play start" /></button>
            <p>Putar Demo</p>
          </span>
        </div>
        <div className="section-picture">
          <img src="./public/hero-image.png" alt="hero picture" width={693} height={707}/>
        </div>
      </div>
    </section>

    <div className="company-brends">
      <div className="container company__container">
        <span>
          <img src="./public/company-one.png" alt="" />
          <img src="./public/company-two.png" alt="" />
          <img src="./public/company-third.png" alt="" />
          <img src="./public/company-four.png" alt="" />
          <img src="./public/company-sixty.png" alt="" />
        </span>
      </div>
    </div>

    <div className="destinasi-favorit">
      <div className="container favorit__container">
        <h3>DESTINASI FAVORIT</h3>
        <h2>✈ • Temukan Destinasi Favoritmu  </h2>
        <div className="images">
          <img src="./public/raja-ampat.png" alt="" />
          <img src="./public/fajingshan.png" alt="" />
          <img src="./public/vevey.png" alt="" />
          <img src="./public/skadar.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
