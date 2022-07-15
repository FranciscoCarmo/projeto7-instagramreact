import { HomeOutline } from "react-ionicons";
import { SearchOutline } from "react-ionicons";
import { AddCircleOutline } from "react-ionicons";
import { HeartOutline } from "react-ionicons";
import { PersonOutline } from "react-ionicons";

export default function MenuMobile() {
  let iconHeight = "23px";
  let iconWidth = "23px";
  return (
    <div class="mobileMenu">
      <div>
        <HomeOutline color={"#00000"} height={iconHeight} width={iconWidth} />
      </div>
      <div>
        <SearchOutline color={"#00000"} height={iconHeight} width={iconWidth} />
      </div>
      <div>
        <AddCircleOutline
          color={"#00000"}
          height={iconHeight}
          width={iconWidth}
        />
      </div>
      <div>
        <HeartOutline color={"#00000"} height={iconHeight} width={iconWidth} />
      </div>
      <div>
        <PersonOutline color={"#00000"} height={iconHeight} width={iconWidth} />
      </div>
    </div>
  );
}
