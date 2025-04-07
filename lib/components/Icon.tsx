import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { faDribbble, faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { SupportedIconNames } from '../types/IconTypes';



// Correcting the interface by omitting 'icon' from FontAwesomeIconProps
export interface IIcon extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: SupportedIconNames | string;
}

const Icon = ({ icon = 'heart', ...rest }: IIcon) => {
  switch (icon) {
    case "heart":
      return <FontAwesomeIcon icon={faHeart} {...rest} />;
    case "link":
      return <FontAwesomeIcon icon={faLink} {...rest} />;
    case "goTo":
      return <FontAwesomeIcon icon={faArrowRight} {...rest} />;
    case "check":
      return <FontAwesomeIcon icon={faCircleCheck} {...rest} />;
    case "mail":
      return <FontAwesomeIcon icon={faEnvelope} {...rest} />;
    case "instagram":
      return <FontAwesomeIcon icon={faInstagram} {...rest} />;
    case "xTwitter":
      return <FontAwesomeIcon icon={faXTwitter} {...rest} />;
    case "dribble":
      return <FontAwesomeIcon icon={faDribbble} {...rest} />;
    case "linkedIn":
      return <FontAwesomeIcon icon={faLinkedin} {...rest} />;
    case "facebook":
      return <FontAwesomeIcon icon={faFacebook} {...rest} />;
    default:
      return icon;
  }
};

export default Icon;
