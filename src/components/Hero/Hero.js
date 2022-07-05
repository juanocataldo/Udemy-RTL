import "./Hero.scss";
import { useSelector } from "react-redux";
const Hero = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">
      {/* //el hero es la cara principal superior aca van todos los compoentes q van en el hero */}
      Soy Hero Principal
      {console.log(state)}
    </div>
  );
};

export default Hero;
