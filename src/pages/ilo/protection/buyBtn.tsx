import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { openIloDisclaimer } from '@/redux/modal';
import { useAppDispatch } from '@/utils/hooks';
import Btn from '@components/Btn';

interface IAuthedBtn {
  disabled?: boolean;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

function BtnComponent({ onClick, ...props }: IAuthedBtn) {
  const dispatch = useAppDispatch();
  const buyBtn = function (event: React.SyntheticEvent<HTMLButtonElement>) {
    if (onClick) {
      onClick(event);
    }
    window.scrollTo({ left: 0, top: 0 });
    dispatch(openIloDisclaimer(true));
  };
  return (
    <Btn
      theme={'gradient'}
      title={'Buy'}
      className={'ilo-page_btn ilo-page_btn-gradient'}
      onClick={buyBtn}
      {...props}
    />
  );
}

const AuthedUserBtn = withAuthType([UserStatusType.AUTHED])(BtnComponent);

export default AuthedUserBtn;
