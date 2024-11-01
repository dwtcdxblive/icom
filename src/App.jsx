import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import KV from './assets/KV.png';
import Logo from './assets/logo.png'
function App() {
  const [iframeSrc, setIframeSrc] = useState("https://player.castr.com/live_737a2870977811ef81432b93842f0875?tracks=Floor,Arabic,English");

  const handleIframeChange = (newSrc) => {
    setIframeSrc(newSrc);
  };

  return (
    <div className='app'>
<nav class="navbar justify-content-around">
    <a class="navbar-brand" href="#">
      <img src={Logo} alt=""/>
    </a>  
      <a class="navbar-brand" href="#">
      <img src={KV} alt=""/>
    </a>
</nav>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12 col-sm-12'>
            <iframe
              src={iframeSrc}
              width="100%"
              className='iframe'
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              oallowfullscreen="true"
              msallowfullscreen="true"
            />
          </div>
        </div>
        <div className='row justify-content-around mt-3'>
          <button className='btn btn-primary w-25 icom-btn' onClick={() => handleIframeChange("https://player.castr.com/live_737a2870977811ef81432b93842f0875?tracks=Floor,Arabic,English")}>AUDITORIUM</button>
          <button className='btn btn-primary w-25 icom-btn' onClick={() => handleIframeChange("https://player.castr.com/live_83155de0977811efb3d7299b8e606ac4?tracks=Floor,Arabic,English")}>CLASSROOM</button>
          <button className='btn btn-primary w-25 icom-btn' onClick={() => handleIframeChange("https://player.castr.com/live_9362a540977811ef981d034c0d303af6?tracks=Floor,Arabic.English")}>MULTI-PURPOSE ROOM</button>
        </div>
      </div>
    </div>
  );
}

export default App;
