import styled from 'styled-components';
import Btn from '@components/Btn';

export const StyledDetailsHead = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: none;
  margin-bottom: 12px;

  & img {
    max-width: 50px;
    border-radius: 50% !important;
  }
`;

export const StyledBtn = styled(Btn)`
  width: fit-content;
`;
