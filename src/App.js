import Header from "./components/Header";
import Posts from "./components/Posts;";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";

export default function App() {
  return (
    <div>
      <Header />

      <div class="pagina">
        <div class="conteudo">
          <Stories />
          <Posts />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
