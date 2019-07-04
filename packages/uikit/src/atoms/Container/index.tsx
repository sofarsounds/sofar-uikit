import styled, { css } from 'styled-components';

// TODO do we need different sizes per container?
// i.e. "small" or "large" container in addition to the default
// max-width?
interface ContainerProps {
  size?: string;
}

export default styled.div<ContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.ruler[4]}px;

    ${theme.media.sm`
      max-width: 540px;
    `}

    ${theme.media.md`
      max-width: 720px;
    `}

    ${theme.media.lg`
      max-width:960px;
    `}

    ${theme.media.xl`
      max-width: 1140px;
    `}
  `}
`;
