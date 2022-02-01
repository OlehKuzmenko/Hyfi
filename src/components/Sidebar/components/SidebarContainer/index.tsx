import {
  StyledNetworkLink,
  StyledNetworksContainer,
  StyledSidebarContainer,
} from './styled';
import ToggleContainer from './ToogleContainer';
import { ReactComponent as Facebook } from './icons/facebook_logo.svg';
import { ReactComponent as Twitter } from './icons/twitter_logo.svg';
import { ReactComponent as Linkedin } from './icons/linkedin_logo.svg';

const SidebarContainer = () => {
  return (
    <StyledSidebarContainer className="sidebar__container">
      <StyledNetworksContainer>
        <StyledNetworkLink>
          <Facebook />
        </StyledNetworkLink>
        <StyledNetworkLink>
          <Twitter />
        </StyledNetworkLink>
        <StyledNetworkLink>
          <Linkedin />
        </StyledNetworkLink>
      </StyledNetworksContainer>
      <ToggleContainer />
    </StyledSidebarContainer>
  );
};

export default SidebarContainer;
