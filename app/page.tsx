import CopyButton from "./CopyButton";
import Toc from "./Toc";

const SKILLS_SH = "https://skills.sh";

export default function Home() {
  return (
    <>
      <Toc />

      <nav>
        <div className="container">
          <a href="https://github.com/iamichieuche/kaizen" className="nav-logo">
            Kaizen
          </a>
          <ul className="nav-links">
            <li>
              <a href="https://github.com/iamichieuche/kaizen">GitHub</a>
            </li>
            <li>
              <a href="https://x.com/ichieuche">@ichieuche</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero-image">
            <img src="/kaizen/hero.jpg" alt="" aria-hidden="true" />
          </div>

          <header className="article-header">
            <div className="article-meta">
              <span className="article-date">April 2026</span>
              <span className="meta-dot" />
              <span className="article-tag">Agent Skills</span>
            </div>
            <h1>
              I have 250+ skills installed.
              <br />
              <em>Here&rsquo;s the one that ties them together.</em>
            </h1>
            <p className="article-lede">
              Building a toolkit is easy. The hard part is knowing which piece
              of it to reach for, right now, in this project. This is how I
              solved that.
            </p>
          </header>

          <div className="install-hero">
            <code>
              <span>npx skills add</span> iamichieuche/kaizen{" "}
              <span>-y -g</span>
            </code>
            <CopyButton text="npx skills add iamichieuche/kaizen -y -g" />
          </div>

          <div className="article-body">
            <section>
              <p>
                I&rsquo;ve been building out my agent skills toolkit for a
                while. At some point I hit 250 installed skills. Things like{" "}
                <code>/polish</code>, <code>/animate</code>,{" "}
                <code>/delight</code>, <code>/critique</code>,{" "}
                <code>/typeset</code>. All useful. All slowly fading from
                memory.
              </p>
              <p>
                You open a project and your head is already in the code.
                You&rsquo;re not stopping to think &ldquo;which of my 250
                skills applies here?&rdquo; You&rsquo;re thinking about the
                feature. The deadline. <em>The thing that feels slightly off but you
                can&rsquo;t name it yet.</em>
              </p>
              <p>So I built a skill for that.</p>
            </section>

            <div className="divider">
              <span />
              <span />
              <span />
            </div>

            <section>
              <h2 id="the-idea">The idea</h2>
              <p>
                Kaizen (改善) is Japanese for continuous improvement. Small
                changes that add up over time. That felt like the right name for
                a skills pack.
              </p>
              <p>
                The first skill in the pack is{" "}
                <span className="skill-name">/theres-a-skill-for-that</span>.
                It&rsquo;s a skill advisor built for designer-engineers. It only
                cares about one thing; making your product look, move, and feel
                better. Not test coverage, not bundle size. The stuff you can
                actually see.
              </p>

              <div className="callout">It just makes a call.</div>

              <p>
                Drop it into any project (a Next.js app, a SwiftUI prototype,
                some half-finished landing page) and it reads the room. Your
                stack, recent git changes, what files you&rsquo;ve been
                touching. Then it checks your installed skills and the{" "}
                <a href={SKILLS_SH}>skills.sh</a> catalog and tells you what to
                actually run.
              </p>
              <p>
                It knows the difference between a project that needs motion work
                and one that needs its design system sorting out. Between a UI
                that&rsquo;s almost there and one that needs a rethink. It
                figures out what phase you&rsquo;re in and gives you a specific
                answer for right now.
              </p>
            </section>

            <div className="divider">
              <span />
              <span />
              <span />
            </div>

            <section>
              <h2 id="how-it-works">How it works</h2>
              <p>It runs in three stages before it ever responds to you.</p>

              <div className="steps">
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <div className="step-title">Reads the project</div>
                    <div className="step-desc">
                      Scans <code>package.json</code>, git log, recent diffs,
                      what libraries you&rsquo;re using, what you&rsquo;ve been
                      working on.
                    </div>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <div className="step-title">Checks your installed skills</div>
                    <div className="step-desc">
                      Looks through everything in{" "}
                      <code>~/.claude/skills/</code> and{" "}
                      <code>~/.agents/skills/</code>. Matches what it found to
                      what you have.
                    </div>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <div className="step-title">Checks skills.sh for gaps</div>
                    <div className="step-desc">
                      Scans the full public catalog. If there&rsquo;s something
                      worth adding, not just nice-to-have but something that
                      fills a real gap, it gives you the install command.
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Then it gives you one to three skills. Never more. If one
                clearly fits, it says one. If two work well together (say,{" "}
                <code>/animate</code> and <code>/delight</code>{" "}
                before a launch) it&rsquo;ll say both, tell you why, and which
                one to run first.
              </p>

              <p>
                The recommendations are specific to what it actually found in
                your project. Not generic. Not &ldquo;you could run{" "}
                <code>/polish</code> at any time.&rdquo; It tells you{" "}
                <em>why this skill, right now.</em>
              </p>
            </section>

            <div className="divider">
              <span />
              <span />
              <span />
            </div>

            <section>
              <h2 id="usage">Usage</h2>
              <p>Run it with no arguments for a full project read;</p>

              <div className="usage-examples">
                <div className="usage-example">
                  <span className="slash">/</span>theres-a-skill-for-that
                  <CopyButton text="/theres-a-skill-for-that" />
                </div>
              </div>

              <p>Or give it context about what you&rsquo;re trying to do;</p>

              <div className="usage-examples">
                <div className="usage-example">
                  <span className="slash">/</span>theres-a-skill-for-that{" "}
                  <span className="args">before we launch</span>
                  <CopyButton text="/theres-a-skill-for-that before we launch" />
                </div>
                <div className="usage-example">
                  <span className="slash">/</span>theres-a-skill-for-that{" "}
                  <span className="args">the animations feel wrong</span>
                  <CopyButton text="/theres-a-skill-for-that the animations feel wrong" />
                </div>
                <div className="usage-example">
                  <span className="slash">/</span>theres-a-skill-for-that{" "}
                  <span className="args">push the UI further</span>
                  <CopyButton text="/theres-a-skill-for-that push the UI further" />
                </div>
              </div>

              <p>
                Works in Claude Code, Cursor, Codex, and any other agent that
                supports the skills format.
              </p>
            </section>

            <div className="divider">
              <span />
              <span />
              <span />
            </div>

            <section>
              <h2 id="install">Install</h2>
              <p>
                The whole pack installs in one command. Right now it&rsquo;s
                just <code>/theres-a-skill-for-that</code>, with more coming.
              </p>

              <div className="code-block">
                <div className="code-block-top">
                  <CopyButton text={"npx skills add iamichieuche/kaizen -y -g\n\n/theres-a-skill-for-that"} />
                </div>
                <pre>
                  <span className="comment"># Install globally</span>
                  {"\n"}
                  <span className="cmd">npx skills add</span>{" "}
                  iamichieuche/kaizen <span className="flag">-y -g</span>
                  {"\n\n"}
                  <span className="comment"># Then use it anywhere</span>
                  {"\n"}
                  <span className="slash">/</span>theres-a-skill-for-that
                </pre>
              </div>

              <p>
                The more skills you have installed, the better it gets. The &ldquo;run
                now&rdquo; picks only come from what&rsquo;s installed, so a
                bigger toolkit means sharper calls. It always checks{" "}
                <a href={SKILLS_SH}>skills.sh</a> too, and if you&rsquo;re
                missing something that would actually help, it tells you what to
                add.
              </p>

              <p>
                Built with <a href="https://claude.ai/code">Claude Code</a>.
                Source on{" "}
                <a href="https://github.com/iamichieuche/kaizen">GitHub</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <p className="footer-left">
            By{" "}
            <a href="https://github.com/iamichieuche">@iamichieuche</a>{" "}
            &middot;{" "}
            <a href="https://x.com/ichieuche">X (Twitter)</a>
          </p>
          <a
            href="https://github.com/iamichieuche/kaizen"
            className="footer-install"
          >
            iamichieuche/kaizen
          </a>
        </div>
      </footer>
    </>
  );
}
