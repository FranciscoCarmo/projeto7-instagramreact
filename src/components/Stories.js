import { ChevronForwardCircleOutline } from "react-ionicons";
import StorieProfile from "./StorieProfile";

export default function Stories() {
  const profiles = [
    {
      name: "anelise.com.br",
      img: "./images/anelise.jpeg",
    },
    {
      name: "neymarjr",
      img: "./images/neymar.jpg",
    },
    {
      name: "cruzeiro",
      img: "./images/Logo_Cruzeiro_1996.png",
    },
    {
      name: "kevinjubbalmd",
      img: "./images/kevinjubbal.jpg",
    },
    {
      name: "linfnx",
      img: "./images/linfnx.jpeg",
    },
    {
      name: "intz",
      img: "./images/INTZ_Logo_Principal_2022.png",
    },
    {
      name: "fallencs",
      img: "./images/FalleN_@_PGL_Antwerp_2022_AME_RMR.jpg",
    },
    {
      name: "richarlison",
      img: "./images/richarlison.jpg.jpg",
    },
    {
      name: "lucaspaqueta",
      img: "./images/paqueta.jpeg",
    },
  ];

  return (
    <div class="stories">
      <div class="seta">
        <div>
          <ChevronForwardCircleOutline
            color={"#00000"}
            height="15px"
            width="15px"
          />
        </div>
      </div>
      {profiles.map((x) => (
        <StorieProfile name={x.name} img={x.img} />
      ))}
    </div>
  );
}
