import Post from "./Post";

export default function Posts() {
  const postsArray = [
    {
      profileName: "cachoeiras_moeda",
      profileImg: "images/moeda.jpg",
      postImage:
        "https://4.bp.blogspot.com/-5GDNIcK0GoA/WJHWFsA-skI/AAAAAAAAAZg/Q-dIjpcU2BQ-77ds1XPG1C40KWYV5RgSACLcB/s1600/Snapseed%2B%25281%2529.jpg",
      likedBy: {
        likedProfileImg: "images/anelise.jpeg",
        likedProfileName: "anelise.com.br",
        likedNumber: "119",
      },
    },

    {
      profileName: "anelise.com.br",
      profileImg: "images/anelise.jpeg",
      postImage: "images/flor.jpg",
      likedBy: {
        likedProfileImg: "images/kevinjubbal.jpg",
        likedProfileName: "kevinjubbalmd",
        likedNumber: "326",
      },
    },

    {
      profileName: "neymarjr",
      profileImg: "images/neymar.jpg",
      postImage: "images/neymarjogo.jpg",
      likedBy: {
        likedProfileImg: "images/Logo_Cruzeiro_1996.png",
        likedProfileName: "cruzeiro",
        likedNumber: "109.532",
      },
    },

    {
      profileName: "anelise.com.br",
      profileImg: "images/anelise.jpeg",
      postImage: "images/carrancas.jpg",
      likedBy: {
        likedProfileImg: "images/moeda.jpg",
        likedProfileName: "cachoeiras_moeda",
        likedNumber: "432",
      },
    },
  ];

  return (
    <div className="posts">
      {postsArray.map((x) => (
        <Post
          profileName={x.profileName}
          profileImg={x.profileImg}
          postImage={x.postImage}
          likedBy={x.likedBy}
        />
      ))}
    </div>
  );
}
