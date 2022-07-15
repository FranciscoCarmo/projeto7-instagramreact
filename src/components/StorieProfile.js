export default function StorieProfile(props) {
  return (
    <div class="storieProfile">
      <img id="storiesBackground" src="images/stories_background.jpg" alt="" />

      <img id="profilePic" src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  );
}
