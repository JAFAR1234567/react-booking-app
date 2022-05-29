import { EmailComponent } from "../../components/email/EmailComponent";
import { Featured } from "../../components/featured/Featured";
import { FeaturedHotel } from "../../components/featuredHotel/FeaturedHotel";
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
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle"> Homes guests love</h1>
        <FeaturedHotel/>
      </div>
      <EmailComponent/>
    </div>
  );
};
