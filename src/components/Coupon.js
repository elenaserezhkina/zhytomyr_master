import React, { useState } from "react";
import "./couponStyle.scss";

const Coupon = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onCouponClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="container">
      <div className="couponContainer">
        <header>
          👨‍🔧Компьютерный мастер. <br />
          Ремонт и настройка компьютеров, ноутбуков в Житомире
        </header>
        <small>более 20 лет опыта</small>
      </div>
      <div className="removable">
        <div className="leftSide">
          <div className="contactDetails" onClick={onCouponClick}>
            <p className="info">
              Евгений <br />
              +38(063) 266-44-28
            </p>
          </div>
        </div>
        <div className="rigthSide">
          <div
            onClick={onCouponClick}
            className={
              isClicked ? "contactDetails clicked main" : "contactDetails main"
            }
          >
            <p className="info">
              Евгений <br />
              +38(063) 266-44-28
            </p>
          </div>
          <div onClick={onCouponClick} className="contactDetails">
            <p className="info">
              Евгений <br />
              +38(063) 266-44-28
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
