import styled, { css } from 'styled-components';

/**
 * TODO (but not relevant for now)
 * - Auto-stretch columns to fit when no width is given
 */

interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}
export const Col = styled.div<ColProps>`
  ${({ theme, xs, sm, md, lg }) => css`
    grid-column-end: span ${xs || 12};

    ${sm &&
      theme.media.tablet`
      grid-column-end: span ${sm};
    `}

    ${md &&
      theme.media.laptop`
      grid-column-end: span ${md};
    `}

    ${lg &&
      theme.media.desktop`
      grid-column-end: span ${lg};
    `}
  `}
`;

// Grid
interface GridProps {
  cols?: number;
  gap?: string;
  colGap?: string;
  rowGap?: string;
}
export default styled.div<GridProps>`
  ${({ cols, gap, colGap, rowGap }) => css`
    display: grid;
    grid-template-columns: repeat(${cols || 12}, 1fr);

    grid-gap: ${gap || '20px'};

    ${colGap &&
      css`
        grid-column-gap: ${colGap};
      `};

    ${rowGap &&
      css`
        grid-row-gap: ${rowGap};
      `};
  `}
`;
