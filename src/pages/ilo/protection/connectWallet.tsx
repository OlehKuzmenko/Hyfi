import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { openConnectWallet } from '@/redux/modal';
import { useAppDispatch } from '@/utils/hooks';
import Btn from '@components/Btn';

interface IAuthedBtn {
  disabled?: boolean;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

function ConnectWallet({ onClick, ...props }: IAuthedBtn) {
  const dispatch = useAppDispatch();
  const connectWallet = function (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) {
    if (onClick) {
      onClick(event);
    }
    window.scrollTo({ left: 0, top: 0 });
    dispatch(openConnectWallet(true));
  };
  return (
    <Btn
      theme={'gradient'}
      title={'Connect wallet'}
      className={'ilo-page_btn ilo-page_btn-gradient'}
      onClick={connectWallet}
      {...props}
    />
  );
}

const AuthedConnectWallet = withAuthType([UserStatusType.VISITOR])(
  ConnectWallet
);

export default AuthedConnectWallet;
