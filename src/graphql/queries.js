import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      ownerName
      name
      createdAt
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      userHasReviewed
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query Repositories(
    $first: Int
    $after: String
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      totalCount
      edges {
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
          userHasReviewed
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
