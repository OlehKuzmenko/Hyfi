import {
  StyledDashboardBlock,
  StyledDashboardBlockTitle,
} from '@pages/Dashboard/styled';
import { StyledBtn, StyledDetailsHead } from './styled';
import {
  StyledImage,
  StyledLogoContainer,
} from '@components/CompanyLogo/styled';
import DataContainer, { IDataContainerProps } from '@/components/DataContainer';

interface IDetailsBlockProps extends IDataContainerProps {
  img?: string;
}

export const DetailsBlock = ({
  inTitle,
  img,
  listData,
}: IDetailsBlockProps) => {
  return (
    <StyledDashboardBlock className="details-block">
      <DataContainer
        inTitle={
          <StyledDetailsHead>
            <StyledDashboardBlockTitle>{inTitle}</StyledDashboardBlockTitle>
            <StyledLogoContainer>
              <StyledImage
                src={img}
                data-hasimage={!!img?.length ?? false}
                rounded
                fluid
              />
            </StyledLogoContainer>
          </StyledDetailsHead>
        }
        customTitleBadge={<span></span>}
        listData={listData}
      />
      <StyledBtn theme={'gradient'}>Participate</StyledBtn>
    </StyledDashboardBlock>
  );
};
