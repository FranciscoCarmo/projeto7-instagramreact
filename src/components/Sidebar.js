import ProfileInfo from "./ProfileInfo";
import Suggestions from "./Suggestions";

export default function Sidebar() {
  const profile = {
    username: "franciscoacarmo",
    name: "Francisco Carmo",
    img: "./images/francisco.jpeg",
  };
  return (
    <div class="sidebar">
      <ProfileInfo
        username={profile.username}
        name={profile.name}
        img={profile.img}
      />
    </div>
  );
}
