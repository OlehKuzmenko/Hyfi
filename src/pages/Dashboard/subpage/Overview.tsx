import { CompanyLogoData } from '@/components/CompanyLogo/mocked';
import { DataContainerData } from '@/components/DataContainer/mocked';
import AccountName from '../components/AccountName';
import { accountNameData } from '../components/AccountName/mockedData';
import { DetailsBlock } from '../components/DetailsBlock/DetailsBlock';
import { GraphBlock } from '../components/GraphBlock/GraphBlock';
import { DashboardLicenseBlock } from '../components/LicenseBlock/LicenseBlock';
import { TransactionsBlock } from '../components/TransactionsBlock/TransactionsBlock';

export default function Overview() {
  return (
    <>
      <DashboardLicenseBlock />
      <TransactionsBlock />
      <AccountName avaliableAsset={accountNameData} />
      <DetailsBlock
        img={CompanyLogoData[0].img}
        inTitle={'HyFi'}
        listData={[
          DataContainerData[5],
          DataContainerData[2],
          DataContainerData[6],
          DataContainerData[7],
          DataContainerData[1],
        ]}
      />
      <GraphBlock />
    </>
  );
}
