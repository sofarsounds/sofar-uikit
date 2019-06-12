import React from 'react';
import styled from 'styled-components';

interface IProps {
  circle?: boolean;
  cable?: boolean;
  invert?: boolean;
}

const LogoImg = styled.img`
  width: 100%;
  margin: 0;
`;

const generateFileName = (circle: boolean, cable: boolean, invert: boolean) => {
  let kind = 'logo';
  if (circle) {
    kind = 'circle';
  }
  if (cable) {
    kind = 'cable';
  }

  const colour = invert ? 'white' : 'black';

  return `sofar-${kind}-${colour}.svg`;
};

const Logo: React.SFC<IProps> = ({
  circle = false,
  cable = false,
  invert = false
}) => (
  <LogoImg
    alt="Sofar Logo"
    src={require(`../assets/${generateFileName(circle, cable, invert)}`)}
  />
);

export default Logo;
