import React from "react";

import { PaperPlaneOutline } from "react-ionicons";
import { ChatbubbleOutline } from "react-ionicons";
import { BookmarkOutline } from "react-ionicons";
import { EllipsisHorizontalOutline } from "react-ionicons";

import HeartComponent from "./HeartComponent";

export default function Post(props) {
  let iconHeight = "23px";
  let iconWidth = "23px";

  const [curtido, setCurtido] = React.useState(false); // valor começa como 0

  let numeroCurtidas = props.likedBy.likedNumber;
  if (curtido == true) numeroCurtidas = Number(props.likedBy.likedNumber) + 1;

  let nomeCurtidas = props.likedBy.likedProfileName;
  if (curtido == true) nomeCurtidas = "você";

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
        <img
          src={props.postImage}
          alt=""
          onClick={() => {
            setCurtido(true);
          }}
        />
      </div>
      <div class="postBottom">
        <div class="postMenu">
          <div class="postMenuLeft">
            <div
              onClick={() => {
                if (curtido == true) setCurtido(false);
                else setCurtido(true);
              }}
            >
              <HeartComponent clique={curtido} />
            </div>
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
              Curtido por <em>{nomeCurtidas}</em> e
              <em> outras {numeroCurtidas} pessoas</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
