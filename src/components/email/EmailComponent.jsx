import "./EmailComponent.css";

export const EmailComponent = () => {
  return (
    <div className="mail">
      <div className="title">
        <h1 className="title">Save time, save money!</h1>
        <p className="des">Sign up and we'll send the best deals to you</p>
      </div>
      <div className="inputEmail">
          <input type="text" placeholder="your email"/>
          <button className="btnMail">Subscribe</button>
      </div>
    </div>
  );
};
