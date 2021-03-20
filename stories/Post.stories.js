import React from "react";

import Post from "../src/components/Post/Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => (
  <Post post="This is one of many posts" date="20/03/21" />
);

export const Default = Template.bind({});
