import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import ArticlePage from "./page";

type Story = StoryObj<typeof ArticlePage>;

export default {
  component: ArticlePage,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: [["slug", "slug"]],
      },
    },
  },
} as Meta<typeof ArticlePage>;

export const Page: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.realworld.io/api/articles/slug", () => {
          return HttpResponse.json({
            article: {
              slug: "slug",
              title: "Title",
              description: "Description",
              body: "Body",
              tagList: ["tag"],
              createdAt: "2024-01-04T00:52:58.601Z",
              updatedAt: "2024-01-04T00:52:58.601Z",
              favorited: false,
              favoritesCount: 637,
              author: {
                username: "username",
                bio: "Bio",
                image: "https://api.realworld.io/images/demo-avatar.png",
                following: false,
              },
            },
          });
        }),
      ],
    },
  },
};
