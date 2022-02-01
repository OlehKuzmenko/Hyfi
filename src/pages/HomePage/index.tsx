import {
  Title,
  Text,
  HomeWrapper,
  InfoContainer,
  HomeWrappperContainer,
  StyledBtn,
} from './styled';
import { gradientBtnTypes } from '@components/Btn';
import { useAppDispatch } from '@utils/hooks';
import { openConnectWallet } from '@redux/modal';
import ImageBadge from './components/ImageBadge';

interface IThemeBadge {
  text: string;
  pathname?: string;
}

const badgesData: IThemeBadge[] = [
  { text: 'ILO NFTs Available Now!', pathname: 'initialofferings' },
  { text: 'Staking (Coming Soon)' },
  { text: 'Trading (Coming Soon)' },
  { text: 'Farming (Coming Soon)' },
];

const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <HomeWrappperContainer>
      <HomeWrapper>
        <Title>
          Earn Income, Raise Capital, Buy & Sell NFT Licenses. More Soon!
        </Title>
        <Text>
          The HyFi economy uses Business Innovation, Blockchain & Digital
          Currency to accelerate renewable energy, environment, agriculture and
          other important markets and causes. Help us create a better world by
          joining the HyFi Platform!
        </Text>
        <StyledBtn
          theme={gradientBtnTypes.gradient}
          title="Connect Wallet"
          onClick={() => {
            dispatch(openConnectWallet(true));
          }}
        />
      </HomeWrapper>
      <InfoContainer>
        {badgesData.map(({ text, pathname }) => (
          <ImageBadge text={text ?? ''} pathname={pathname ?? ''} />
        ))}
      </InfoContainer>
    </HomeWrappperContainer>
  );
};
export default HomePage;
