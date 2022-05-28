import "./Featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <div className="top">
          <div className="singleFeatured">
              <img
                src={
                  "https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o"
                }
                alt=""
              />
              <h1>Dublin</h1>
              <h2>427 properties</h2>
          </div>
          <div className="singleFeatured">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o"
              }
              alt=""
            />
            <h1>Truckee</h1>
            <h2>365 properties</h2>
          </div>
        </div>
        <div className="bottom">
          <div className="singleFeatured">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/city/540x270/689874.webp?k=5a29b0d987e962b9ce2c78ae5dae52d02fb2ed959b1e2b00faf022306e103f8b&o"
              }
              alt=""
            />
            <h1>South Lake Tahoe</h1>
            <h2>255 properties</h2>
          </div>
          <div className="singleFeatured">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o"
              }
              alt=""
            />
            <h1>Austine</h1>
            <h2>78 properties</h2>
          </div>
          <div className="singleFeatured">
            <img
              src={
                "https://cf.bstatic.com/xdata/images/city/540x270/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o"
              }
              alt=""
            />
            <h1>Reno</h1>
            <h2>783 properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
