import React from "react";
import { NavLink } from "react-router-dom";
import "./Docs.css";


const Community = () => {
  return (
    <div className="docs-body">
      <div className="docs-body-head">
        <h1 className="docs-body-heading">Where To Get Support</h1>
        <p>
          React has a community of millions of developers. On this page we’ve
          listed some React-related communities that you can be a part of; see
          the other pages in this section for additional online and in-person
          learning materials. Before participating in React’s communities,
          please read our Code of Conduct. We have adopted the Contributor
          Covenant and we expect that all community members adhere to the
          guidelines within.
        </p>
        <hr />

        <h1 className="docs-body-heading">Stack Overflow</h1>
        <p>
          Stack Overflow is a popular forum to ask code-level questions or if
          you’re stuck with a specific error. Read through the existing
          questions tagged with reactjs or ask your own!
        </p>
        <hr />

        <h1 className="docs-body-heading">Popular Discussion Forums</h1>
        <p>
          There are many online forums which are a great place for discussion
          about best practices and application architecture as well as the
          future of React. If you have an answerable code-level question, Stack
          Overflow is usually a better fit.
        </p>
        <p>Each community consists of many thousands of React users.</p>
        <ul>
          <li>DEV’s React community</li>
          <li>Hashnode’s React community</li>
          <li>Reactiflux online chat</li>
          <li>Reddit’s React community</li>
        </ul>
        <hr />
        <h1 className="docs-body-heading">News</h1>
        <p>
          For the latest news about React, follow @reactjs on Twitter and the
          official React blog on this website.
        </p>
      </div>
      <div className="community-asidebar">
        <h3>COMMUNITY RESOURCES ^</h3>
        <ol>
        <li><b>Support</b></li>
        <li>Team</li>
        <li>Courses</li>
        <li>Examples</li>
        <li>Meetups</li>
        <li>Conferences</li>
        <li>Articles</li>
        <li>Podcasts</li>
        <li>Videos</li>
        <li>External Resources</li>
        </ol>
      </div>
    </div>
  );
};

export default Community;
