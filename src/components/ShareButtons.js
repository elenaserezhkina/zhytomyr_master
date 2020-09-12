import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  ViberShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  ViberIcon,
} from "react-share";
import "./shareButtons.style.scss";

const shareUrl = "";
const summary = "👨‍🔧Компьютерный мастер Житомир";
const ShareButtons = () => {
  return (
    <div>
      <div className="pageHeaderText">Поделиться с друзьями</div>
      <div className="shareContainer">
        <FacebookShareButton
          quote="Компьютерный мастер Житомир"
          hashtag="#настройкакомпьютеровжитомир"
          url={shareUrl}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} title={summary}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <ViberShareButton url={shareUrl} title={summary}>
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
