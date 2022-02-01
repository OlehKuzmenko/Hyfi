import React, { useState } from 'react';
import {
  StyledWalletContainer,
  StyledWalletIcon,
  StyledWalletIconContainer,
  StyledWalletData,
  StyledArrow,
  StyledMenuBtn,
  StyledMenu,
} from './styled';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAppSelector } from '@/utils/hooks';
import { authWalletAddress } from '@/redux/auth';

interface IForwardedRef {
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
}

const CustomToggle = React.forwardRef<HTMLDivElement>(
  ({ children, onClick, ...props }: IForwardedRef, ref) => {
    return (
      <StyledWalletContainer
        ref={ref}
        onClick={(event) => {
          event.preventDefault();
          if (typeof onClick === 'function') onClick(event);
        }}
        {...props}
      >
        <StyledWalletIconContainer>
          <StyledWalletIcon />
        </StyledWalletIconContainer>
        <StyledWalletData>{children}</StyledWalletData>
        <StyledArrow className="dropdown-arrow" />
      </StyledWalletContainer>
    );
  }
);

export interface IWalletDropdownBtn {
  children?: React.ReactNode;
  key?: string | number;
  href?: string;
  text?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  toDo?: () => void;
}

export interface IWalletProps {
  walletTabs: IWalletDropdownBtn[];
  [key: string]: any;
}

export default function Wallet({
  walletTabs,
  changeOpenState = () => {},
}: IWalletProps) {
  const [active, setActive] = useState('');
  const walletAddress = useAppSelector(authWalletAddress);

  const onSelectFunction = function (eventKey: unknown) {
    const newKey = eventKey as string;
    setActive(newKey);
  };

  //This code part give functionality to control show state
  const changeShowValue = function (state: boolean) {
    changeOpenState(state);
  };

  return (
    <Dropdown
      onToggle={changeShowValue}
      autoClose="outside"
      onSelect={onSelectFunction}
    >
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-custom-components dropdown-autoclose-outside"
      >
        {walletAddress}
      </Dropdown.Toggle>
      <Dropdown.Menu renderOnMount align="end" as={StyledMenu}>
        {walletTabs.map(
          ({ children, key, href, text, disabled, icon, toDo }) => {
            return (
              <div key={key}>
                {href && (
                  <Dropdown.Item
                    as={StyledMenuBtn}
                    active={active === href}
                    href={href}
                    disabled={disabled ?? false}
                    onClick={toDo}
                  >
                    <span>{text ?? children ?? ''}</span>
                    {icon && React.cloneElement(icon)}
                  </Dropdown.Item>
                )}
                {key && (
                  <Dropdown.Item
                    as={StyledMenuBtn}
                    active={active === key}
                    eventKey={key}
                    disabled={disabled ?? false}
                    onClick={toDo}
                  >
                    <span>{text ?? children ?? ''}</span>
                    {icon && React.cloneElement(icon)}
                  </Dropdown.Item>
                )}
              </div>
            );
          }
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
