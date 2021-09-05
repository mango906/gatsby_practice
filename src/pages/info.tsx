import React from 'react';
import { graphql } from 'gatsby';
import Text from 'components/Text';
import { Link } from 'gatsby';

interface InfoPagePropss {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage = ({ data }: InfoPagePropss): React.ReactElement => {
  const { title, description, author } = data.site.siteMetadata;

  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <Link to="/">To Main</Link>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
