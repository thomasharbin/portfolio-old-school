import { Fragment } from "react";

// styles
import "./styles.scss";

const Wallpaper = ({ wallpaper, setWallpaper }) => {
  function setStars() {
    setWallpaper("stars");
    console.log("stars was clicked");
  }

  function setGreen() {
    setWallpaper("green");
    console.log(wallpaper)
  }

  return (
    <Fragment>
      <div className="wallpaper-content">
        <h3>Select Wallpaper</h3>
        <div className="wallpaper-choices">
          <button onClick={setGreen}>
            <img src="/icon/green-background.png" alt="green background" 
            className={wallpaper == 'green' ? `active-wallpaper` : ``}
            ></img>
          </button>
          <button onClick={setStars}>
            <img src="/wallpaper/stars.png" alt="stars background" 
            className={wallpaper == 'stars' ? `active-wallpaper` : ``}/>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Wallpaper;
