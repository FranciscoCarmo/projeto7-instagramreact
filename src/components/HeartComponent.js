import { HeartOutline } from "react-ionicons";
import { Heart } from "react-ionicons";

export default function HeartComponent(props) {
  let iconHeight = "23px";
  let iconWidth = "23px";

  let curtido = props.clique;

  if (curtido == false) {
    return (
      <div>
        <HeartOutline
          className="coracao"
          color={"#00000"}
          height={iconHeight}
          width={iconWidth}
        />
        <Heart
          className="hidden"
          color={"#ee1b1b"}
          height={iconHeight}
          width={iconWidth}
        />
      </div>
    );
  } else {
    return (
      <div>
        <HeartOutline
          className="hidden"
          color={"#00000"}
          height={iconHeight}
          width={iconWidth}
        />
        <Heart
          className="coracao"
          color={"#ee1b1b"}
          height={iconHeight}
          width={iconWidth}
        />
      </div>
    );
  }
}
