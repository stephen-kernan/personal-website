(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{1112:function(e,t,n){"use strict";n.r(t),n.d(t,{CalloutBlock:function(){return s},FormattedCodeBlock:function(){return d},PropConstructorPattern:function(){return u}});var o=n(7294);n(5660),n(1233),n(3594),n(6089),n(6263);var a=n(3156),l=n(5861),r=n(9016),i=n(5882);let c=e=>{switch(e){case"warn":return"⚠️ ";case"error":return"❗️ ";default:return"\uD83D\uDCA1 "}},s=({variant:e="info",contents:t=null})=>{let n=c(e);return o.createElement("div",{className:`callout ${e}`},n," ",t)},d=({language:e,templateString:t=""})=>{let[n,a]=(0,o.useState)(!1),l=t.search(/\S|$/)-1,r=l-4;(0,o.useEffect)(()=>{Prism.highlightAll(),console.log("Highlighting")},[n]),(0,o.useEffect)(()=>{a(!0)});let i=t.split("\n").map(e=>e.substring(r)).join("\n");return n?o.createElement("pre",null,o.createElement("code",{"data-prismjs-copy":"\uD83D\uDCCB Copy to Clipboard","data-prismjs-copy-success":"✅ Copied!",className:`language-${e}`},i)):o.createElement("pre",null,o.createElement("code",{"data-prismjs-copy":"\uD83D\uDCCB Copy to Clipboard","data-prismjs-copy-success":"✅ Copied!"},i))},u=()=>o.createElement("div",{className:"page-container"},o.createElement(r.H,{pageTitle:"Prop Constructor Pattern",description:"A simple way to write cleaner, more flexible tests for React."}),o.createElement(i.o,{activeLink:"blog"}),o.createElement(a.Z,{maxWidth:"lg",className:"content-container"},o.createElement(l.Z,{variant:"semiHuge",sx:{color:"primary.main"},component:"h1"},"The Prop Constructor Pattern"),o.createElement(l.Z,{variant:"subHeader",component:"h2"},"A simple way to write cleaner, more flexible React tests."),o.createElement(l.Z,{variant:"body1",component:"p"},"Imagine that you've built a simple ",o.createElement("code",null,"Button")," component, like this:"),o.createElement(d,{language:"jsx",templateString:`
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
            `}),o.createElement(l.Z,{variant:"body1",component:"p"},"This ",o.createElement("code",null,"Button")," component is pretty simple. It should render a button on the page which contains the text provided by the"," ",o.createElement("code",null,"label")," prop, it appends the provided ",o.createElement("code",null,"variant")," ","prop to the",o.createElement("code",null,"className"),", and it executes the ",o.createElement("code",null,"onClick")," ","function when clicked. To make sure that your component works as intended, you go through and add a few simple unit tests."),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"There's nothing ",o.createElement("em",null,"wrong")," with these tests. In fact, I would say that the average test suite for a React component may even look like this."),o.createElement(l.Z,{variant:"body1",component:"p"},"But, if you're like me, then there may be a little DRY alarm going off in your head \uD83D\uDEA8"),o.createElement(l.Z,{variant:"body1",component:"p"},"Each of these tests manually renders the component, with each prop explicitly defined in every test. This is a problem for a few reasons:"),o.createElement("ol",null,o.createElement("li",null,o.createElement("bold",null,"It's dangerous to add new props")," - Any prop that gets added to the component must be explicitly added to"," ",o.createElement("em",null,"every test"),". That may not be a huge deal for this component, since there are only three tests, but some components can have as many as 50-100 unit tests."),o.createElement("li",null,o.createElement("bold",null,"It's a lot of typing")," - This seems like a minor detail, but extra friction in the test-writing process can make it feel like a chore and will encourage poor tests (or worse, ",o.createElement("em",null,"no tests"),"! \uD83D\uDC7B)")),o.createElement(l.Z,{variant:"body1",component:"p"},"Imagine that your fantastic product manager reaches out and requests that a ",o.createElement("code",null,"disabled")," field should be added to the"," ",o.createElement("code",null,"Button")," so that no customer can press the button without being logged in. One quick change to the component and, voila \uD83E\uDE84, our button can be disabled:"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Now let's add some tests. If we follow the pattern of the tests above, we might do something like this:"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Not only is there some extra typing involved, but every previous test must be updated to include a ",o.createElement("code",null,"disabled")," field as well. To make matters worse, the test we just added will only add to the number of updates required for future props."),o.createElement(l.Z,{variant:"body1",component:"p"},"Let's see if we can make these tests a bit more reusable!"),o.createElement(l.Z,{variant:"h2",component:"h2"},"A Common Solution: A Render Function"),o.createElement(l.Z,{variant:"body1",component:"p"},"Let's take a look at the most common solution I have seen to avoid duplication in test files - a ",o.createElement("code",null,"render")," function. Here's how the render function would improve our original test cases:"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Rather than explicitly defining our component and it's props over and over, we've created a new function, ",o.createElement("code",null,"renderButton"),", which handles all of that logic for us. The DRY alarm has relented and my brain is quiet once more. Peace at last \uD83E\uDDD8"),o.createElement(l.Z,{variant:"body1",component:"p"},"But there's a catch. What happens if your tests needs different props?"),o.createElement(l.Z,{variant:"body1",component:"p"},"When adding tests for the ",o.createElement("code",null,"disabled")," case, we want to test both when the button is disabled and when it ",o.createElement("em",null,"isn't"),". However, our",o.createElement("code",null,"renderButton")," function doesn't accomodate that very well:"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Notice that we have to make a ",o.createElement("em",null,"choice")," with the props in our",o.createElement("code",null,"renderButton")," function. In other words, we're locked in \uD83D\uDD12"),o.createElement(l.Z,{variant:"body1",component:"p"},"This is the biggest weakness with the reusable render function. The lack of flexibility means that any tests which require a variation from the standard props ",o.createElement("em",null,"still")," have to explicitly render the component and list its props. To make matters worse, we now have a mix of explicit and standard renderings to parse through any time we add props so we've even lost some of the benefits of being DRY in the first place."),o.createElement(l.Z,{variant:"body1",component:"p"},"So what can we do?"),o.createElement(s,{variant:"info",contents:o.createElement(l.Z,{variant:"body1",component:"span"},"It's possible to alleviate this (to some extent) by having separate render functions. In our case, we would have a",o.createElement("code",null,"renderButton")," and a ",o.createElement("code",null,"renderButtonDisabled"),". However, I've found that this approach is very difficult to scale as the number of props increase or the logic inside of the component grows. Imagine having a"," ",o.createElement("code",null,"renderSecondaryButtonDisabled"),". That would become a nightmare \uD83D\uDE31")}),o.createElement(l.Z,{variant:"h2",component:"h2"},"A More Flexible Approach: The Prop Constructor Pattern"),o.createElement(l.Z,{variant:"body1",component:"p"},"We can use the Prop Constructor Pattern! This pattern takes advantage of the Javascript ",o.createElement("em",null,"spread operator")," (",o.createElement("code",null,"{...obj}"),") to build a render function which removes unnecessary repetition while also giving us the flexibility we need to customize any of our props on the fly."),o.createElement(l.Z,{variant:"body1",component:"p"},"Here's our new-and-improved ",o.createElement("code",null,"renderButton")," function \uD83C\uDF89:"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"So let's walk through the changes."),o.createElement(l.Z,{variant:"body1",component:"p"},"Notice that now we're taking in a ",o.createElement("code",null,"customProps")," object. I've defaulted it to an empty object so that, even ",o.createElement("em",null,"without"),"customProps, our render function will be able to pass in the default props correctly. We can then use the spread operator to ",o.createElement("em",null,"merge"),"our ",o.createElement("code",null,"defaultProps")," object with the ",o.createElement("code",null,"customProps")," ","object. This means that any props we explicitly define in our"," ",o.createElement("code",null,"customProps")," object ",o.createElement("em",null,"overwrite")," those props in the"," ",o.createElement("code",null,"defaultProps")," object while leaving the other values intact. Here's a small example:"),o.createElement(d,{language:"jsx",templateString:`
            const obj1 = { first: 100, second: 20, last: 5}
            const obj2 = { third: 15, last: 2 }

            console.log({ ...obj1, ...obj2 })
            // { first: 100, second: 20, third: 15, last: 2}
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Now let's write some tests \uD83D\uDC4D"),o.createElement(d,{language:"jsx",templateString:`
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
        `}),o.createElement(l.Z,{variant:"body1",component:"p"},"Look at that improvement with only a few extra lines of code in the"," ",o.createElement("code",null,"renderButton")," function! Not only can the original test still use the ",o.createElement("code",null,"renderButton")," function with its default props, but our new test can add its own props too \uD83D\uDE4C"),o.createElement(l.Z,{variant:"h2",component:"h2"},"The Benefits of the Prop Constructor Pattern"),o.createElement(l.Z,{variant:"body1",component:"p"},"To recap, here are some of the benefits of using the Prop Constructor Pattern:"),o.createElement("ol",null,o.createElement("li",null,"It avoids unnecessary duplication"),o.createElement("li",null,"It provides flexibility to adjust props when needed"),o.createElement("li",null,"Bonus: It's immediately clear which props are being manipulated in the test"))));t.default=u},5882:function(e,t,n){"use strict";n.d(t,{o:function(){return f}});var o=n(7294),a=n(2734),l=n(7357),r=n(5861),i=n(1519),c=n(3946),s=n(8561),d=n(2293),u=n(155),m=n(3795),p=n(326),h=n(9194),b=n.n(h);let g=({links:e,activeLink:t})=>{let n=(0,a.Z)();return o.createElement(l.Z,{sx:{bgcolor:"eraserHead",flexGrow:1,flexShring:0,padding:"1em",display:{xs:"flex",md:"none"},flexFlow:"column"}},e.map(e=>o.createElement(r.Z,{variant:"body2",component:"a",className:"global-nav__link",sx:{color:"bakugoLight",borderBottom:`4px solid ${t===e.path?n.palette.primary.main:"transparent"}`,marginBottom:"1rem"},href:e.path,underline:"none"},e.label)),o.createElement(i.Z,{variant:"middle",sx:{marginTop:"2rem"}}))},v=({links:e,activeLink:t,open:n,toggleMenu:a})=>o.createElement("div",null,o.createElement(c.Z,{id:"openmenu",onClick:a},o.createElement(p.Z,{sx:{color:"bakugoLight"}})),o.createElement(s.ZP,{anchor:"left",sx:{width:"max(50%, 180px)",flexShrink:0,"& .MuiDrawer-paper":{width:"max(50%, 180px)",boxSizing:"border-box"}},open:n,variant:"temporary",onClose:a},o.createElement(g,{activeLink:t,links:e}))),f=({activeLink:e})=>{let[t,n]=(0,o.useState)(!1),i=(0,a.Z)(),c=[{label:"about",path:"/about"},{label:"blog",path:"/blog"}],s=()=>{n(!t)};return o.createElement(d.Z,{position:"static",className:"page-nav global-nav"},o.createElement(u.Z,{className:b()["global-nav__container"],sx:{bgcolor:"eraserHead"}},o.createElement(l.Z,{sx:{display:{xs:"flex",md:"none"},width:"min-content"}},o.createElement(v,{activeLink:e,links:c,open:t,toggleMenu:s})),o.createElement(r.Z,{variant:"h3",component:m.Z,className:`${b()["global-nav__page-header"]} ${b()["global-nav__link"]}`,sx:{color:"bakugoLight"},href:"/",underline:"none"},"stephen kernan"),o.createElement(l.Z,{className:b()["global-nav__middle-section"],sx:{display:{xs:"none",md:"flex"}}},c.map(t=>o.createElement(r.Z,{variant:"body2",component:m.Z,className:"global-nav__link",sx:{display:{xs:"none",md:"flex"},color:"bakugoLight",borderBottom:`4px solid ${e===t.label?i.palette.primary.main:"transparent"}`},href:t.path,underline:"none"},t.label)))))}},9016:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var o=n(7294),a=n(4593);let l=({pageTitle:e,description:t})=>o.createElement(a.q,{title:`${e} | Stephen Kernan`,meta:[{name:"description",content:t},{property:"og:title",content:`${e} | Stephen Kernan`},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{property:"twitter:title",content:`${e} | Stephen Kernan`},{property:"twitter:description",content:t}]})},3856:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/prop-constructor-pattern",function(){return n(1112)}])},9194:function(e){e.exports={"global-nav":"globalNav_global-nav__a_1YF","global-nav__settings":"globalNav_global-nav__settings__oA_LT","global-nav__link":"globalNav_global-nav__link__FnV8h","global-nav__link--active":"globalNav_global-nav__link--active__udQ5T","global-nav__container":"globalNav_global-nav__container__50IoE","global-nav__middle-section":"globalNav_global-nav__middle-section___qUau","settings-modal__box":"globalNav_settings-modal__box__2MWuR","theme-select":"globalNav_theme-select__cqXNF"}}},function(e){e.O(0,[672,775,774,888,179],function(){return e(e.s=3856)}),_N_E=e.O()}]);