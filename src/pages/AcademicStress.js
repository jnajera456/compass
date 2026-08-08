import React from 'react';
import TopicPage from '../components/TopicPage';

const topics = [
  {
    id: 'procrastinationSection',
    label: 'Procrastination',
    symptoms:
      'You keep putting off work you know matters, and the deadline creeps closer. Assignments stack up, and a quiet sense of guilt tags along.',
    causes:
      'Procrastination is rarely just laziness. More often it is avoidance: a task that feels too big, fear of doing it badly, or not knowing where to begin. Anxiety and fuzzy priorities feed it.',
    strategies:
      "Shrink the task until the first step feels almost too easy. Swap 'write the paper' for 'open a doc and jot three points.' Pick a specific start time, and add a little accountability, like a friend who expects to see progress.",
    advice: [
      'Start with one small action, like opening the file or setting up your space. Momentum usually follows the first step.',
      'Work in short, focused blocks with a break between them, such as 25 minutes on and 5 off.',
      'Tell a friend or mentor your goal and set a quick check-in so someone knows your deadline.',
      'Cut distractions while you work: silence notifications and use a site blocker if you need one.',
      'Reward yourself when you finish a milestone to keep the momentum going.',
    ],
  },
  {
    id: 'timeSection',
    label: 'Time Management',
    symptoms:
      'Deadlines sneak up, work happens at the last minute, and it feels like there is never enough time to go around.',
    causes:
      'This usually comes from taking on too much, not ranking what matters, or underestimating how long things actually take. Without a routine, it snowballs.',
    strategies:
      'Plan the day and block out time for real work. Rank tasks by importance and urgency, and take a few minutes each week to see what worked and adjust.',
    advice: [
      'Start each day by naming your top three priorities and doing those first.',
      'Put commitments and study blocks on a calendar so your time is visible.',
      'Schedule short breaks to stay fresh during long stretches of work.',
      'Review at the end of the week to spot what slowed you down.',
      'Drop or hand off commitments that are not essential.',
    ],
  },
  {
    id: 'perfectionismSection',
    label: 'Perfectionism',
    symptoms:
      'You have trouble finishing, polish the same work over and over, and stay unsatisfied even when it is good.',
    causes:
      'It often grows from fear of criticism, tying your worth to your output, or holding yourself to standards no one could meet.',
    strategies:
      'Aim for progress over perfect. Get feedback early instead of hiding the work until it is flawless, and treat mistakes as a normal part of getting better.',
    advice: [
      'Set a time limit for a task so you stop over-polishing minor details.',
      'Remind yourself that good enough really is enough for most work.',
      'Keep the big picture in view, since one flawless task does not make or break the whole.',
      'For low-stakes work, call it done around 80 percent and move on.',
      'Reward yourself for finishing on time, even when it is not perfect.',
    ],
  },
  {
    id: 'interestSection',
    label: 'Lack of Interest in the Subject',
    symptoms:
      'Motivation runs low, focus is hard to hold, and the work feels like a chore you are dragging yourself through.',
    causes:
      'This tends to show up when you cannot see the point, the material is delivered in a dull way, or the subject does not fit your strengths.',
    strategies:
      'Tie the subject to something you actually care about or a goal you are chasing. Look for better materials, like a good video or podcast, and set concrete, finishable goals.',
    advice: [
      'Write down how the subject connects to your goals, and keep it where you can see it.',
      'Use visual or interactive aids to make the material easier to engage with.',
      'Study with a group or talk topics through with a classmate.',
      'Ask a professor for real-world examples or extra resources.',
      'Reward yourself for finishing study sessions.',
    ],
  },
  {
    id: 'distractionSection',
    label: 'Distractions (e.g., Social Media)',
    symptoms:
      'Your focus keeps breaking, tasks stretch far longer than they should, and you reach the end of the day with little to show.',
    causes:
      'Distractions offer a quick escape from stress or boredom, and the brain likes the fast reward. That makes them hard to resist.',
    strategies:
      'Set boundaries and pick specific times for social media. Use blockers or timers to protect focused work, and practice gently bringing your attention back to one task.',
    advice: [
      'Turn on Do Not Disturb or leave your phone in another room while you study.',
      'Use an app or site blocker to limit the biggest time sinks.',
      'Schedule social media breaks so the urge to check has a place to go.',
      'Set up a clear, uncluttered spot to work.',
      'Notice how you feel after a stretch of focused work, and use that to reinforce the habit.',
    ],
  },
  {
    id: 'workSection',
    label: 'Cluttered Workspace',
    symptoms:
      'It is harder to concentrate, you lose time hunting for what you need, and the mess adds a low sense of chaos.',
    causes:
      'Disorganization usually comes from not having the time or a system to stay tidy, or from clutter piling up during a busy stretch.',
    strategies:
      'Reset your space on a regular rhythm. Give your materials a home so they are easy to find, and clear out what you do not need.',
    advice: [
      'Spend ten minutes tidying at the end of each day to stop clutter from building.',
      'Set up zones for different activities, like studying, reading, and planning.',
      'Label storage so things are quick to find and put away.',
      'Keep only the essentials on your desk.',
      'Set a weekly reminder for a deeper clean.',
    ],
  },
  {
    id: 'fearSection',
    label: 'Fear of Failure',
    symptoms:
      'You avoid challenges, put things off, and carry a lot of anxiety about how they will turn out. Self-doubt creeps in.',
    causes:
      'This fear often traces back to past setbacks, pressure from others, or a belief that failing says something about your worth.',
    strategies:
      'Treat failure as information rather than a verdict. Practice a little self-compassion, set realistic goals, and use mindfulness to take the edge off fear-driven thoughts.',
    advice: [
      'Think of a past setback and write down one or two things it taught you.',
      'Break big tasks into smaller goals so they feel less intimidating.',
      "Use steadier self-talk, like 'I am learning and improving.'",
      'Schedule real rest and downtime to keep stress in check.',
      'Lean on friends or mentors who encourage you to keep going.',
    ],
  },
];

const sources = [
  {
    label: 'American Psychological Association: Stress',
    url: 'https://www.apa.org/topics/stress',
  },
  {
    label: 'National Institute of Mental Health: Caring for Your Mental Health',
    url: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health',
  },
  {
    label: 'Centers for Disease Control and Prevention: About Mental Health',
    url: 'https://www.cdc.gov/mental-health/',
  },
  {
    label: 'The Jed Foundation: Mental Health Resource Center',
    url: 'https://jedfoundation.org/mental-health-resource-center/',
  },
];

function AcademicStress() {
  return (
    <TopicPage title="Academic Stress" topics={topics} sources={sources} />
  );
}

export default AcademicStress;
