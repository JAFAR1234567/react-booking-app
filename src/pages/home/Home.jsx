import { Featured } from "../../components/featured/Featured";
import { Header } from "../../components/header/Header";
import { Nav } from "../../components/navbar/Nav";
import { PropertyList } from "../../components/propertyList/PropertyList";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="homeContainer">
        <Featured/>
          <h1 className="title">Browse by property type</h1>
          <PropertyList/>
      </div>
    </div>
  );
};
