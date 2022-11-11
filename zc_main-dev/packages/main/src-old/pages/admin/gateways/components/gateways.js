import React from "react";
import styled from "styled-components";
// import classes from './gateways.module.css'
import AdminSettings from "../../.";
import { ImWarning } from "react-icons/im";
import { FiGlobe } from "react-icons/fi";

const Gateways = () => {
  return (
    <AdminSettings>
      <GatewayCard>
        <div className="gateways_contents">
          <h1>
            <FiGlobe className="blue_icon" />
            Gateways
          </h1>
          <div className="content">
            <h2>Saying goodbye to Zuri Chat's IRC and XMPP gateways</h2>
            <p>
              As Slack has evolved over the years, we’ve built features and
              capabilities — like Shared Channels, Threads, and emoji reactions
              (to name a few) — that the IRC and XMPP gateways aren’t able to
              handle. Our priority is to provide a secure and high-quality
              experience across all platforms, and so the time has come to close
              the gateways.
            </p>
            <p className="gateways_body_preline">
              We know this may affect your workflow in ways that are frustrating
              or disruptive, and
              <a href="#"> we’re here to help and answer questions</a>. Thank
              you in advance for making this transition with us.
            </p>
            <div className="alert bottom_mg">
              <ImWarning className="red_icon" />
              <p>
                Please note that the gateways will be closed according to the
                following schedule:
              </p>
              <ul>
                <li>
                  March 6, 2018: No longer available to newly-created workspaces
                </li>
                <li>
                  April 3, 2018: Removed from workspaces where they’re not in
                  use
                </li>
                <li>May 15, 2018: Closed for all remaining workspaces</li>
              </ul>
              <p></p>
              <p>
                If your workspace currently uses gateways, your experience won’t
                change until May 15th. But we encourage you to prepare for the
                transition soon. Feel free to
                <a href="#"> contact our support team</a> for help.
              </p>
            </div>
            <h3>Accessibility &amp; screen reading</h3>
            <p>
              We are focused on making Slack accessible to all people. Over the
              past year, we've made great progress in improving both the
              keyboard and screen reading experiences in Slack. We know many
              users have been relying on IRC and XMPP clients for a more
              accessible experience — but our goal is to build all of the
              accessibility features you need directly into Slack.
            </p>
            <p>
              <strong>Navigating Slack by keyboard:</strong> In addition to
              Slack’s
              <a href="https://get.slack.help/hc/en-us/articles/201374536-slack-keyboard-shortcuts">
                keyboard shortcuts
              </a>{" "}
              and basic keyboard accessibility, you can now work in Slack using
              our new, more efficient
              <a href="https://get.slack.help/hc/en-us/articles/115003340723-keyboard-accessibility-in-slack-">
                navigation model
              </a>
              .
            </p>
            <p>
              <strong>Using a screen reader in Slack:</strong>
              We’ve also been improving the screen reader experience. Here’s
              what you’ll find:
            </p>
            <ul>
              <li>
                All UI elements are accessible by keyboard and functional with a
                screen reader
              </li>
              <li>
                We’ve improved our UI labeling &amp; naming, including ARIA
                landmarks
              </li>
              <li>
                Interactions like the message input autocomplete have also been
                enhanced with ARIA
              </li>
              <li>
                We’ve improved the virtual and focus navigation experience for
                reading messages
              </li>
              <li>
                Message content, states (e.g. stars, pins, etc.) and actions
                (e.g. reply, react) are fully perceivable
              </li>
            </ul>
            <p>
              These changes are just the beginning of our accessibility journey.
              We’ll be releasing further improvements in the near future!
            </p>
            <h3>Alternatives and workarounds</h3>
            <p>
              There are community-authored open source tools that provide an
              IRC-like experience on top of Slack APIs. Although they are not
              directly supported or built by Slack, you can use these resources
              to access your Slack workspace.
            </p>

            <ul>
              <li>
                <a href="#"> wee-Zuri Chat</a>
                is an add-on for the popular IRC and multi-protocol client,
                WeeChat
              </li>
              <li>
                <a href="#"> Zuri Chat-libpurple </a>
                is a module for libpurple XMPP clients, such as Adium
              </li>
            </ul>
            <p className="gateways_body_preline">
              Although the gateways were never supported as a developer feature,
              many of you have built useful and creative integrations that rely
              on them. We recognize removing these gateways may disrupt your
              work, but we’re hopeful that our
              <a href="#"> Real Time Messaging</a> and
              <a href="#"> Events </a>
              APIs will meet the majority of your integration and
              <a href="#"> bot needs</a>.
            </p>
            <p className="gateways_body_preline">
              Many other creative uses of gateways are now supported with
              full-fledged features right in Zuri Chat, like
              <a href="#"> setting per-channel notifications</a>,
              <a href="#"> searching logs</a>,
              <a href="#"> sending email straight to Zuri Chat</a>, and more. A
              quick search in our
              <a href="#"> Help Center</a>
              is an easy way to see if Zuri Chat’s capabilities now cover your
              use case, or you can
              <a href="#"> reach out to our support team</a>.
            </p>
          </div>
        </div>
      </GatewayCard>
    </AdminSettings>
  );
};

const GatewayCard = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: -1px;
    padding-left: 2rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    margin: 0 0 1rem;
  }

  p {
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a,
  a:link,
  a:visited {
    color: #1264a3;
    text-decoration: none;
    font-size: inherit;
  }

  ul {
    margin: 0 0 1rem 2rem;
  }

  li {
    list-style: unset;
  }

  ol,
  ul {
    padding-left: 0;
    margin-left: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    .gateways_contents {
      width: 100%;
    }
  }

  .gateways_contents {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
  }

  .content {
    background-color: #ffff;
    border-radius: 0.25rem;
    box-shadow: 0 1px 0 rgb(0 0 0 / 25%);
    padding: 2rem 2rem 1rem;
    margin: 0 auto 2rem;
    border: 1px solid #ddd;
  }

  .gateways_body_preline {
    white-space: pre-line;
  }

  .bottom_mg {
    margin-bottom: 2rem !important;
  }

  .alert {
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 1px solid #ddd;
    background: #fff;
    color: #1d1c1d;
    border-left-width: 5px;
    border-left-color: #de4e2b;
    margin: 0 auto 1rem;
    border-radius: 0.25rem;
    position: static;
  }

  .red_icon {
    color: #f40101;
    margin-right: 0.5rem;
    margin-left: -2rem;
    margin-top: 0.3rem;
    width: 1.25rem;
    text-align: center;
    float: left;
  }

  h1 .blue_icon {
    color: #1264a3;
    margin-right: 0.75rem;
    margin-top: 0.35rem;
    font-size: 30px;
    float: left;
  }
`;
export default Gateways;
