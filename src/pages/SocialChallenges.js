import React from 'react';
import TopicPage from '../components/TopicPage';

const topics = [
  {
    id: 'friendsSection',
    label: 'Making Friends',
    symptoms:
      'It is hard to know where to start, conversations feel awkward, or you worry you have missed the window to find your people.',
    causes:
      'New environments scatter everyone at first, and friendships take repeated contact to form. Early on, most people are just as unsure as you are.',
    strategies:
      'Go where the same faces show up regularly, since closeness grows from repetition. Take small social risks, and follow up instead of waiting to be invited.',
    advice: [
      'Show up consistently to a class, club, or group so you see the same people.',
      'Start small: a question, a shared complaint about an assignment, a quick hello.',
      'Follow up after a good conversation and suggest something specific.',
      'Say yes to invitations early on, even when it feels easier to stay in.',
      'Give it time, since real friendships usually take weeks, not days.',
    ],
  },
  {
    id: 'roommateSection',
    label: 'Roommate Conflict',
    symptoms:
      'Tension over noise, mess, guests, or sleep. Small annoyances build up, and the room starts to feel uncomfortable to be in.',
    causes:
      'Different habits and unspoken expectations collide. Most roommate conflict comes from things that were never actually talked through.',
    strategies:
      'Set expectations early and revisit them. Bring things up while they are still small, and aim for a specific agreement rather than winning the argument.',
    advice: [
      'Talk early, before small annoyances turn into resentment.',
      'Name the specific behavior and how it affects you, not the person.',
      'Agree on a few clear ground rules for noise, guests, and shared space.',
      'Pick a calm moment to talk, not the middle of the frustration.',
      'If it stays stuck, bring in a resident advisor to help mediate.',
    ],
  },
  {
    id: 'socialAnxietySection',
    label: 'Social Anxiety',
    symptoms:
      'Intense worry about being judged, avoiding social situations, or replaying interactions afterward. Your body might race, blush, or freeze up.',
    causes:
      'Social anxiety often comes from a fear of negative judgment. Past experiences and a habit of focusing inward can make it stronger.',
    strategies:
      'Face feared situations in small, gradual steps rather than avoiding them. Shift your attention outward to the conversation, and question the assumption that everyone is watching and judging.',
    advice: [
      'Start with lower-stakes social situations and build up gradually.',
      'Focus on the other person and the conversation, not on how you are coming across.',
      'Prepare a few openers so starting feels less daunting.',
      'Challenge the thought that people are judging you as harshly as you fear.',
      'If it is limiting your life, a counselor can help, and treatment works well.',
    ],
  },
  {
    id: 'peerPressureSection',
    label: 'Peer Pressure',
    symptoms:
      'Feeling pushed toward things you are not comfortable with, going along to fit in, or feeling uneasy after giving in. It can be loud or very subtle.',
    causes:
      'The pull to belong is strong, especially in a new place. Pressure often is not direct, it is the sense that everyone else is doing it.',
    strategies:
      'Know your limits before you are in the moment, and keep a few exit lines ready. Spend time with people who respect a no, since the right crowd makes this easy.',
    advice: [
      'Decide your limits ahead of time so you are not choosing under pressure.',
      "Keep a couple of simple exit lines ready, like 'I am good, thanks.'",
      'Use the buddy system with a friend who has your back.',
      'Notice that real friends do not push once you say no.',
      'Give yourself permission to leave any situation that feels off.',
    ],
  },
  {
    id: 'fomoSection',
    label: 'FOMO and Comparison',
    symptoms:
      'Scrolling and feeling behind, like everyone else is happier or more connected. A nagging sense that you are missing out on the real experience.',
    causes:
      "Social media shows everyone's highlights, not their full days. Comparing your behind-the-scenes to their best moments is a losing game.",
    strategies:
      'Cut the inputs that make you feel worse, and remember you are seeing a curated version. Invest in what actually matters to you rather than keeping score.',
    advice: [
      'Notice which feeds leave you feeling worse, and mute or limit them.',
      "Remind yourself you are comparing your inside to someone else's highlight reel.",
      'Trade some scrolling time for something that genuinely recharges you.',
      'Focus on a few relationships and activities you actually care about.',
      'Take a short break from social media when comparison ramps up.',
    ],
  },
  {
    id: 'boundariesSection',
    label: 'Boundaries',
    symptoms:
      'Overcommitting, trouble saying no, or feeling drained and resentful. You might put everyone else first until there is nothing left for you.',
    causes:
      'Boundaries feel hard when you worry about disappointing people or being disliked. Many of us were never taught that no is a complete sentence.',
    strategies:
      'Get clear on your limits, then state them simply and early. You can be kind and firm at the same time, and you do not owe a long justification.',
    advice: [
      'Practice saying no clearly and without a long apology.',
      'Protect your time and energy for what matters most to you.',
      'Be direct about what you need, since people cannot read your mind.',
      'Expect a little discomfort at first, especially with people used to a yes.',
      'Spend more time with people who respect your limits.',
    ],
  },
];

const sources = [
  {
    label: 'National Institute of Mental Health: Social Anxiety Disorder',
    url: 'https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness',
  },
  {
    label: 'American Psychological Association: Social Support and Stress',
    url: 'https://www.apa.org/topics/stress/manage-social-support',
  },
  {
    label: 'The Jed Foundation: Mental Health Resource Center',
    url: 'https://jedfoundation.org/mental-health-resource-center/',
  },
  {
    label: 'Centers for Disease Control and Prevention: About Mental Health',
    url: 'https://www.cdc.gov/mental-health/',
  },
];

function SocialChallenges() {
  return (
    <TopicPage
      title="Social Challenges"
      intro="College is a crash course in new relationships, and that comes with friction. These are common social challenges, with grounded ways to build connection and handle conflict."
      topics={topics}
      sources={sources}
    />
  );
}

export default SocialChallenges;
