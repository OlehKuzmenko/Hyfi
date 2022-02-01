import { TooltipProps } from 'react-bootstrap/Tooltip';
import { StyledTooltip } from './styled';
import { forwardRef } from 'react';
interface ITooltip extends TooltipProps {
  text: string | number;
}
const Tooltip = forwardRef(({ text, ...props }: ITooltip, ref) => (
  <StyledTooltip ref={ref} {...props}>
    {text ?? ''}
  </StyledTooltip>
));
export default Tooltip;
