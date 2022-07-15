export default function ProfileInfo(props) {
  return (
    <div class="yourProfile">
      <img src={props.img} alt="" />

      <div>
        <h3>{props.username}</h3>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
