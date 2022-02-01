import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import DataContainer from '@components/DataContainer';
import logo from '@img/logo.png';
import bgrImgBlue from '@img/background.jpg';
import { EColorScheme } from '@redux/css';
import Form from 'react-bootstrap/Form';

export const StyledDataContainer = styled(DataContainer)`
  .header {
    min-height: 78px;
  }
`;

export const StyledIloBlockImg = styled.div`
  border-radius: 0 10px 10px 0;
  width: 100%;
  position: relative;
  background: url(${bgrImgBlue}) no-repeat center/cover;

  &:before {
    content: url(${logo});
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }
  @media screen and ${breakpoints.Device.desktop} {
    display: none;
  }

  @media screen and ${breakpoints.Device.desktop_sm} {
    display: none !important;
  }
`;

export const StyledIloWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledIloBlock = styled.div`
  width: 90%;
  max-width: 1266px;
  display: grid;
  grid-template-columns: 1fr 25%;
  align-items: stretch;
  border-radius: 10px;
  background: var(--theme-light-StyledIloBlock);
  margin: 30px auto;
  @media screen and ${breakpoints.Device.desktop} {
    grid-template-columns: 1fr;
  }

  @media screen and ${breakpoints.Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyledIloContainer = styled.div`
  padding: 59px 30px 63px 60px;

  @media screen and ${breakpoints.Device.desktop} {
    width: 100%;
  }

  @media screen and ${breakpoints.Device.tablet} {
    width: 100% !important;
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 59px 10px 63px 20px;
  }
`;

export const IloHead = () => {
  return (
    <StyledIloHead>
      <StyledIloHeadTitle>HyFi</StyledIloHeadTitle>
      <StyledIloHeadText>
        nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam
        tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit
        massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae
        et leo duis ut diam quam nulla porttitor massa id neque aliquam
        vestibulum morbi blan.
      </StyledIloHeadText>
    </StyledIloHead>
  );
};

const StyledIloHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--theme-light-StyledIloHead);
`;

const StyledIloHeadTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: var(--theme-light-StyledIloHeadTitle);
`;

const StyledIloHeadText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--theme-light-StyledIloHeadText);
`;

export const StyledIloContainerBlocks = styled.div`
  width: 100%;
  display: grid;
  gap: 5px 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: 30px;
`;

export const StyledIloContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-bottom: 1px solid var(--theme-light-StyledIloContainerInfo);

  .info {
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--theme-light-StyledIloContainerInfo_info);
    opacity: 1;
    margin: 0;
    padding-bottom: 9.5px;
    span {
      font-weight: bold;
      color: var(--theme-dark-blue);
    }
  }
`;
export const StyledListHeader = styled.div`
  display: grid;
  gap: 5px 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  > h3 {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--theme-light-StyledIloHead);
    margin-bottom: 0;
    padding: 13.5px 0;
    align-items: flex-end;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0;
  }
`;

export const StyledIloContainerInptBtn = styled(Form)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 10px;
  .ilo-page_btn {
    &-gradient {
      width: max-content;
      align-self: flex-start;
      @media screen and ${breakpoints.Device.tablet} {
        width: auto;
      }
    }
  }
  @media screen and ${breakpoints.Device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media screen and ${breakpoints.Device.desktop} {
    width: 100%;
  }
`;

export const StyledIloBlockTitle = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: var(--theme-light-StyledIloBlockTitle);
  margin-bottom: 0;
`;

export const StyledIloBlockBlueText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: var(--theme-dark-blue);
`;

export const StyledIloWrapperComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledIloWrapper} {
      ${StyledIloBlock} {
        --theme-light-StyledIloBlock: var(--theme-light-white);
      }

      ${StyledIloContainerInfo} {
        --theme-light-StyledIloContainerInfo: var(--theme-light-grey-2);
        --theme-light-StyledIloContainerInfo_info: var(--theme-light-black-2);
      }

      ${StyledIloHeadText} {
        --theme-light-StyledIloHeadText: var(--theme-light-black-2);
      }

      ${StyledIloHeadTitle} {
        --theme-light-StyledIloHeadTitle: var(--theme-light-black-2);
      }

      ${StyledIloHead}, ${StyledListHeader} {
        --theme-light-StyledIloHead: var(--theme-light-grey-2);
      }

      ${StyledIloBlockTitle} {
        --theme-light-StyledIloBlockTitle: var(--theme-light-black-2);
      }
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledIloWrapper} {
      ${StyledIloBlock} {
        --theme-light-StyledIloBlock: var(--theme-light-black-2);
      }

      ${StyledIloContainerInfo} {
        --theme-light-StyledIloContainerInfo: var(--theme-light-grey-2);
        --theme-light-StyledIloContainerInfo_info: var(--theme-light-grey-4);
      }

      ${StyledIloHeadText} {
        --theme-light-StyledIloHeadText: var(--theme-light-grey-4);
      }

      ${StyledIloHeadTitle} {
        --theme-light-StyledIloHeadTitle: var(--theme-light-grey-4);
      }

      ${StyledIloHead}, ${StyledListHeader} {
        --theme-light-StyledIloHead: var(--theme-light-grey-2);
      }

      ${StyledIloBlockTitle} {
        --theme-light-StyledIloBlockTitle: var(--theme-light-grey-4);
      }
    }
  }
`;
