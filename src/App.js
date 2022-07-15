import Header from "./components/Header";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import MenuMobile from "./components/MenuMobile";

export default function App() {
  return (
    <div>
      <Header />

      <div class="pagina">
        <div class="conteudo">
          <Stories />
          <Posts />
        </div>

        <Sidebar />
        <MenuMobile />
      </div>
    </div>
  );
}
