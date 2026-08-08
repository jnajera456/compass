import React from 'react';
import TopicPage from '../components/TopicPage';

const topics = [
  {
    id: 'prioritiesSection',
    label: 'Time and Priorities',
    symptoms:
      'Your days fill up but the important things slip, you feel busy without progress, and you are always reacting instead of choosing.',
    causes:
      'Without clear priorities, urgent but minor tasks crowd out what actually matters. Saying yes to everything guarantees it.',
    strategies:
      'Decide what matters most before the week starts, and protect time for it. Separate urgent from important, and let some small things go.',
    advice: [
      'Pick your top few priorities for the week and schedule them first.',
      'Sort tasks by importance and urgency, and start with important.',
      'Block focused time for big goals before the day fills up.',
      'Batch small tasks together instead of letting them interrupt you.',
      'Review weekly and adjust what is not working.',
    ],
  },
  {
    id: 'moneySection',
    label: 'Money Stress',
    symptoms:
      'Worry about bills, tuition, or running out before the next check. Money stress can disrupt sleep, focus, and mood.',
    causes:
      'Tight budgets, irregular income, and surprise costs are common in college. Not having a clear picture of your money makes the worry worse.',
    strategies:
      'Get the real numbers in front of you, since a clear picture is less scary than a vague dread. Build a simple budget, and use campus resources before things get urgent.',
    advice: [
      'Write down what comes in and what goes out so you know where you stand.',
      'Build a simple budget and track spending for a few weeks.',
      'Check for campus resources like food pantries, emergency aid, or financial counseling.',
      'Tackle one bill or decision at a time instead of everything at once.',
      'Ask for help early, since most schools have people whose job is exactly this.',
    ],
  },
  {
    id: 'sleepSection',
    label: 'Sleep',
    symptoms:
      'Trouble falling or staying asleep, dragging through the day, leaning on caffeine, or crashing on weekends to catch up.',
    causes:
      'Irregular schedules, late screens, caffeine, and stress all disrupt sleep. College life pushes against it constantly.',
    strategies:
      'Keep your sleep and wake times steady, wind down before bed, and protect the hours you know you need. Most adults do best with seven or more hours.',
    advice: [
      'Aim for a consistent sleep and wake time, even on weekends.',
      'Wind down without screens for the last stretch before bed.',
      'Go easy on caffeine, especially in the afternoon and evening.',
      'Keep your sleep space dark, cool, and quiet.',
      'Protect sleep as a priority, not the thing you cut first.',
    ],
  },
  {
    id: 'physicalSection',
    label: 'Physical Health',
    symptoms:
      'Low energy, getting sick often, or feeling sluggish and out of sorts. Skipped meals and no movement add up.',
    causes:
      'Busy schedules crowd out exercise, regular meals, and downtime. It is easy to run on empty without noticing.',
    strategies:
      'Move your body in ways you actually enjoy, eat with some regularity, and treat basic care as fuel for everything else. Small and consistent beats intense and rare.',
    advice: [
      'Fit in movement you enjoy most days, since even short sessions count.',
      'Eat regular meals with some protein, fruit, and vegetables.',
      'Stay hydrated through the day.',
      'Step outside for daylight and a change of scene.',
      'Keep up with basic care like checkups and the health center when you need it.',
    ],
  },
  {
    id: 'burnoutSection',
    label: 'Burnout',
    symptoms:
      'Exhaustion that rest does not fix, cynicism about school, and a drop in how well you are doing. You feel used up.',
    causes:
      'Burnout builds from long stretches of high demand without enough recovery. Pushing through without breaks speeds it up.',
    strategies:
      'Take recovery seriously, not just when you collapse. Set limits on your load, reconnect with why the work matters, and get support before you hit empty.',
    advice: [
      'Build real breaks and downtime into your week, not just after a crash.',
      'Set limits on how much you take on at once.',
      'Reconnect with why your work matters to you.',
      'Lean on friends, mentors, or a counselor before you hit empty.',
      'If burnout is deep, talk to someone about adjusting your load.',
    ],
  },
  {
    id: 'routinesSection',
    label: 'Routines',
    symptoms:
      'Days feel chaotic or aimless, you decide everything on the fly, and simple things keep slipping through the cracks.',
    causes:
      'Without routines, every choice takes fresh energy, and it is easy to drift. New schedules each semester make this harder.',
    strategies:
      'Build a few anchor habits for your day so the basics run on autopilot. Start small and keep them consistent rather than overhauling everything at once.',
    advice: [
      'Anchor your day with steady wake, meal, and study times.',
      'Start with one or two small habits and keep them consistent.',
      'Attach a new habit to something you already do.',
      'Use a simple planner or calendar to hold your routine.',
      'Adjust your routine as your schedule changes each term.',
    ],
  },
];

const sources = [
  {
    label: 'Centers for Disease Control and Prevention: About Sleep',
    url: 'https://www.cdc.gov/sleep/about/index.html',
  },
  {
    label:
      'Centers for Disease Control and Prevention: Physical Activity Basics',
    url: 'https://www.cdc.gov/physical-activity-basics/about/index.html',
  },
  {
    label: 'American Psychological Association: Stress',
    url: 'https://www.apa.org/topics/stress',
  },
  {
    label: 'National Institute of Mental Health: Caring for Your Mental Health',
    url: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health',
  },
];

function LifeBalance() {
  return (
    <TopicPage
      title="Life Balance"
      intro="Balance is not about doing everything, it is about protecting what keeps you steady. These are the everyday basics that hold the rest of college up."
      topics={topics}
      sources={sources}
    />
  );
}

export default LifeBalance;
