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
                Logo {
                  url
                }
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
            data.allAirtable.edges.map(store =>
            <StoreCard StoreData={store.node.data}/>
            )
      )}
    />
  )