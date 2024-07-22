/* eslint-disable no-constant-condition */
import styled, { css } from "styled-components";

const test = css`
  text-align: center;
  ${10 > 4 && "background-color:yellow"}
`;

const Heading = styled.h1`
  font-size: ${10 > 4 ? "30px" : "5px"};

  font-weight: 600;

  ${test};
`;

export default Heading;
