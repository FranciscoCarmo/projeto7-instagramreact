export default function SuggestionList(props) {
  return (
    <div class="suggestion">
      <div class="suggestionProfiles">
        <img src={props.profileImg} alt="" />
        <div>
          <h3>{props.profileName}</h3>
          <p>Segue você</p>
        </div>
      </div>
      <h3>Seguir</h3>
    </div>
  );
}
