import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-zinc-900 ">
        <div className="flex flex-1">
          <Aside />
          <main
            className="
            flex-1
            px-10
            py-5
            bg-gradient-to-t
            from-zinc-950
            to-zinc-900
          "
          >
            <Header />
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
