import { useEffect } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import {
  changeColorScheme,
  selectCurrentColorMode,
  EColorScheme,
} from '@/redux/css';
import { StyledFooterTheme } from '@components/Footer/styled';
import { BtnComponentTheme } from '@/components/Btn/styled';
import { StyledThemeContainer } from '@/components/Wallet/styled';
import { NavbarComponentTheme } from '@/components/Navbar/styled';
import { SidebarComponentTheme } from '@/components/Sidebar/styled';
import { StyledIloWrapperComponentTheme } from '@pages/ilo/styled';
import { HowToTakePartComponentTheme } from '@pages/HowToTakePart/components/Parts/styled';
import { HowToTakePartHeaderComponentTheme } from '@pages/HowToTakePart/styled';
import { HomePageComponentTheme } from '@pages/HomePage/styled';
import { HomePageImgBadgeComponentTheme } from '@pages/HomePage/components/ImageBadge/styled';
import { DataContainerComponentTheme } from '@components/DataContainer/styled';
import { CompanyLogoComponentTheme } from '@components/CompanyLogo/styled';
import { ReportFormComponentTheme } from '@pages/Report/styled';
import { AccountDetailsComponentTheme } from '@components/AccountDetails/styled';
import { DashboardComponentTheme } from '@pages/Dashboard/styled';
import { AccountNameDtoComponentTheme } from '@pages/Dashboard/components/AccountName/styled';
import { StyledNavTheme } from '@components/Tabs/styled';
import { ImportComponentTheme } from '@components/Input/styled';
import { TooltipComponentTheme } from '@components/Tooltip/styled';
import { DashboardHeadBlockComponentTheme } from '@pages/Dashboard/components/HeadBlock/styled';
import { DashboardGraphBlockComponentTheme } from '@pages/Dashboard/components/GraphBlock/styled';
import { IloWrapperHeadTitleComponentTheme } from '@components/PageHead/styled';
import { DisclaimerModalComponentTheme } from '@components/DisclaimerModal/styled';
import { ModalComponentTheme } from '@styles/modal.styled';
const themeGrouped = css`
  ${BtnComponentTheme}
  ${StyledThemeContainer}
  ${NavbarComponentTheme}
  ${SidebarComponentTheme}
  ${BtnComponentTheme}
  ${StyledIloWrapperComponentTheme}
  ${HowToTakePartComponentTheme}
  ${HowToTakePartHeaderComponentTheme}
  ${HomePageComponentTheme}
  ${HomePageImgBadgeComponentTheme}
  ${DataContainerComponentTheme}
  ${CompanyLogoComponentTheme}
  ${ReportFormComponentTheme}
  ${AccountDetailsComponentTheme}
  ${DashboardComponentTheme}
  ${AccountNameDtoComponentTheme}
  ${StyledFooterTheme}
  ${StyledNavTheme}
  ${ImportComponentTheme}
  ${TooltipComponentTheme}
  ${DashboardHeadBlockComponentTheme}
  ${DashboardGraphBlockComponentTheme}
  ${IloWrapperHeadTitleComponentTheme}
  ${DisclaimerModalComponentTheme}
  ${ModalComponentTheme}
`;

/**
 * This function return value from object depends on current selected theme. If our theme not match - return undefined
 * @param {object} props - The title of the book.
 * @returns {(data|undefined)} - Data from object
 */
export function themeReturnFunction<T extends Pick<T, `${EColorScheme}`>>(
  props: T
) {
  const test = document.body.getAttribute('data-theme') as `${EColorScheme}`;
  if (
    (Object.values(EColorScheme) as `${EColorScheme}`[]).includes(
      test as `${EColorScheme}`
    )
  ) {
    return props[test];
  }
  return undefined;
}

/**
 * This HOC return JSX elemets depends on current theme mode
 */
export const withThemeType =
  (themeType: `${EColorScheme}`[]) =>
  <P,>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const currentTheme = useAppSelector(selectCurrentColorMode);
    if (themeType.includes(currentTheme)) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };

const mql = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Use this hook if you whant to change color scheme of site manualy
 */
export function useTheme(): [`${EColorScheme}`, () => void] {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectCurrentColorMode);
  const themeToggle = () => {
    const newTheme =
      theme === EColorScheme.DAY ? EColorScheme.NIGHT : EColorScheme.DAY;
    dispatch(changeColorScheme(newTheme));
  };
  const chengeInEventListener = function (event: MediaQueryListEvent) {
    const newTheme = event.matches ? EColorScheme.NIGHT : EColorScheme.DAY;
    dispatch(changeColorScheme(newTheme));
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    mql.addEventListener('change', chengeInEventListener);
    return () => {
      mql.removeEventListener('change', chengeInEventListener);
    };
  }, []);
  return [theme, themeToggle];
}

const GlobalStyle = createGlobalStyle`
body{
  --theme-light-blue: #6984ff;
  --theme-dark-grey: #6984ff00;
  --theme-light-green: #51c58e;
  --theme-light-red: #f5044e;
  --theme-light-grey-1: #d1d9e1;
  --theme-light-white: #ffffff;
  --theme-light-grey-2: #c9c9c9;
  --theme-dark-blue: #4364f7;
  --theme-dark-blue2:#224AFF;
  --theme-light-black-1: #0e1014;
  --theme-light-black-2: #191d24;
  --theme-light-grey-3: #d4d4d4;
  --theme-grey: #0D101426;
  --theme-light-grey-4: #f1f3f5;
  --theme-light-grey-5: #00000029;
  --theme-green: #3A8E61;
  &[data-theme="${EColorScheme.DAY}"] {
  }
  &[data-theme="${EColorScheme.NIGHT}"] {
    --theme-light-blue: #6984ff;
    --theme-light-green: #51c58e;
    --theme-light-red: #f5044e;
    --theme-light-grey-1: #d1d9e1;
    --theme-light-white: #191d24;
    --theme-light-grey-2: #0e1014;
    --theme-dark-blue: #4364f7;
    --theme-dark-blue-80: #4364f780;
    --theme-dark-blue2:#224AFF;
    --theme-light-black-1: #0e1014;
    --theme-light-black-2: #191d24;
    --theme-light-grey-3: #d4d4d4;
    --theme-light-grey-4: #c9c9c9;
    --theme-black: #0D1014;
  }
  ${themeGrouped}
 }
`;

export default GlobalStyle;
