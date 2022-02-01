import {
  StyledToggleContainer,
  StyledSun,
  StyledThemeToggleCircle,
  StyledThemeToggle,
  StyledMoon,
} from './styled';
import { useTheme } from '@/utils/theme.style';

const ToggleContainer = () => {
  const [theme, themeToggle] = useTheme();

  return (
    <StyledToggleContainer onClick={themeToggle}>
      <StyledMoon className={theme} />
      <StyledSun className={theme} />
      <StyledThemeToggle>
        <StyledThemeToggleCircle className={theme} />
      </StyledThemeToggle>
    </StyledToggleContainer>
  );
};

export default ToggleContainer;
