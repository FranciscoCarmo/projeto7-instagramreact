import { PaperPlaneOutline } from "react-ionicons";
import { HeartOutline } from "react-ionicons";
import { ChatbubbleOutline } from "react-ionicons";
import { BookmarkOutline } from "react-ionicons";
import { EllipsisHorizontalOutline } from "react-ionicons";

export default function Post(props) {
  let iconHeight = "23px";
  let iconWidth = "23px";

  return (
    <div class="post">
      <div class="postHeader">
        <div class="profile">
          <img src={props.profileImg} alt="" />
          <h3>{props.profileName}</h3>
        </div>

        <div>
          <EllipsisHorizontalOutline
            color={"#00000"}
            height={iconHeight}
            width={iconWidth}
          />
        </div>
      </div>
      <div class="photo">
        <img src={props.postImage} alt="" />
      </div>
      <div class="postBottom">
        <div class="postMenu">
          <div class="postMenuLeft">
            <HeartOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
            <ChatbubbleOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
            <PaperPlaneOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
          </div>
          <div class="postMenuRight">
            <BookmarkOutline
              color={"#00000"}
              height={iconHeight}
              width={iconWidth}
            />
          </div>
        </div>
        <div class="liked">
          <div class="likedImage">
            <img src={props.likedBy.likedProfileImg} alt="" />
          </div>
          <div class="likedBy">
            <p>
              Curtido por <em>{props.likedBy.likedProfileName}</em> e
              <em>outras {props.likedBy.likedNumber} pessoas</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
