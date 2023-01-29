import { LearnToCode } from "./LearnToCode";
import { PropConstructorPattern } from "./PropConstructorPattern";
import { useParams } from "react-router-dom";

const postMap = {
  "prop-constructor-pattern": PropConstructorPattern,
  "learn-to-code": LearnToCode,
};

const PageNotFound = () => {
  return <></>;
};

export const BlogPost = () => {
  const params = useParams();
  const { title } = params;
  console.log(title);

  return postMap[title] ? postMap[title]() : PageNotFound;
};
