import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";
import "./scss/global.scss";

export default function Home() {
  return (
    <div className="App">
      <Wrapper >
   {/* // aca van todas las caras de la appy dentro de cada cara a su ves otros componentes */}
        <Hero/>

      </Wrapper>
    </div>
  );
}
