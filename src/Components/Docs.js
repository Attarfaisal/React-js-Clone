import React from "react";
import { NavLink } from "react-router-dom";
import "./Docs.css";
import Dropdown from "react-bootstrap/Dropdown";

const Docs = () => {
  return (
    <div className="docs-body">
      <div className="docs-body-head">
        <h1 className="docs-body-heading">Getting Started</h1>
        <p>
          This page is an overview of the React documentation and related
          resources.
        </p>
        <p>
          <b>React</b> is a JavaScript library for building user interfaces.
          Learn what React is all about on
          <u> our homepage</u> or <u>in the tutorial.</u>
        </p>
        <hr />
        <ul className="Docs-list">
          <li>
            <NavLink to="">Try React</NavLink>
          </li>
          <li>
            <NavLink to="">Learn React</NavLink>
          </li>
          <li>
            <NavLink to="">Staying Informed</NavLink>
          </li>
          <li>
            <NavLink to="">Versioned Documentation</NavLink>
          </li>
          <li>
            <NavLink to="">Something Missing</NavLink>
          </li>
        </ul>
        <hr />
        <h1 className="docs-body-head">Try React</h1>
        <p>
          React has been designed from the start for gradual adoption, and
          <b>you can use as little or as much React as you need. </b> Whether
          you want to get a taste of React, add some interactivity to a simple
          HTML page, or start a complex React-powered app, the links in this
          section will help you get started.
        </p>

        <h1 className="docs-body-head">Online Playgrounds</h1>
        <p>
          If you’re interested in playing around with React, you can use an
          online code playground. Try a Hello World template on <u>CodePen</u>,
          <u> CodeSandbox</u>, or<u> Stackblitz</u>. If you prefer to use your
          own text editor, you<u> can also download this HTML file</u>, edit it,
          and open it from the local filesystem in your browser. It does a slow
          runtime code transformation, so we’d only recommend using this for
          simple demos.
        </p>

        <h1 className="docs-body-head">Add React to a Website</h1>
        <p>
          You can add React to an HTML page in one minute. You can then either
          gradually expand its presence, or keep it contained to a few dynamic
          widgets.
        </p>

        <h1 className="docs-body-head">Create a New React App</h1>
        <p>
          When starting a React project, a{" "}
          <u>simple HTML page with script tags</u>
          might still be the best option. It only takes a minute to set up! As
          your application grows, you might want to consider a more integrated
          setup. There are several JavaScript toolchains we recommend for larger
          applications. Each of them can work with little to no configuration
          and lets you take full advantage of the rich React ecosystem.{" "}
          <ul>Learn how.</ul>
        </p>
        <hr />
        <h1 className="docs-body-head">Learn React</h1>
        <p>
          People come to React from different backgrounds and with different
          learning styles. Whether you prefer a more theoretical or a practical
          approach, we hope you’ll find this section helpful.
        </p>
        <ul>
          <li>
            If you prefer to <b>learn by doing</b>, start with our{" "}
            <u>practical tutorial.</u>
          </li>
          <li>
            If you prefer to <b> learn concepts step by step</b>, start with our
            <u> guide to main concepts.</u>
          </li>
        </ul>
        <p>
          Like any unfamiliar technology, React does have a learning curve. With
          practice and some patience, you will get the hang of it.
        </p>

        <h1 className="docs-body-head">First Example</h1>
        <p>
          The <u> React homepage</u> contains a few small React examples with a
          live editor. Even if you don’t know anything about React yet, try
          changing their code and see how it affects the result
        </p>

        <h1 className="docs-body-head">React For Beginner</h1>
        <p>
          If you feel that the React documentation goes at a faster pace than
          you’re comfortable with, check out{" "}
          <u>this overview of React by Tania Rascia</u> . It introduces the most
          important React concepts in a detailed, beginner-friendly way. Once
          you’re done, give the documentation another try!
        </p>

        <h1 className="docs-body-head">React For Designer</h1>
        <p>
          If you’re coming from a design background, these resources are a great
          place to get started.
        </p>

        <h1 className="docs-body-head">JavaScript Resources</h1>
        <p>
          The React documentation assumes some familiarity with programming in
          the JavaScript language. You don’t have to be an expert, but it’s
          harder to learn both React and JavaScript at the same time. We
          recommend going through this JavaScript overview to check your
          knowledge level. It will take you between 30 minutes and an hour but
          you will feel more confident learning React.
        </p>
        <p>
          <b> Tip </b>
          <br />
          Whenever you get confused by something in JavaScript, MDN and
          javascript.info are great websites to check. There are also community
          support forums where you can ask for help.
        </p>

        <h1 className="docs-body-head">Practical Tutorial</h1>
        <p>
          If you prefer to <b>learn by doing</b>, check out our practical
          tutorial. In this tutorial, we build a tic-tac-toe game in React. You
          might be tempted to skip it because you’re not into building games —
          but give it a chance. The techniques you’ll learn in the tutorial are
          fundamental to building any React apps, and mastering it will give you
          a much deeper understanding.
        </p>

        <h1 className="docs-body-head">Step-by-Step Guide</h1>
        <p>
          If you prefer to <b>learn concepts step by step</b>, our guide to main
          concepts is the best place to start. Every next chapter in it builds
          on the knowledge introduced in the previous chapters so you won’t miss
          anything as you go along.
        </p>

        <h1 className="docs-body-head">Staying Informed</h1>
        <p>
          The React blog is the official source for the updates from the React
          team. Anything important, including release notes or deprecation
          notices, will be posted there first.
          <br />
          You can also follow the @reactjs account on Twitter, but you won’t
          miss anything essential if you only read the blog.
          <br />
          Not every React release deserves its own blog post, but you can find a
          detailed changelog for every release in the CHANGELOG.md file in the
          React repository, as well as on the Releases page.
        </p>

        <h1 className="docs-body-head">Versioned Documentation</h1>
        <p>
          This documentation always reflects the latest stable version of React.
          Since React 16, you can find older versions of the documentation on a
          separate page. Note that documentation for past versions is
          snapshotted at the time of the release, and isn’t being continuously
          updated.
        </p>

        <h1 className="docs-body-head">Something Missing?</h1>
        <p>
          If something is missing in the documentation or if you found some part
          confusing, please file an issue for the documentation repository with
          your suggestions for improvement, or tweet at the @reactjs account. We
          love hearing from you!
        </p>
      </div>
      <div className="asidebar">
        <ol>
          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
                INSTALLATION
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <b>Getting Started</b>
                </Dropdown.Item>
                <Dropdown.Item>Add React to a Website</Dropdown.Item>
                <Dropdown.Item>Create a New React App</Dropdown.Item>
                <Dropdown.Item>CDN Links</Dropdown.Item>
                <Dropdown.Item>Release Channels</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
                MAIN CONCEPTS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <ol>
                  <li>
                    <Dropdown.Item>Hello World</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Introducing JSX</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Rendering Elememts</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Components and Props</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>State and Lifecycle</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Handling Events</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Conditional Rendering</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Lists and keys</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Forms</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Lifting State Up</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Composition vs Inheritance</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item>Thinking in React</Dropdown.Item>
                  </li>
                </ol>
              </Dropdown.Menu>
            </Dropdown>
          </li>


          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               ADVANCE GUIDES
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Accessibility</Dropdown.Item>
                <Dropdown.Item>Code-Splitting</Dropdown.Item>
                <Dropdown.Item>Context</Dropdown.Item>
                <Dropdown.Item>Error Boundries</Dropdown.Item>
                <Dropdown.Item>Forwarding Refs</Dropdown.Item>
                <Dropdown.Item>Fragments</Dropdown.Item>
                <Dropdown.Item>Higher-Order Components</Dropdown.Item>
                <Dropdown.Item>Integrating with Other liabraries</Dropdown.Item>
                <Dropdown.Item>JSX in Depth</Dropdown.Item>
                <Dropdown.Item>Optimizing Performance</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
          </li>



          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               API REFERENCE
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>React</Dropdown.Item>
                <Dropdown.Item>React Components</Dropdown.Item>
                <Dropdown.Item>React DOM</Dropdown.Item>
                <Dropdown.Item>React DOMClients</Dropdown.Item>
                <Dropdown.Item>React DOMServer</Dropdown.Item>
                <Dropdown.Item>DOM Elements</Dropdown.Item>
                <Dropdown.Item>Test Utilities</Dropdown.Item>
                <Dropdown.Item>Test Renderer</Dropdown.Item>
                <Dropdown.Item>JS Environment Requirements</Dropdown.Item>
                <Dropdown.Item>Glossary</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
          </li>


          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               HOOKS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Introducing a Hooks</Dropdown.Item>
                <Dropdown.Item>Hooks at a Glance</Dropdown.Item>
                <Dropdown.Item>Using the State Hooks</Dropdown.Item>
                <Dropdown.Item>Using the Effect Hook</Dropdown.Item>
                <Dropdown.Item>Rules of Hookes</Dropdown.Item>
                <Dropdown.Item>Building your own Hooks</Dropdown.Item>
                <Dropdown.Item>Hooks API Reference</Dropdown.Item>
                <Dropdown.Item>Hooks FAQ</Dropdown.Item>
                
             </Dropdown.Menu>
            </Dropdown>
          </li>


          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               TESTING
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Testing Overview</Dropdown.Item>
                <Dropdown.Item>Testing resips</Dropdown.Item>
                <Dropdown.Item>Testing Environments</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </li>


          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               CONTRIBUTING
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>How to Contribute</Dropdown.Item>
                <Dropdown.Item>Codebase Overview</Dropdown.Item>
                <Dropdown.Item>Implementation Notes</Dropdown.Item>
                <Dropdown.Item>Design Principles</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Dropdown>
              <Dropdown.Toggle className="docs-dropdown" id="dropdown-basic">
               FAQ
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>AJAX and API's</Dropdown.Item>
                <Dropdown.Item>Babel, JSX, and Build Steps</Dropdown.Item>
                <Dropdown.Item>Passing Functions to Components</Dropdown.Item>
                <Dropdown.Item>Component State</Dropdown.Item>
                <Dropdown.Item>Styling and CSS</Dropdown.Item>
                <Dropdown.Item>File Structure</Dropdown.Item>


                </Dropdown.Menu>
            </Dropdown>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Docs;
