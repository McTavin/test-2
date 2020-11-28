import React from "react"
import { graphql } from 'gatsby';

export const query = graphql`
 {
  allAirtable {
    nodes {
      recordId
        data {
          title
          slug
          date(formatString: "")
          author
          PostMarkdown
        }
    }
  }
 }
`;

export default ({ data }) => (
  <div>
    <h1>Airtable Test</h1>
    <ul>
      {data.allAirtable.nodes.map(node => (
        <li key={node.recordId}>
          {node.data.title}
        </li>
        ))}
    </ul>
  </div>
)
