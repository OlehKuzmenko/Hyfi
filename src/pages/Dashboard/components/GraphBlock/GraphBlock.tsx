import { useState } from 'react';
import {
  StyledDashboardBlock,
  StyledDashboardBlockTitle,
} from '@pages/Dashboard/styled';
import {
  StyledGraphContainer,
  StyledGraphWrapper,
  StyledGraphWrapperTitle,
} from '@pages/Dashboard/components/GraphBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';

export const GraphBlock = () => {
  const [tab, setTab] = useState<string>('Volume');
  const GraphNavList: INavItemList[] = [
    { text: 'Volume', key: 'Volume' },
    { text: 'Liquidity', key: 'Liquidity' },
    { text: 'Price', key: 'Price' },
  ];
  return (
    <StyledDashboardBlock className={'graph-block'}>
      <StyledDashboardBlockTitle>Graph Assets</StyledDashboardBlockTitle>
      <StyledGraphWrapper className={'graph-block__container'}>
        <StyledGraphWrapperTitle>$69.99M</StyledGraphWrapperTitle>
        <Tabs
          theme={'white'}
          navList={GraphNavList}
          onSelect={(eventKey) => {
            console.log('Test: ', eventKey);
            setTab(eventKey);
          }}
        />
        <GraphContainer tab={tab} />
      </StyledGraphWrapper>
    </StyledDashboardBlock>
  );
};

interface IGraphContainerProps {
  tab: string;
}

const GraphContainer = ({ tab }: IGraphContainerProps) => {
  return (
    <StyledGraphContainer>
      {tab === 'Volume' && <div>Volume</div>}
      {tab === 'Liquidity' && <div>Liquidity</div>}
      {tab === 'Price' && <div>Price</div>}
    </StyledGraphContainer>
  );
};
