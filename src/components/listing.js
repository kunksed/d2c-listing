import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StoreCard from "../components/storecard"

export default () => (
    <StaticQuery
      query={graphql`
      query {
        allAirtable(filter: {table: {eq: "Stores"}}) {
          edges {
            node {
              data {
                Name
                Industry
                Subscription
                Website
                Facebook
                Instagram
                Retail
                HQ
                Comment
                Support
                User
                Delivery
                Value_for_Money
                Quality
                Aggregate_Review
              }
            }
          }
        }
      }      
      `}
      render={data => (
        <ol>
            {data.allAirtable.edges.map(store =>
            <li key={store.node.data.Name}> Hi {store.node.data.Name}</li>
            )
            }
        </ol>
      )}
    />
  )