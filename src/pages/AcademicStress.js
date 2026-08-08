import React from 'react';
import '../styling-sheets/AcademicStress.css';

function AcademicStress() {
  return (
    <div>
      <div className="headerContainer">
        <h1 className="mainTitle">Academic Stress</h1>
        <div className="buttonsContainer">
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('procrastinationSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Procrastination
          </button>
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('timeSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Time Management
          </button>
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('perfectionismSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Perfectionism
          </button>

          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('interestSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Lack of Interest
          </button>
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('distractionSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Distractions
          </button>
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('workSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Cluttered Workspace
          </button>
          <button
            className="button"
            onClick={() => {
              const element = document.getElementById('fearSection');
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Fear of Failure
          </button>
        </div>
      </div>

      <div className="body">
        <div id="procrastinationSection">
          <h2 className="sectionTitle">Procrastination</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Procrastination manifests as delaying tasks despite knowing their
              importance. Students may experience increased anxiety as deadlines
              approach, incomplete assignments, and a persistent feeling of
              guilt or inadequacy.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              Procrastination can stem from various factors, such as fear of
              failure, perfectionism, or feeling overwhelmed by the size or
              complexity of a task. Low motivation, distractions (like social
              media), or a lack of clarity about where to start also contribute
              significantly. In some cases, it may be a symptom of deeper
              issues, such as anxiety or poor time management habits.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Combat procrastination by breaking tasks into smaller, actionable
              steps that feel less intimidating. For example, instead of "write
              the paper," aim for "create an outline" or "write the
              introduction." Build routines and habits around consistent work
              times, and incorporate accountability mechanisms, like study
              groups or productivity partners, to maintain focus. Use
              prioritization techniques, such as the Eisenhower Matrix, to
              determine which tasks are most urgent or important. Lastly,
              address emotional barriers like fear of failure by reminding
              yourself that starting imperfectly is better than not starting at
              all.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Start Small: Begin with a single, manageable action, such as
              setting up your workspace or opening the document you need to work
              on. Momentum often builds after the initial step.
              <br />
              2. Use the Pomodoro Technique: Work in focused intervals, such as
              25 minutes of work followed by a 5-minute break. This method can
              reduce feelings of overwhelm and increase productivity over time.
              <br />
              3. Create Accountability: Share your goals with a friend or mentor
              and set regular check-ins to discuss progress. Knowing someone is
              aware of your deadlines can increase motivation.
              <br />
              4. Limit Distractions: Turn off notifications, use
              website-blocking tools, and create a dedicated, clutter-free study
              space to improve focus.
              <br />
              5. Reward Yourself: Set up small rewards for completing
              milestones, such as a short walk, a snack, or a favorite activity,
              to reinforce positive behaviors and keep motivation high.
            </p>
          </div>
        </div>
        <div id="timeSection">
          <h2 className="sectionTitle">Time Management</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Poor time management leads to missed deadlines, last-minute work,
              and chronic stress. Students may feel overwhelmed and struggle to
              balance academic, social, and personal responsibilities.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              This often arises from overcommitting, failing to prioritize
              tasks, or underestimating the time required for activities. A lack
              of structured routines further compounds the issue.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Adopt structured planning techniques, such as creating a daily
              schedule or using time-blocking. Prioritize tasks based on urgency
              and importance using methods like the Eisenhower Matrix. Reflect
              weekly on what strategies worked and adjust your plans
              accordingly.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Start each day by listing your top three priorities and focus
              on those first.
              <br />
              2. Use a planner or digital app like Google Calendar to allocate
              time effectively.
              <br />
              3. Schedule regular, short breaks to avoid burnout during long
              study sessions.
              <br />
              4. Reflect at the end of the week to identify productivity
              roadblocks and solutions.
              <br />
              5. Delegate or eliminate non-essential commitments to free up time
              for important tasks.
            </p>
          </div>
        </div>

        <div id="perfectionismSection">
          <h2 className="sectionTitle">Perfectionism</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Perfectionism is characterized by excessive focus on details,
              difficulty finishing tasks due to high standards, and
              dissatisfaction even with quality work. This can lead to stress,
              procrastination, or burnout.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              It often stems from the need for external validation, fear of
              criticism, or self-imposed pressure to excel. Unrealistic
              expectations or overvaluing outcomes over effort may also drive
              perfectionism.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Shift your mindset from “perfect or nothing” to “progress over
              perfection.” Focus on completing tasks efficiently rather than
              flawlessly. Seek feedback early in the process to avoid
              overanalyzing. Normalize the idea that mistakes are part of growth
              and improvement.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Set a time limit for tasks to prevent over-focusing on minor
              details.
              <br />
              2. Use affirmations like “Good enough is enough” to challenge
              perfectionist thinking.
              <br />
              3. Regularly remind yourself of the big picture—perfection in one
              task doesn’t guarantee overall success.
              <br />
              4. Finish tasks at 80% completion for non-critical work to
              practice letting go of perfectionism.
              <br />
              5. Reward yourself for completing tasks on time, even if they’re
              not flawless.
            </p>
          </div>
        </div>

        <div id="interestSection">
          <h2 className="sectionTitle">Lack of Interest in the Subject</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Disinterest in a subject often results in low motivation,
              difficulty focusing, and procrastination. Assignments may feel
              like tedious obligations, leading to suboptimal performance.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              This disinterest arises from an inability to see the subject’s
              relevance to personal goals, uninspiring teaching methods, or a
              mismatch with individual passions or strengths.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Find connections between the subject and your personal interests
              or career aspirations. Explore alternative resources like
              podcasts, videos, or case studies to make the material more
              engaging. Set specific, tangible goals for completing work in the
              subject to maintain focus.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Research how the subject relates to your future goals and write
              down those connections.
              <br />
              2. Incorporate study aids like visual diagrams or interactive
              tools to make learning more engaging.
              <br />
              3. Join a study group or discuss topics with peers to bring a
              collaborative energy to the subject.
              <br />
              4. Ask professors for real-world applications or additional
              resources to inspire interest.
              <br />
              5. Reward yourself for completing study sessions to make the
              experience more enjoyable.
            </p>
          </div>
        </div>

        <div id="distractionSection">
          <h2 className="sectionTitle">Distractions (e.g., Social media)</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Distractions like social media reduce focus and extend task
              completion times. Students may find themselves spending hours
              unproductively and feeling unaccomplished by the end of the day.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              Distractions often provide an escape from stress or boredom. The
              brain’s natural desire for instant gratification and dopamine
              rewards makes it hard to resist these interruptions.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Set boundaries for distractions by allocating specific times for
              social media use. Use productivity tools like website blockers or
              timers to create a distraction-free work environment. Practice
              mindfulness techniques to stay present and focused on the task at
              hand.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Turn on “Do Not Disturb” mode or put your phone in another room
              while studying.
              <br />
              2. Use productivity apps like StayFocusd or Forest to limit access
              to distracting websites.
              <br />
              3. Schedule dedicated times for social media breaks to reduce the
              urge to check constantly.
              <br />
              4. Create a distraction-free workspace that encourages focus.
              <br />
              5. Reflect on how you feel after completing tasks without
              interruptions to reinforce the habit.
            </p>
          </div>
        </div>

        <div id="workSection">
          <h2 className="sectionTitle">Cluttered Workspace</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              A cluttered workspace can cause difficulty concentrating,
              increased stress, and wasted time looking for necessary materials.
              It often reduces productivity and creates a sense of chaos.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              Disorganization may stem from a lack of time, storage solutions,
              or procrastination in cleaning. An overwhelming schedule can also
              make it difficult to maintain order.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Dedicate time daily or weekly to organize your workspace. Use
              storage systems, such as filing cabinets or labeled containers, to
              keep materials accessible and neat. Declutter by removing
              unnecessary items to create a calming and focused environment.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Spend 10 minutes at the end of each day tidying your workspace
              to prevent buildup.
              <br />
              2. Create designated zones for different activities, like
              studying, reading, or brainstorming.
              <br />
              3. Label storage containers to make finding items quicker and
              easier.
              <br />
              4. Keep only essentials on your desk to minimize distractions.
              <br />
              5. Set a recurring weekly reminder to deep-clean your workspace
              and refresh its organization.
            </p>
          </div>
        </div>

        <div id="fearSection">
          <h2 className="sectionTitle">Fear of Failure</h2>
          <div className="infoContainer">
            <h2 className="subsectionTitle">Symptoms</h2>
            <p className="infoParagraph">
              Fear of failure often leads to avoiding challenges, hesitating to
              take risks, and excessive anxiety about outcomes. Students may
              experience feelings of inadequacy, doubt their abilities, and
              delay tasks to avoid potential negative results.
            </p>

            <h2 className="subsectionTitle">Causes</h2>
            <p className="infoParagraph">
              This fear stems from past negative experiences, societal or
              familial pressures, or an internalized belief that failure
              reflects personal worth. Perfectionistic tendencies or comparing
              oneself to others can amplify these fears.
            </p>

            <h2 className="subsectionTitle">Strategies</h2>
            <p className="infoParagraph">
              Reframe failure as a stepping stone for growth and improvement.
              Practice self-compassion by recognizing that everyone makes
              mistakes and that they are part of the learning process. Set
              realistic goals that prioritize progress over perfection. Engage
              in mindfulness practices to remain present and reduce the impact
              of fear-driven thoughts.
            </p>

            <h2 className="subsectionTitle">Actionable Advice</h2>
            <p className="infoParagraph">
              1. Reflect on a past failure and write down one or two lessons it
              taught you.
              <br />
              2. Break large tasks into smaller, manageable goals to reduce the
              intimidation factor.
              <br />
              3. Practice positive self-talk, such as “I am learning and
              improving,” to counter negative thoughts.
              <br />
              4. Schedule time for relaxation or mindfulness exercises to keep
              stress levels in check.
              <br />
              5. Surround yourself with supportive peers or mentors who
              encourage resilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicStress;
