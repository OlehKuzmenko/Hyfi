import {
  StyledSection,
  StyledListHeader,
  StyledList,
  StyledListElement,
} from './styled';
import Link from '@components/Link';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import { ReactComponent as Badge } from '@icons/question-mark.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from '@components/Tooltip';
import styled from 'styled-components';

export interface IDataContainerProps {
  inTitle?: JSX.Element | string;
  listData?: IDataContainerListData[];
  customTitleBadge?: JSX.Element;
  linksTo?: string;
}

export enum DataContainerListType {
  BADGE = 'badge',
  GENERAL = 'general',
  SHARE = 'share',
}

interface IDataContainerListData {
  title: string | JSX.Element;
  value?: number | string | JSX.Element;
  type: `${DataContainerListType}`;
  badge?: string | number;
  linksTo?: string;
}

export default function DataContainer({
  inTitle,
  listData,
  customTitleBadge,
  linksTo,
  ...props
}: IDataContainerProps) {
  const renderListData = function () {
    return (
      listData?.map(({ title, value, badge, type, linksTo }, index) => {
        return (
          <StyledListElement key={index} className="list-element">
            {
              {
                [DataContainerListType.BADGE]:
                  typeof badge !== 'undefined' ? (
                    <>
                      <div className={'styled-list-element__container'}>
                        <span className="title badge">{title ?? ''}</span>
                        <OverlayTrigger
                          key="top"
                          placement="top"
                          overlay={(props) => (
                            <Tooltip
                              text={badge}
                              id="button-tooltip"
                              {...props}
                            />
                          )}
                        >
                          <Badge />
                        </OverlayTrigger>
                      </div>
                      <span className="value">{value ?? ''}</span>
                    </>
                  ) : null,
                [DataContainerListType.GENERAL]: (
                  <>
                    <span className="title">{title ?? ''}</span>
                    <span className="value">{value ?? ''}</span>
                  </>
                ),
                [DataContainerListType.SHARE]: (
                  <>
                    <span className="title">{title ?? ''}</span>
                    <span className="value">
                      <Link to={linksTo ?? '#'}>
                        <ShareLink />
                      </Link>
                    </span>
                  </>
                ),
              }[type]
            }
          </StyledListElement>
        );
      }) ?? []
    );
  };

  return (
    <StyledSection {...props}>
      {inTitle ? (
        <StyledListHeader className="header ">
          {inTitle ?? ''}
          {typeof customTitleBadge !== 'undefined' ? (
            customTitleBadge
          ) : (
            <Link to={linksTo ?? '#'}>
              <ShareLink />
            </Link>
          )}
        </StyledListHeader>
      ) : null}
      <StyledList>{renderListData()}</StyledList>
    </StyledSection>
  );
}

export const StyledDropdownBtn = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const StyledDropdownBtnText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: var(--theme-dark-blue);
  margin-right: 5px;
  margin-bottom: 0;
`;
