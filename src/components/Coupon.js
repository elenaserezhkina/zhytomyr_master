import React from "react";
import "./couponStyle.scss";

const Coupon = () => {
  return (
    <div className="container">
      <div className="couponContainer">
        <header>
          👨‍🔧Компьютерный мастер. <br />
          Ремонт и настройка компьютеров, ноутбуков
        </header>
        <small>более 20 лет опыта</small>
      </div>
      <div className="removable">
        <div className="leftSide">
          <div className="contactDetails">
            <p className="info">
              Евгений <br />
              +38(063) 266-44-28
            </p>
          </div>
        </div>
        <div className="rigthSide">
          <div className="contactDetails">
            <p className="info">
              Евгений <br />
              +38(063) 266-44-28
            </p>
          </div>
          <div className="contactDetails">
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
