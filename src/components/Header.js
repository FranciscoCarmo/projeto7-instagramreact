import { PaperPlaneOutline } from "react-ionicons";
import { CompassOutline } from "react-ionicons";
import { HeartOutline } from "react-ionicons";
import { PersonOutline } from "react-ionicons";

export default function Header() {
  let iconHeight = "23px";
  let iconWidth = "23px";

  return (
    <header>
      <div class="headerContent">
        <div class="iconInsta">
          <img className="logoinsta" src="images/logoinsta.png" />
        </div>
        <div class="headerCenter">
          <div class="logoInsta">
            <img src="images/logo.png" alt="" />
          </div>
          <div class="search">
            <input id="search" type="text" placeholder="Pesquisar" />
          </div>
          <div class="direct">
            <PaperPlaneOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
          </div>
        </div>
        <div class="directMobile">
          <PaperPlaneOutline
            color={"#00000"}
            height={iconHeight}
            width={iconWidth}
          />
        </div>

        <div class="headerRight">
          <div class="explore">
            <CompassOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />{" "}
          </div>
          <div class="likes">
            <HeartOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />{" "}
          </div>
          <div class="people">
            <PersonOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
