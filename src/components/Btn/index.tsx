import { gradientBtnTypes, BtnStyled } from './styled';

interface IBtnProps {
  theme: `${gradientBtnTypes}`;
  title?: string;
  className?: string;
  [key: string]: unknown;
}
const Btn = ({ theme, title = '', className = '', ...props }: IBtnProps) => {
  return (
    <BtnStyled className={`${theme} ${className}`} {...props}>
      {props.children ?? title}
    </BtnStyled>
  );
};
export default Btn;
export { gradientBtnTypes, BtnStyled } from './styled';
