import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Four Pillars",
  description:
    "The ZAO stands on four pillars: Artist Org, Autonomous Org, Operating System, Open Source.",
};

export default function PillarsPage() {
  return (
    <article className="page">
      <h1>The Four Pillars</h1>
      <p>
        The ZAO stands on four pillars. Each one is a real part of what the
        community does every week.
      </p>

      <h2 id="artist-org">01 - Artist Org</h2>
      <p>
        ZTalent Artist Organization. The ZAO exists because artists needed a
        community that took them seriously.
      </p>
      <p>
        The ZAO is an artist organization first. Musicians, producers, and
        visual artists release together, collaborate on each other's work, and
        share distribution. Artists backing artists - the community exists for
        them before anything else.
      </p>

      <h2 id="autonomous-org">02 - Autonomous Org</h2>
      <p>
        The community governs itself. Fractal meetings every Monday 6pm EST.
        Respect tokens (OG + ZOR). On-chain when it matters, off-chain when it
        does not.
      </p>
      <p>
        The ZAO runs itself. Members recognize each other's contributions in a
        weekly Fractal (Mondays 6pm EST), and that recognition - Respect - is
        what gives decisions weight, instead of a top-down boss. A fuller
        explainer of the Fractal and how Respect drives decisions is coming.
      </p>

      <h2 id="operating-system">03 - Operating System</h2>
      <p>
        The tools that make the org run. Chat. Music player. Events. Payments.
        Agents. Every tool is owned by the community, forkable, and
        interoperable.
      </p>
      <ul>
        <li>
          <strong>ZAO OS</strong> - the community chat client and home base.
        </li>
        <li>
          <strong>ZOE</strong> - the agent that helps run the org day to day.
        </li>
        <li>
          <strong>ZABAL / ZABAL Games</strong> - an incubated project: the
          builder engagement program where new builders come in, plus the
          toolstack the team builds with. It powers the work - it is not the
          top-level brand. (See the <Link href="/org">org chart</Link>.)
        </li>
        <li>
          <strong>WaveWarZ</strong> - an incubated project, on its way to its
          own sub-DAO.
        </li>
      </ul>

      <h2 id="open-source">04 - Open Source</h2>
      <p>
        Everything is in the open. Other music communities can fork the org and
        ship their own version.
      </p>
      <p>
        Everything The ZAO builds is open source and forkable. ZAO OS - the app
        you're in - is MIT-licensed, so another music community can fork the
        whole org and ship their own version. Code:{" "}
        <a href="https://github.com/bettercallzaal">github.com/bettercallzaal</a>
        . Live: <a href="https://zaoos.com">zaoos.com</a>.
      </p>

      <p>
        <Link href="/">Home</Link> &middot;{" "}
        <Link href="/join">Ready to join?</Link>
      </p>
    </article>
  );
}
