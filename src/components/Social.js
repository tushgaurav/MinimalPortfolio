import github from "../images/components/social/github.svg";
import instagram from "../images/components/social/instagram.svg";
import snapchat from "../images/components/social/snapchat.svg";
import twitter from "../images/components/social/twitter.svg";

export default function Social(props) {
  return (
    <div className="Social">
      <img src={github} alt="github logo" />
      <img src={instagram} alt="instagram logo" />
      <img src={snapchat} alt="snapchat logo" />
      <img src={twitter} alt="twitter logo" />
    </div>
  );
}
