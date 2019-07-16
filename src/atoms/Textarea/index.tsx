import styled, { css } from '../../lib/styledComponents';

import inputBaseStyle, { InputProps } from '../Textfield/baseStyle';

export default styled.textarea<InputProps>`
  ${inputBaseStyle};

  ${({ theme }) => css`
    height: auto;
    min-height: ${theme.dimensions.inputHeight};
    resize: none;
    padding: 16px;
  `}
`;