import React from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps): React.ReactElement => {
  return <div>{text}</div>;
};

export default Text;
