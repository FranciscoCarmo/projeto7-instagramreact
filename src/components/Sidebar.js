import ProfileInfo from "./ProfileInfo";
import Suggestions from "./Suggestions";
import SuggestionList from "./SuggestionList";
import SideInfo from "./SideInfo";

export default function Sidebar() {
  const profile = {
    username: "franciscoacarmo",
    name: "Francisco Carmo",
    img: "./images/francisco.jpeg",
  };

  const suggestionArray = [
    {
      profileName: "markzuckerberg",
      profileImg: "images/Mark_Zuckerberg_F8_2018_Keynote_(cropped_2).jpg",
    },
    {
      profileName: "casimiro",
      profileImg: "images/casimiro.jpg",
    },
    {
      profileName: "faustao",
      profileImg: "images/faustao-2-418x235.jpg",
    },
    {
      profileName: "vinijr",
      profileImg: "images/vinijr.jpg_large",
    },
    {
      profileName: "natureismetal",
      profileImg: "images/natureismetal.jpeg",
    },
  ];
  return (
    <div class="sidebar">
      <ProfileInfo
        username={profile.username}
        name={profile.name}
        img={profile.img}
      />

      <Suggestions />

      <div class="suggestionList">
        {suggestionArray.map((x) => (
          <SuggestionList
            profileName={x.profileName}
            profileImg={x.profileImg}
          />
        ))}
      </div>

      <SideInfo />
    </div>
  );
}
