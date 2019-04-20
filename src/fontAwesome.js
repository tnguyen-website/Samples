import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faGithubSquare,
  faSkype
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserTie,
  faBriefcase,
  faEnvelopeOpen,
  faBars,
  faHome,
  faAddressCard,
  faThList,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

export const addFont = () => {
  library.add(
    faUserTie,
    faBriefcase,
    faEnvelopeOpen,
    faBars,
    faHome,
    faAddressCard,
    faThList,
    faCodeBranch,
    faLinkedin,
    faGithubSquare,
    faSkype
  );
};
