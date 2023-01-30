import React from "react";
import { useRouter } from "next/router";
import { LearnToCode } from "./LearnToCode";
import { PropConstructorPattern } from "./PropConstructorPattern";
import { GlobalNav } from "../../src/Components/GlobalNav/GlobalNav";

const postMap = {
  "prop-constructor-pattern": PropConstructorPattern,
  "learn-to-code": LearnToCode,
};

const PageNotFound = () => {
  return <></>;
};

export const BlogPost = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <GlobalNav activeLink={"blog"} />
      {postMap[title] ? postMap[title]() : PageNotFound}
    </>
  );
};

export default BlogPost;
