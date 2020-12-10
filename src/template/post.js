import React from 'react'
import { graphql } from 'gatsby'
import markdown from 'remark-parse';
import unified from 'unified';

export default ({ data }) => {

    return (
    <div>
        <h1>{data.airtable.data.title}</h1>
        <img src={data.airtable.data.image[0].url} alt={data.airtable.data.title} width="100%" />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ 
            __html: unified() .use(markdown) .processSync(data.airtable.data.PostMarkdown) }}
        >
      </div>
    </div>
    )
}

export const query = graphql`
query GetRecord($slug: String!){
    airtable(data: { slug: {eq: $slug} }) {
        id
        table
        recordId
        data {
            title
            PostMarkdown
            image {
                url
            }
        }
    }
}`