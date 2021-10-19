import {
  AppBar,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

import "./App.css";

export const LandingPage = () => {
  return (
    <div className="page-container">
      <AppBar position="static" className="page-nav">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton> */}
          <Typography variant="h4" component="div" className="page-header">
            stephen_kernan
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Paper className="dark-mode-paper" elevation={2}>
          <h1>
            learnToCode()<span style={{ color: "#f3f2f1" }}>;</span>
          </h1>

          <p>
            Anyone can learn to code. Like any skill, it just takes time and
            practice. That said, teaching oneself to code can be daunting. There
            are so many places one can start and an infinite number of paths
            from there.
          </p>

          <p>
            This guide is a starting point for anyone interested in learning. It
            consists of tips and tricks for getting started, as well as the free
            resources that I used as I taught myself to code.
          </p>

          <h2>The Basics</h2>

          <section className="sub-section">
            <h3>What Equipment Do I Need?</h3>

            <ul>
              <li>
                💻 Computer - Any computer will work to get started. My computer
                at the time was a 3-year-old Dell laptop with minimal specs. Any
                Operating System will work, although some languages are more
                accessible on MacOS.
              </li>
              <li>
                🧰 Code Editor/IDE - I personally recommend Microsoft Visual
                Studio Code for writing code. It has syntax extensions for every
                language that make writing code much easier. It is completely
                free and works on Windows/MacOS. It also has cool themes and
                extensions.
              </li>
              <li>
                😺 GitHub Account - GitHub is a version control platform that
                enables you to store your code for free. It’s an industry
                standard for maintaining projects (more on version control
                later).
              </li>
              <li>
                ✏️ Design Software (optional) - If you want to work on web
                design, it helps to have a no-code platform for sketching up
                ideas. I highly recommend Figma, as it’s free and cloud-based.
                They have incredible user guides as well.
              </li>
            </ul>
          </section>

          <section class="sub-section">
            <h3>What Do I Learn First?</h3>

            <p>
              There are tons of languages and frameworks out there and it can be
              nerve-wracking to try and choose the right one. First, I think
              it’s helpful to know your options. Programming languages tend to
              be helpful for specific things, and most fall into one or more of
              these categories:
            </p>

            <ul>
              <li>
                👉 Front-end - All of the interactive/visual things you see on a
                website/application. This includes design work and making sure
                the user can interact with a page’s elements.
              </li>
              <li>
                👈 Back-end - The database that stores a website’s data, as well
                as the way data is passed between the frontend and the database.
              </li>
              <li>
                📱 Mobile Development - Like frontend/backend, but for phones.
              </li>
              <li>
                📈 Data Science - How data is used to drive business decisions.
              </li>
            </ul>
          </section>

          <section class="sub-section">
            <h3>How Do I Choose?</h3>
            <p>
              Here are a few questions that should help guide you to a good fit.
            </p>
            <ol>
              <li>🎢 What is fun for you?</li>
              <span>
                Choosing a language that helps you build a project you enjoy
                makes the experience of learning to code so much better. You’ll
                also find it easier to push through when you’re frustrated.
              </span>
              <li>✅ What are your goals?</li>
              <span>
                If your goal is a career change, I highly recommend searching
                for jobs you would enjoy at companies you’re interested in and
                see what qualifications are listed. Finding the commonalities
                among a few positions and starting there will save you a lot of
                guess-work.
              </span>
              <li>🙈 Still can’t decide?</li>
              <p>
                Most people tend to find front-end development more intuitive
                and approachable when getting started. I would recommend
                starting with HTML, CSS, Javascript and React. Once you have
                learned the basics of those, I would add in Express and any of
                SQL/MySQL/PostgreSQL. This group of languages, or ‘tech-stack’
                is fully accessible on any operating system and should be good
                enough to learn any skills necessary for a full project.
              </p>
            </ol>
          </section>

          <section class="sub-section">
            <h3>What Languages Match My Interests?</h3>
            <p>Here's a list of popular languages/libararies by category:</p>
            <ol>
              <li>
                👉 Front-end
                <ol type="a">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Django (if learning Python)</li>
                </ol>
              </li>
              <li>
                👈 Back-end
                <ol type="a">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Javascript (kind of)</li>
                  <li>SQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ol>
              </li>
              <li>
                📱 Mobile Development{" "}
                <ol type="a">
                  <li>Swift (iOS)</li>
                  <li>Kotlin (Android)</li>
                  <li>React Native (Both)</li>
                </ol>
              </li>
              <li>
                📈 Data Science
                <ol type="a">
                  <li>Python</li>
                  <li>R</li>
                  <li>SQL</li>
                  <li>Scala</li>
                </ol>
              </li>
            </ol>
          </section>

          <h2>Getting Started</h2>

          <section class="sub-section">
            <h3>Basic Strategy</h3>

            <ol>
              <li>
                Learn the Basics - By basics, I mean have a general
                understanding of the building blocks of the language. Anything
                past that is Google-able. I work full-time with Javascript and I
                still Google the syntax at least once per week.
              </li>
              <li>
                Explore - Build projects and do your best to problem-solve along
                the way. The debugging guide later in this document will help
                you figure out what’s going wrong.
              </li>
              <li>Repeat.</li>
            </ol>
          </section>

          <h3>Tips & Tricks</h3>
          <section class="sub-section">
            <h4>Consistency is Key 🔑</h4>

            <p>
              I would encourage you to find a rhythm that works for you and
              stick with it, taking blocks of time at least three days a week. I
              used to think that these needed to be huge blocks of time, but
              just an hour or so every few days is plenty - especially when
              starting out. Over time, you will be shocked at how your skill
              develops.{" "}
            </p>

            <p>
              One tip here is to take some notes about what you’re
              doing/learning along the way. Then, when you finish for the day,
              just briefly review the notes from this session and your previous
              session. I have found this helps to keep knowledge fresh.
            </p>
          </section>

          <section class="sub-section">
            <h4>Tutorials vs. Exploration 🧪</h4>

            <p>
              Tutorials can be valuable, but they have limits as well. For
              example, when I was learning Python, I followed a tutorial to
              build a basic blog on Youtube. After about 10 hours, I finished
              the tutorial and realized that I had a blog, but I did not know
              Python any better than I did when I started.
            </p>

            <p>
              Exploration, on the other hand, forces you to learn the language
              and apply the fundamental concepts of the language in new
              situations. Through exploration, you learn when to use what you’ve
              learned, which is much more helpful.
            </p>

            <p>
              It may be slower, but I would encourage as much exploration as
              possible when learning. There are plenty of resources for project
              ideas below, but try to build the projects with as little
              instruction as possible. You will find that the concepts stick
              much better.
            </p>
          </section>

          <section class="sub-section">
            <h4>Pick a Paradigm 🖼</h4>

            <p>
              In my experience, using metaphors in the learning process speeds
              up the learning curve and improves comprehension. Ironically, this
              works even better if the metaphor is a bad one. Some metaphors
              that I have used in the past include: language (grammar/syntax),
              lego bricks, algebra, and Hot Wheels.
            </p>

            <p>
              Essentially, the goal is to try to explain what you are learning
              within the context of another subject. For instance, the popular
              framework React utilizes reusable ‘components’, which are
              comparable to Lego bricks. Within the paradigm of Lego bricks,
              these ‘components’ are stacked together to form more complex
              ‘components’, etc.
            </p>
          </section>

          <h2>Resources</h2>

          <section class="sub-section">
            <h3>Courses & Tutorials 🙋</h3>

            <p>
              The following websites have excellent resources for learning the
              basics of most popular languages. Each of these resources is free,
              although they may offer some additional exercises through paid
              access.
            </p>

            <ol>
              <li>
                <a target="_blank" href="https://www.codecademy.com">
                  Codecademy
                </a>{" "}
                - Basic courses are all free with optional premium exercises.
                Some advanced courses/learning paths are available with a
                subscription, but they are not necessary. They have an intuitive
                web-based development environment, so you can learn the language
                in the browser without switching to/from a code editor.
                Codecademy offers courses in HTML/CSS, React, React Native,
                Javascript, Python, Java, SQL, and more.
              </li>
              <li>
                <a target="_blank" href="https://www.w3schools.com">
                  W3Schools
                </a>{" "}
                - Courses are more focused on the language rather than
                application and therefore have less structured examples.
                However, it is easy to navigate through the lesson to find the
                specific information you need. W3Schools is also good for design
                because they offer an extensive Bootstrap tutorial. They offer
                many of the same languages as Codecademy and courses are
                entirely free.
              </li>
              <li>
                <a target="_blank" href="https://www.freecodecamp.com">
                  FreeCodeCamp
                </a>{" "}
                - The only place (as far as I know) that offers free
                certification upon completion of a learning path, FreeCodeCamp’s
                structured courses are based on learning specific skills rather
                than languages (i.e., web development rather than Javascript).
                The courses are longer, but they use multiple languages in
                building applicable skills.
              </li>
              <li>
                <a target="_blank" href="https://www.theodinproject.com/">
                  The Odin Project
                </a>{" "}
                - Skill-based paths are less structured than FreeCodeCamp. They
                point to the resources necessary for completing the projects
                rather than guiding you directly. They often offer a reading
                list and guidelines, then leave it to you to figure out the
                rest. The Odin Project has excellent soft-skills lessons and a
                ton of additional resources. That said, the Odin Project is not
                a traditional tutorial site in the sense that all learning is
                largely self-guided. As such, it may be less approachable for
                some people.
              </li>
            </ol>
          </section>

          <section class="sub-section">
            <h3>Projects & Practice Problems 👷‍♂️</h3>

            <p>
              So you have learned the basics of a language, but where do you go
              from there? These resources offer ways to practice and improve
              your understanding of the language, including inspiration for
              projects and challenge problems.
            </p>

            <ol>
              <li>
                <a target="_blank" href="https://www.freecodecamp.com">
                  FreeCodeCamp
                </a>{" "}
                - As a part of the learning paths mentioned above, FreeCodeCamp
                requires projects to be completed. FreeCodeCamp provides a list
                of requirements, but their projects give ample freedom to make
                the project your own.
              </li>
              <li>
                <a target="_blank" href="https://www.theodinproject.com/">
                  The Odin Project
                </a>{" "}
                - As mentioned above, the Odin Project takes a completely
                project-based approach to learning. It may be beneficial to
                learn the basics in a more traditional tutorial and use the Odin
                Project as a guide for reinforcing that knowledge through
                practical application.
              </li>
              <li>
                <a target="_blank" href="https://www.hackerrank.com">
                  HackerRank
                </a>
                {" / "}
                <a target="_blank" href="https://www.leetcode.com">
                  LeetCode
                </a>{" "}
                - These sites offer practice word problems sorted by language,
                difficulty, and data structures. While they don’t offer projects
                to build, I do find them useful for practicing things that
                you’re finding difficult. For instance, I struggled with
                learning lists in Python, so I practiced here until I was more
                comfortable with that skill. I would advise you to pick
                whichever you prefer and use it sparingly when you find you’re
                struggling with particular concepts.
              </li>
            </ol>
          </section>

          <section class="sub-section">
            <h3>Documentation 📖</h3>
            <p>
              Documentation, in this case, refers to the reference guides for
              languages, frameworks, and libraries that are put together by the
              people/teams who create or maintain the language. It is my opinion
              that documentation is the worst way to learn a language,
              especially for beginners. In most cases, it’s like trying to learn
              a human language by reading a dictionary. That said, dictionaries
              are essential as a reference for learning a language. In the same
              way, learning to use documentation can prove invaluable for
              learning a programming language.
            </p>
            <p>
              You will certainly find that some documentation is better than
              others, but most documentation can be found with a quick Google
              search. As with a dictionary, I have found documentation to be
              most useful when you approach it with a specific question in mind.
              Just be sure that the documentation you’re reading matches the
              version of the language or framework you are using.
            </p>
          </section>

          <h2>Appendix</h2>

          <h3>Debugging: Printing vs. Debugging Tools</h3>

          <section class="sub-section">
            <h4>Printing 🖨</h4>

            <p>
              Most programming languages offer some form of printing, or logging
              information to the console. For instance, if you have a Javascript
              variable called exampleData, you can log/print that variable to
              the console to understand the data it contains. This can be
              helpful for troubleshooting because you can see what data is being
              passed, how that data is being transformed, or which code is being
              run.
            </p>

            <p>
              That said, printing is not interactive in the sense that it either
              runs or it doesn’t. There is not much information about why it was
              executed or not, nor can you access any information around your
              print command. Printing can be extremely useful, but it takes a
              while to learn what to print in order to get the information you
              need.
            </p>
          </section>

          <section class="sub-section">
            <h4>Debugging 🐛</h4>

            <p>
              Debugging refers to the process of interrupting your code at
              specific points to learn more about the way it is functioning. It
              is one of the most helpful skills you can learn, especially early
              on, in the sense that it is more interactive than printing. When
              debugging, the code is stopped in the middle of its execution and
              you can walk through line by line to make sure you understand
              what’s happening. For this reason, it saves a tremendous amount of
              time. I don’t like to think about the amount of time I could have
              saved myself had I just learned to debug my code early on.
            </p>

            <p>
              Google Chrome has excellent debugging tools built into the
              browser. If you are doing any web development work, I would highly
              encourage you to watch a video like this one to familiarize
              yourself with using Chrome developer tools. A 30-50 minute video
              could help save endless hours of trying to figure out what’s going
              wrong.
            </p>

            <p>
              If your code is not running in a web browser like Chrome, most
              code editors have built in debugging tools that are just as
              helpful. There are great guides on YouTube for setting up those
              tools in almost any code editor that you choose.
            </p>
          </section>

          <h3>Terminal vs. IDE</h3>

          <section class="sub-section">
            <h4>Terminal</h4>

            <p>
              The terminal can be an intimidating place because, for most
              people, it’s a complete unknown. I don’t think I used the terminal
              on any computer in the first twenty-four years of my life. That
              said, it is an essential part of learning to code. My advice for
              learning the terminal is to focus on specific skills. The most
              common skills that require the terminal are:
            </p>

            <ol>
              <li>
                Git - This is how you manage versions of your code. Git allows
                you to revert to a previous version if you make a mistake, as
                well as to build out features without worrying about breaking
                your main code.
              </li>
              <li>
                Package Management - Most languages require additional tools,
                known as packages, to accomplish tasks. These packages can be
                installed or updated through the terminal. Executing Code - Any
                script or application you write will require an execution
                command to start it. This command is often executed in the
                terminal.
              </li>
            </ol>
          </section>

          <section class="sub-section">
            <h3>IDE/Code Editor</h3>

            <p>
              Your code editor is your most crucial tool for writing code. But
              why use one at all? Well, imagine writing an essay in the Notes
              app. You could do it, but tools like Google Docs or Microsoft Word
              offer ways to simplify the process dramatically. The same is true
              for code editors.
            </p>

            <p>
              Most editors come with language-specific tools that help you write
              code in a particular language while checking your syntax. They
              also offer extensions to help you format and test your code. I
              would highly recommend taking some time to familiarize yourself
              with the IDE that you choose and to customize it in a way that
              helps your work-flow. Plus, they have some sick themes to
              customize your aesthetic 🔥.
            </p>
          </section>
        </Paper>
      </Container>
    </div>
  );
};
