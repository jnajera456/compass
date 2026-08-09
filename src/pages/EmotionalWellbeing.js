import React from 'react';
import TopicPage from '../components/TopicPage';

const topics = [
  {
    id: 'anxietySection',
    label: 'Anxiety',
    symptoms:
      'Racing thoughts, a tight chest, trouble sleeping, or a constant sense that something is about to go wrong. Anxiety can make it hard to focus or sit still.',
    causes:
      'Anxiety can be set off by academic pressure, big life changes, money worries, or uncertainty about the future. Sleep, caffeine, and genetics all play a part too.',
    strategies:
      'Slow your breathing to signal your body that you are safe. Name what you are worried about, and separate what you can control from what you cannot. Steady sleep, movement, and less caffeine bring the baseline down.',
    advice: [
      'Try a slow breathing exercise, like breathing in for four counts and out for six.',
      'Write your worries down and mark which ones you can actually act on.',
      'Keep a steady sleep schedule and go easy on caffeine, especially late in the day.',
      'Move your body most days, even a short walk helps.',
      'If anxiety is frequent or getting in the way of daily life, talk to a counselor or doctor.',
    ],
  },
  {
    id: 'lowMoodSection',
    label: 'Low Mood',
    symptoms:
      'Ongoing sadness, low energy, losing interest in things you used to enjoy, or feeling flat and unmotivated for a stretch of time.',
    causes:
      'Low mood can follow stress, isolation, poor sleep, or hard life events. Sometimes it builds without a clear reason, which is also normal.',
    strategies:
      'Keep some structure to your days, stay connected to people, and do small things that used to give you a lift, even when you do not feel like it. Daylight and movement help more than they seem to.',
    advice: [
      'Hold on to a basic daily routine for sleep, meals, and study.',
      'Reach out to one person, even a short message counts.',
      'Do one small activity you usually enjoy, without waiting to feel motivated first.',
      'Get some daylight and movement each day.',
      'If low mood lasts more than two weeks or feels heavy, reach out to a counselor or your campus health service.',
    ],
  },
  {
    id: 'overwhelmSection',
    label: 'Stress and Overwhelm',
    symptoms:
      'Everything feels like too much at once, your mind is cluttered, and small tasks start to feel impossible. You might feel wired and exhausted at the same time.',
    causes:
      'Overwhelm usually comes from too many demands landing together, unclear priorities, or not enough recovery time between them.',
    strategies:
      'Get everything out of your head and onto a list, then pick the one next step. Break big things into smaller pieces, and protect real breaks so your system can reset.',
    advice: [
      'Write every task onto one list so it is out of your head.',
      'Choose a single next action and start there.',
      'Break large tasks into smaller, clearer steps.',
      'Say no or ask for an extension when your plate is genuinely full.',
      'Protect short breaks and real rest, since they are part of the work.',
    ],
  },
  {
    id: 'homesicknessSection',
    label: 'Homesickness',
    symptoms:
      'Missing home, family, or familiar routines. It can show up as sadness, trouble settling in, or comparing your new life to the one you left.',
    causes:
      'Homesickness is a normal response to a big transition. It is often stronger early on, during holidays, or when things feel unfamiliar and hard.',
    strategies:
      'Stay in touch with home while you build new routines and connections where you are. Give yourself time, and make your space feel a little more like yours.',
    advice: [
      'Set up regular calls or messages with people back home.',
      'Build small routines and comforts in your new place.',
      'Join a club or activity to meet people and fill your week.',
      'Bring in a few familiar items or foods that feel like home.',
      'Give yourself time, since settling in usually gets easier over the weeks.',
    ],
  },
  {
    id: 'lonelinessSection',
    label: 'Loneliness',
    symptoms:
      'Feeling disconnected or unseen, even around other people. You might pull back, scroll more, or feel like everyone else has already found their group.',
    causes:
      'Loneliness is common in a new environment where friendships are still forming. Comparison, especially online, can make it feel worse than it is.',
    strategies:
      'Put yourself in places where connection can happen, again and again, since friendships build through repetition. Reach out first, and go easy on the comparison.',
    advice: [
      'Show up regularly to a class, club, or space where you see the same people.',
      'Reach out first and suggest something specific, like grabbing coffee.',
      'Cut back on comparison scrolling, since it rarely tells the full story.',
      'Deepen one or two connections rather than chasing a big crowd.',
      'If loneliness feels heavy or lasting, a counselor can help you work through it.',
    ],
  },
  {
    id: 'selfEsteemSection',
    label: 'Self-Esteem',
    symptoms:
      'Harsh self-talk, doubting your worth, or feeling like you are not good enough compared to others. It can hold you back from trying or speaking up.',
    causes:
      'Low self-esteem can grow from past criticism, comparison, or high-pressure settings where you only measure yourself by results.',
    strategies:
      'Notice the inner critic and answer it like you would a friend. Base your worth on more than performance, and give yourself credit for effort and small wins.',
    advice: [
      'Catch harsh self-talk and reframe it into something fairer.',
      'Keep a short list of things you did well or are proud of.',
      'Measure yourself against your own progress, not other people.',
      'Set small, reachable goals and acknowledge when you meet them.',
      'Spend time with people who treat you well and build you up.',
    ],
  },
];

const sources = [
  {
    label: 'National Institute of Mental Health: Anxiety Disorders',
    url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
  },
  {
    label: 'National Institute of Mental Health: Depression',
    url: 'https://www.nimh.nih.gov/health/topics/depression',
  },
  {
    label: 'American Psychological Association: Loneliness',
    url: 'https://www.apa.org/topics/loneliness',
  },
  {
    label: 'The Jed Foundation: Mental Health Resource Center',
    url: 'https://jedfoundation.org/mental-health-resource-center/',
  },
];

function EmotionalWellbeing() {
  return (
    <TopicPage
      title="Emotional Well-being"
      intro="Your emotional well-being shapes how you handle everything else in college. These are common struggles, with practical ways to steady yourself and know when to reach for more support."
      topics={topics}
      sources={sources}
    />
  );
}

export default EmotionalWellbeing;
