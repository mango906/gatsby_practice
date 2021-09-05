import styled from '@emotion/styled';
import React from 'react';

const Footer = (): React.ReactElement => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer mango906, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
