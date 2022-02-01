import React, { SyntheticEvent, useState } from 'react';
import {
  StyledNav,
  StyledNavItem,
  StyledLink,
  StyledNavLink,
  TabsTypes,
} from './styled';

export interface INavItemList {
  children?: React.ReactNode;
  key?: string | number;
  href?: string;
  text?: string;
  disabled?: boolean;
  isLinkActive?: () => boolean;
}

export interface ITabsProps {
  activeKey?: string | number;
  onSelect?: (eventKey: string, event: SyntheticEvent) => void;
  navList: INavItemList[];
  theme?: `${TabsTypes}`;
}

export default function Tabs({
  activeKey = 1,
  theme,
  navList = [],
  ...props
}: ITabsProps) {
  const [selected, setSelected] = useState(
    navList[0].key ?? navList[0].href ?? ''
  );
  if (navList.length === 0) {
    return null;
  }

  return (
    <StyledNav
      fill
      justify
      variant="pills"
      activeKey={selected}
      defaultActiveKey={navList[0].key ?? navList[0].href ?? ''}
      unmountOnExit={false}
      mountOnEnter={false}
      onSelect={(
        eventKey: string,
        event: React.SyntheticEvent<HTMLSelectElement>
      ) => {
        setSelected(eventKey);
        props?.onSelect?.call(eventKey, eventKey, event);
      }}
    >
      {navList.map(
        ({ children, key, href, text, disabled, isLinkActive }, index) => {
          return (
            <StyledNavItem key={index}>
              {key && (
                <StyledNavLink
                  className={`${theme}`}
                  active={selected === key}
                  eventKey={key}
                  disabled={disabled ?? false}
                >
                  {text ?? children ?? ''}
                </StyledNavLink>
              )}
              {href && (
                <StyledLink
                  activeClassName="active"
                  className={`nav-link ${theme}`}
                  data-disabled={disabled ?? false}
                  to={disabled ? '#' : href}
                >
                  {text ?? children ?? ''}
                </StyledLink>
              )}
            </StyledNavItem>
          );
        }
      )}
    </StyledNav>
  );
}
