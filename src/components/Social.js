import github from "../images/components/social/github.svg";
import instagram from "../images/components/social/instagram.svg";
import linkedin from "../images/components/social/linkedin.svg";
import hackerrank from "../images/components/social/hackerrank.svg";
import twitter from "../images/components/social/twitter.svg";

export default function Social(props) {
  return (
    <div className="Social">
      <a href="https://github.com/Etron22">
        <img src={github} alt="github logo" />
      </a>

      <a href="https://www.linkedin.com/in/2243shivam/">
        <img src={linkedin} alt="linkedin logo" />
      </a>

      <a href="https://www.instagram.com/shivamyadav02/">
        <img src={instagram} alt="instagram logo" />
      </a>

      <a href="https://www.hackerrank.com/shivamgreaterno1">
        <img src={hackerrank} alt="hackerrank logo" />
      </a>

      <a href="https://twitter.com/7719shivam">
        <img src={twitter} alt="twitter logo" />
      </a>
    </div>
  );
}
