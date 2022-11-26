import { render } from "@testing-library/react-native";
import { NativeRouter } from "react-router-native";
import { RepositoryListContainer } from "./RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <NativeRouter>
          <RepositoryListContainer repositories={repositories} />
        </NativeRouter>
      );

      const repositoryItems = getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const contentsFirst = [
        "jaredpalmer/formik",
        "Build forms in React, without the tears",
        "TypeScript",
        "1.6k",
        "21.9k",
        "88",
        "3",
      ];

      contentsFirst.forEach((content) => {
        expect(firstRepositoryItem).toHaveTextContent(content);
      });

      const contentsSecond = [
        "async-library/react-async",
        "Flexible promise-based React data loader",
        "JavaScript",
        "69",
        "1.8k",
        "72",
        "3",
      ];

      contentsSecond.forEach((content) => {
        expect(secondRepositoryItem).toHaveTextContent(content);
      });
    });
  });
});
