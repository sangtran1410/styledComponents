import styled, { css } from 'styled-components';

import circleExclaimedIconSrc from './images/icon_pop_alim.png';
import triangleExclaimedIconSrc from './images/icon_pop_error.png';
import questionIconSrc from './images/icon_pop_confirm.png';
import popupCloseIconSrc from './images/icon_pop_close.png';
import searchIconSrc from './images/icon_search.png';
import selectArrowDisabledIconSrc from './images/icon_selectArrow_disabled.png';
import selectArrowIconSrc from './images/icon_selectArrow.png';
import helpIconSrc from './images/icon_help.png';
import loginId from './images/icon_login_id.png';
import loginPassword from './images/icon_login_pass.png';
import plusIconSrc from './images/icon_addRow.png';
import minusIconSrc from './images/icon_removeRow.png';

import stardardPopupCloseIconSrc from './images/icon_window_close.png';

import whiteCloseIconSrc from './images/icon_help_close.png';
import refreshSrc from './images/refresh.png';

const iconStyles = (dimension, imageSrc) => css`
  width: ${dimension}rem;
  height: ${dimension}rem;
  background-repeat: no-repeat;
  background-image: url(${imageSrc});
`;

export const CircleExclaimedIcon = styled.div`
  ${iconStyles(4.5, circleExclaimedIconSrc)}
`;

export const TriangleExclaimedIcon = styled.div`
  ${iconStyles(4.5, triangleExclaimedIconSrc)}
`;

export const QuestionIcon = styled.div`
  ${iconStyles(4.5, questionIconSrc)}
`;

export const PopUpCloseIcon = styled.div`
  ${iconStyles(3.5, popupCloseIconSrc)}
  background-position: 50%;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const StardardPopUpCloseIcon = styled.div`
  ${iconStyles(4.8, stardardPopupCloseIconSrc)}
  background-position: 50%;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: ${props => (props.disabled ? 0.7 : 1)};
  }
`;

export const SearchIcon = styled.div`
  ${iconStyles(4.5, searchIconSrc)}
`;

export const SelectArrowIcon = styled.div`
  background: ${({ theme }) =>
    css`
  ${theme.COLORS.WHITE}
  url(${selectArrowIconSrc}) no-repeat calc(100% - 1rem) 50%;
  `};
  width: 2.2rem;
  height: 1.2rem;
`;

export const SelectArrowDisableIcon = styled.div`
  background: ${({ theme }) =>
    css`
  ${theme.COLORS.GRAY_17} url(${selectArrowDisabledIconSrc}) no-repeat
    calc(100% - 1rem) 50%;
  `};
  width: 2.2rem;
  height: 1.2rem;
`;

export const HelpIcon = styled.div`
  ${iconStyles(4.5, helpIconSrc)}
`;

export const LoginIdIcon = styled.div`
  ${iconStyles(2, loginId)};
  background-size: contain;
`;

export const LoginPasswordIcon = styled.div`
  ${iconStyles(2, loginPassword)};
  height: 2.5rem;
  margin-bottom: -5px;
  background-size: contain;
`;

export const WhiteCloseIcon = styled.div`
  ${iconStyles(2, whiteCloseIconSrc)};
  background-position: 50%;
  background-repeat: no-repeat;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const PlusIcon = styled.div`
  ${iconStyles(4.5, plusIconSrc)}
`;

export const MinusIcon = styled.div`
  ${iconStyles(4.5, minusIconSrc)}
`;

export const RefreshIcon = styled.div`
  ${iconStyles(4.5, refreshSrc)}
`;
