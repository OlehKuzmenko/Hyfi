import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';
import { LinksEnum } from '@/interfaces/LinksEnum';
export const HeadBlock = () => {
  const navList: INavItemList[] = [
    {
      text: 'Overview',
      href: `${LinksEnum.DASHBOARD}/overview`,
    },
    {
      text: 'License',
      href: `${LinksEnum.DASHBOARD}/license`,
    },
    {
      text: 'Transactions',
      href: `${LinksEnum.DASHBOARD}/transactions`,
    },
  ];
  return (
    <StyledDashboardBlock className={'head-block'}>
      <StyledHeadBlockTitle>Dashboard</StyledHeadBlockTitle>
      <Tabs navList={navList} />
    </StyledDashboardBlock>
  );
};
