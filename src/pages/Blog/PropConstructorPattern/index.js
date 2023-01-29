import React from "react";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

import { Container, Typography } from "@mui/material";
import { SEO } from "../../../Components/SEO/SEO";

import "../../../prismer.css";
import "../../../prism.css";

const pageTitle = "Prop Constructor Pattern";
const description =
  "A simple way to write cleaner, more flexible tests for React.";

const getCalloutEmoji = (variant) => {
  switch (variant) {
    case "warn":
      return "⚠️ ";
    case "error":
      return "❗️ ";
    default:
      return "💡 ";
  }
};

export const CalloutBlock = ({ variant = "info", contents = null }) => {
  const emoji = getCalloutEmoji(variant);

  return (
    <div className={`callout ${variant}`}>
      {emoji} {contents}
    </div>
  );
};

export const FormattedCodeBlock = ({ language, templateString = "" }) => {
  const firstNonSpaceIndex = templateString.search(/\S|$/) - 1;
  const spacesToEliminate = firstNonSpaceIndex - 4;

  const trimmedTemplateString = templateString
    .split("\n")
    .map((str) => str.substring(spacesToEliminate))
    .join("\n");

  return (
    <pre>
      <code
        data-prismjs-copy="📋 Copy to Clipboard"
        className={`language-${language}`}
      >
        {trimmedTemplateString}
      </code>
    </pre>
  );
};

export const PropConstructorPattern = () => {
  return (
    <div className="page-container">
      <SEO pageTitle={pageTitle} description={description} />

      <Container maxWidth="lg" className="content-container">
        <Typography
          variant="semiHuge"
          sx={{ color: "primary.main" }}
          component="h1"
        >
          The Prop Constructor Pattern
        </Typography>

        <Typography variant="subHeader" component="h2">
          A simple way to write cleaner, more flexible React tests.
        </Typography>

        <Typography variant="body1" component="p">
          Imagine that you've built a simple <code>Button</code> component, like
          this:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
              export const Button = ({ label, onClick, variant }) => {
                return (
                  <button
                    data-testid="button"
                    className={\`button-\${variant}\`}
                    onClick={onClick}
                  >
                    {label}
                  </button>
                );
              };
            `}
        />

        <Typography variant="body1" component="p">
          This <code>Button</code> component is pretty simple. It should render
          a button on the page which contains the text provided by the{" "}
          <code>label</code> prop, it appends the provided <code>variant</code>{" "}
          prop to the
          <code>className</code>, and it executes the <code>onClick</code>{" "}
          function when clicked. To make sure that your component works as
          intended, you go through and add a few simple unit tests.
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            const onClickMock = jest.fn();

            describe("Button", () => {
              describe("label", () => {
                it("Renders with the correct label", () => {
                  render(<Button label="Test" onClick={onClickMock} variant="primary" />);

                  expect(screen.getByTestId("button")).toBeVisible();
                });
              });
              describe("variant", () => {
                it("Applies the button-{variant} class to the ", () => {
                  render(<Button label="Test" onClick={onClickMock} variant="primary" />);

                  expect(screen.getByTestId("button")).toBeVisible();
                });
              });
              describe("onClick()", () => {
                it("Calls onClick when clicked", () => {
                  render(<Button label="Test" onClick={onClickMock} variant="primary" />);
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(1);
                });
              });
            });
        `}
        />

        <Typography variant="body1" component="p">
          There's nothing <em>wrong</em> with these tests. In fact, I would say
          that the average test suite for a React component may even look like
          this.
        </Typography>

        <Typography variant="body1" component="p">
          But, if you're like me, then there may be a little DRY alarm going off
          in your head 🚨
        </Typography>

        <Typography variant="body1" component="p">
          Each of these tests manually renders the component, with each prop
          explicitly defined in every test. This is a problem for a few reasons:
        </Typography>

        <ol>
          <li>
            <bold>It's dangerous to add new props</bold> - Any prop that gets
            added to the component must be explicitly added to{" "}
            <em>every test</em>. That may not be a huge deal for this component,
            since there are only three tests, but some components can have as
            many as 50-100 unit tests.
          </li>
          <li>
            <bold>It's a lot of typing</bold> - This seems like a minor detail,
            but extra friction in the test-writing process can make it feel like
            a chore and will encourage poor tests (or worse, <em>no tests</em>!
            👻)
          </li>
        </ol>

        <Typography variant="body1" component="p">
          Imagine that your fantastic product manager reaches out and requests
          that a <code>disabled</code> field should be added to the{" "}
          <code>Button</code> so that no customer can press the button without
          being logged in. One quick change to the component and, voila 🪄, our
          button can be disabled:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            export const Button = ({ label, onClick, variant, disabled }) => {
              return (
                <button
                  data-testid="button-with-disable"
                  className={\`button-\${variant}\`}
                  onClick={onClick}
                  disabled={disabled}
                >
                  {label}
                </button>
              );
            };
        `}
        />

        <Typography variant="body1" component="p">
          Now let's add some tests. If we follow the pattern of the tests above,
          we might do something like this:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            const onClickMock = jest.fn();

            describe("Button", () => {
              //...other tests (each of which need a disabled field too)...
              
              describe("onClick()", () => {
              // existing test, which still has to be updated
                it("if button is not disabled, calls onClick when clicked", () => {
                  render(
                    <Button 
                      label="Test"
                      onClick={onClickMock}
                      variant="primary"
                      disabled={true}
                    />
                  );
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(1);
                });

              // new test, which is yet another explicit component render
                it("if button is disabled, *does not* call onClick when clicked", () => {
                  render(
                    <Button 
                      label="Test"
                      onClick={onClickMock}
                      variant="primary"
                      disabled={true}
                    />
                  );
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(0);
                });
              });
            });
        `}
        />

        <Typography variant="body1" component="p">
          Not only is there some extra typing involved, but every previous test
          must be updated to include a <code>disabled</code> field as well. To
          make matters worse, the test we just added will only add to the number
          of updates required for future props.
        </Typography>

        <Typography variant="body1" component="p">
          Let's see if we can make these tests a bit more reusable!
        </Typography>

        <Typography variant="h2" component="h2">
          A Common Solution: A Render Function
        </Typography>

        <Typography variant="body1" component="p">
          Let's take a look at the most common solution I have seen to avoid
          duplication in test files - a <code>render</code> function. Here's how
          the render function would improve our original test cases:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            const onClickMock = jest.fn();

            const renderButton = () => {
              render(<Button label="Test" onClick={onClickMock} variant="primary" />);
            }

            describe("Button", () => {
              describe("label", () => {
                it("Renders with the correct label", () => {
                  renderButton();

                  expect(screen.getByTestId("button")).toBeVisible();
                });
              });
              describe("variant", () => {
                it("Applies the button-{variant} class to the ", () => {
                  renderButton();

                  expect(screen.getByTestId("button").classList).toInclude("primary");
                });
              });
              describe("onClick()", () => {
                it("Calls onClick when clicked", () => {
                  renderButton()
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(1);
                });
              });
            });
        `}
        />

        <Typography variant="body1" component="p">
          Rather than explicitly defining our component and it's props over and
          over, we've created a new function, <code>renderButton</code>, which
          handles all of that logic for us. The DRY alarm has relented and my
          brain is quiet once more. Peace at last 🧘
        </Typography>

        <Typography variant="body1" component="p">
          But there's a catch. What happens if your tests needs different props?
        </Typography>

        <Typography variant="body1" component="p">
          When adding tests for the <code>disabled</code> case, we want to test
          both when the button is disabled and when it <em>isn't</em>. However,
          our
          <code>renderButton</code> function doesn't accomodate that very well:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            const renderButton = () => {
              render(<Button label="Test" onClick={onClickMock} variant="primary" disabled={false} />);
            }

            describe("Button", () => {
              afterEach(() => {
                jest.resetAllMocks();
              });
              
              // ...other tests

              describe("onClick()", () => {
              // this test can use the render function
                it("If !disabled, calls onClick when clicked", () => {
                  renderButton();
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(1);
                });

                // this test *must* render manually to enforce the disabled prop
                it("If disabled, *does not call* onClick when clicked", () => {
                  render(
                    <Button
                      label="Test"
                      onClick={onClickMock}
                      variant="primary"
                      disabled={true}
                    />
                  );
                  fireEvent.click(screen.getByTestId("button"));

                  expect(onClickMock).toHaveBeenCalledTimes(0);
                });
              });
            });
        `}
        />

        <Typography variant="body1" component="p">
          Notice that we have to make a <em>choice</em> with the props in our
          <code>renderButton</code> function. In other words, we're locked in 🔒
        </Typography>

        <Typography variant="body1" component="p">
          This is the biggest weakness with the reusable render function. The
          lack of flexibility means that any tests which require a variation
          from the standard props <em>still</em> have to explicitly render the
          component and list its props. To make matters worse, we now have a mix
          of explicit and standard renderings to parse through any time we add
          props so we've even lost some of the benefits of being DRY in the
          first place.
        </Typography>

        <Typography variant="body1" component="p">
          So what can we do?
        </Typography>

        <CalloutBlock
          variant="info"
          contents={
            <Typography variant="body1" component="span">
              It's possible to alleviate this (to some extent) by having
              separate render functions. In our case, we would have a
              <code>renderButton</code> and a <code>renderButtonDisabled</code>.
              However, I've found that this approach is very difficult to scale
              as the number of props increase or the logic inside of the
              component grows. Imagine having a{" "}
              <code>renderSecondaryButtonDisabled</code>. That would become a
              nightmare 😱
            </Typography>
          }
        />

        <Typography variant="h2" component="h2">
          A More Flexible Approach: The Prop Constructor Pattern
        </Typography>

        <Typography variant="body1" component="p">
          We can use the Prop Constructor Pattern! This pattern takes advantage
          of the Javascript <em>spread operator</em> (<code>{"{...obj}"}</code>)
          to build a render function which removes unnecessary repetition while
          also giving us the flexibility we need to customize any of our props
          on the fly.
        </Typography>

        <Typography variant="body1" component="p">
          Here's our new-and-improved <code>renderButton</code> function 🎉:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
          // establish a shared starting point with defaultProps
          const defaultProps = {
            label: "Test",
            onClick: onClickMock,
            variant: "primary",
            disabled: false,
          };

          // allow a custom props object as a parameter to your render function.
          const renderButton = (customProps = {}) => {
            // the spread operator allows us to overwrite any variables we 
            // explicitly provide, while *keeping the default value* of any
            // other props
            const componentProps = { ...defaultProps, ...customProps };

            // then, we unpack the combined props into our component
            render(<Button {...componentProps} />);
          };
        `}
        />

        <Typography variant="body1" component="p">
          So let's walk through the changes.
        </Typography>

        <Typography variant="body1" component="p">
          Notice that now we're taking in a <code>customProps</code> object.
          I've defaulted it to an empty object so that, even <em>without</em>
          customProps, our render function will be able to pass in the default
          props correctly. We can then use the spread operator to <em>merge</em>
          our <code>defaultProps</code> object with the <code>customProps</code>{" "}
          object. This means that any props we explicitly define in our{" "}
          <code>customProps</code> object <em>overwrite</em> those props in the{" "}
          <code>defaultProps</code> object while leaving the other values
          intact. Here's a small example:
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            const obj1 = { first: 100, second: 20, last: 5}
            const obj2 = { third: 15, last: 2 }

            console.log({ ...obj1, ...obj2 })
            // { first: 100, second: 20, third: 15, last: 2}
        `}
        />

        <Typography variant="body1" component="p">
          Now let's write some tests 👍
        </Typography>

        <FormattedCodeBlock
          language={"jsx"}
          templateString={`
            describe("Button", () => {
              afterEach(() => {
                jest.resetAllMocks();
              });

              // ...other tests

              describe("onClick()", () => {
                it("If disabled is false, calls onClick when clicked", () => {
                  renderButton();
                  fireEvent.click(screen.getByTestId("button-with-disable"));

                  expect(onClickMock).toHaveBeenCalledTimes(1);
                });

              // now this test can use the same function!
                it("If disabled is true, *does not call* onClick when clicked", () => {
                  renderButton({ disabled: true });
                  fireEvent.click(screen.getByTestId("button-with-disable"));

                  expect(onClickMock).toHaveBeenCalledTimes(0);
                });
              });
            });
        `}
        />

        <Typography variant="body1" component="p">
          Look at that improvement with only a few extra lines of code in the{" "}
          <code>renderButton</code> function! Not only can the original test
          still use the <code>renderButton</code> function with its default
          props, but our new test can add its own props too 🙌
        </Typography>

        <Typography variant="h2" component="h2">
          The Benefits of the Prop Constructor Pattern
        </Typography>

        <Typography variant="body1" component="p">
          To recap, here are some of the benefits of using the Prop Constructor
          Pattern:
        </Typography>

        <ol>
          <li>It avoids unnecessary duplication</li>
          <li>It provides flexibility to adjust props when needed</li>
          <li>
            Bonus: It's immediately clear which props are being manipulated in
            the test
          </li>
        </ol>

        <Typography variant="body1" component="p">
          Full code for the <code>Button</code> can be found{" "}
          <a href="https://github.com/stephen-kernan/code-examples/blob/main/jest/propConstructorPattern/components/Button.js">
            here
          </a>
          .
        </Typography>

        <Typography variant="body1" component="p">
          Full code for the tests can be found{" "}
          <a href="https://github.com/stephen-kernan/code-examples/blob/main/jest/propConstructorPattern/tests/Button.test.js">
            here
          </a>
          .
        </Typography>
      </Container>
    </div>
  );
};
