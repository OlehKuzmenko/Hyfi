import styled, { css } from 'styled-components';
import PageHead from '@/components/PageHead';
import { EColorScheme } from '@redux/css';

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledPageHeader = styled(PageHead)`
  background: var(--theme-StyledPageHeader);
  justify-content: flex-end;
  padding-bottom: 0;
`;

export const StyledPageContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  display: grid;
  gap: 30px;
  margin: 30px auto;
`;

export const HowToTakePartHeaderComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledPageHeader} {
      --theme-StyledPageHeader: var(--theme-light-grey-4);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledPageHeader} {
      --theme-StyledPageHeader: var(--theme-light-grey-2);
    }
  }
`;
