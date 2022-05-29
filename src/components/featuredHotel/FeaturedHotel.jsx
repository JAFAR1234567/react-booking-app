import "./FeaturedHotel.css";

export const FeaturedHotel = () => {
  return (
    <div className="property">
      <div className="hotels">
        <div className="singleItem hotel">
          <div className="img">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              }
              alt=""
            />
          </div>
          <div className="description">
            <p className="name">Sugar Loft Apartments</p>
            <p className="place">Rio de Janeiro</p>
            <h6 className="price">Starting from BDT 4,528</h6>
          </div>
          <div className="ratingInfo">
            <button>9.1</button>
            <span className="positon">Wonderful</span>
            <span className="reviews">288 reviews</span>
          </div>
        </div>
        <div className="singleItem hotel">
          <div className="img">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              }
              alt=""
            />
          </div>
          <div className="description">
            <p className="name">Sugar Loft Apartments</p>
            <p className="place">Rio de Janeiro</p>
            <h6 className="price">Starting from BDT 4,528</h6>
          </div>
          <div className="ratingInfo">
            <button>9.1</button>
            <span className="positon">Wonderful</span>
            <span className="reviews">288 reviews</span>
          </div>
        </div>
        <div className="singleItem hotel">
          <div className="img">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              }
              alt=""
            />
          </div>
          <div className="description">
            <p className="name">Sugar Loft Apartments</p>
            <p className="place">Rio de Janeiro</p>
            <h6 className="price">Starting from BDT 4,528</h6>
          </div>
          <div className="ratingInfo">
            <button>9.1</button>
            <span className="positon">Wonderful</span>
            <span className="reviews">288 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};
