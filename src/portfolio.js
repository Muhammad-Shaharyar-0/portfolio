// Everything shown on the site lives in this file.
// Videos can be a local file in public/videos (e.g. 'Animalia.mp4') OR a YouTube link
// (https://www.youtube.com/watch?v=...), which is embedded and never needs a redeploy.

const analytics = {
  // Sign up free at https://www.goatcounter.com, pick a site code (e.g. "shaharyar"),
  // and put just that code here. Leave empty to switch analytics off.
  goatcounterCode: 'zexxus',
}

const header = {
  homepage: 'https://muhammad-shaharyar-0.github.io/portfolio/',
  title: 'MS',
}

const about = {
  name: 'Muhammad Shaharyar',
  role: 'Game Programmer',
  picture: '/profile-images/3.webp',
  description:
    'Hi, I’m a game programmer with over 4 years of professional experience building gameplay systems and immersive experiences across multiple platforms. I primarily work with Unity and C#, but am proficient with Unreal 5 and C++ as well, and have contributed to both shipped and prototype projects ranging from multiplayer and co-op games to Web3 titles, mixed reality experiences, casual and hypercasual games. I enjoy tackling technical challenges, designing clean and scalable systems, and turning ideas into engaging, player-focused experiences.',
  currently: [
    { title: 'Lead Developer', place: 'Nexus Arcade Studio' },
    { title: 'Games Lecturer', place: 'SAE Institute' },
  ],
  stats: [
    { value: '4+', label: 'years building shipped games across mobile, XR and PC' },
    { value: '50M+', label: 'Play Store downloads on a mobile game I maintained' },
    { value: 'Live', label: 'on the Meta Quest store: Nexus Arcade, mixed reality multiplayer' },
  ],
  resume:
    'https://drive.google.com/file/d/12SmGOqPSKkzb4ZZ0gBRfEeyRFEk_qTAB/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aboutshaharyar/',
    github: 'https://github.com/Muhammad-Shaharyar-0',
    favouriteGames: 'https://www.grouvee.com/user/108085-ZeXXuS/shelves/591562-favorites/',
  },
}

// keys: skills used by the project. They drive the filter chips and the Skills section.
const projects = [
  {
    id: 'nexus',
    title: 'Nexus Arcade',
    kind: 'Meta Quest · Mixed reality',
    description:
      'Mixed reality arcade with boxing, shooting, racing and bowling. Co-located and online multiplayer on Photon Fusion, with Meta platform integrations.',
    image: '/project-images/Nexus_Arcade.webp',
    fit: 'contain',
    position: 'center',
    background: '#0b0b2c',
    video: 'Nexus_Arcade.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'MRUK', 'Co-location'],
    keys: ['C#', 'Unity', 'Photon', 'XR', 'Multiplayer'],
    links: [
      {
        label: 'Meta Store',
        url: 'https://www.meta.com/en-gb/experiences/nexus-arcade/6962116033836064/',
      },
    ],
  },
  {
    id: 'animalia',
    title: 'Animalia',
    kind: 'PC · Live-service card game',
    description:
      'Multiplayer card game on a custom CCG framework with Zenject and UniRx. Photon Fusion networking, Unity Multiplay servers and PlayFab services.',
    image: '/project-images/Animalia.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'Animalia.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'PlayFab', 'Multiplay', 'SQL'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'PlayFab', 'Multiplay', 'SQL'],
    links: [{ label: 'Website', url: 'https://animalia.games/' }],
  },
  {
    id: 'warren',
    title: 'The Search for Warren',
    kind: 'PC · Real-time tower defence',
    description:
      'Real-time multiplayer tower defence with custom AI and a self-hosted, server-authoritative architecture built from scratch on Photon Fusion.',
    image: '/project-images/SearchForWarren.webp',
    fit: 'cover',
    position: 'center 18%',
    background: '#0b0b0e',
    video: 'SearchForWarren.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'Custom AI', 'Server-side simulation'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'AI'],
    links: [],
  },
  {
    id: 'gesture',
    title: 'Hand Gesture Recognition VR',
    kind: 'VR · MSc dissertation',
    description:
      'Real-time hand gesture recognition on Quest 2. A neural network in a Python backend, with Unity on the headset and gestures that can be added at runtime.',
    image: '/project-images/HandGestureVR.webp',
    fit: 'cover',
    position: 'center top',
    background: '#f2f2f2',
    video: 'HandGestureVR.mp4',
    tags: ['Unity', 'C#', 'Python', 'Neural network', 'Quest 2'],
    keys: ['C#', 'Unity', 'Python', 'XR', 'AI'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Muhammad-Shaharyar-0/Hand-Guesture-Recognition-VR',
      },
    ],
  },
  {
    id: 'emergency',
    title: 'FireTruck Ops: Rescue Game',
    kind: 'Mobile · Simulation',
    description:
      'Shop management meets rescue missions: stock up, then drive fire trucks and ambulances to dynamic emergencies. Data-driven design with structured AI workflows.',
    image: '/project-images/Emergency_Ops.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: '',
    tags: ['Unity', 'C#', 'AI behaviour', 'Data-driven (JSON)', 'Vehicle control'],
    keys: ['C#', 'Unity', 'Mobile', 'AI'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/uy/app/emergency-ops-drive-to-rescue/id6748608256',
      },
    ],
  },
  {
    id: 'crazycar',
    title: 'Crazy Car Driving',
    kind: 'Android · 50M+ downloads',
    description:
      'A multi-level car driving obstacle course game with over 50 million downloads on Google Play. I worked on it as part of a studio, building new levels, extending the car physics, adding support for multiple vehicles and optimising performance on Android, nearly doubling the original performance.',
    image: '/project-images/CrazyCar.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'Crazy Car Driving.mp4',
    tags: ['Unity', 'C#', 'Car physics', 'Level design', 'Optimisation'],
    keys: ['C#', 'Unity', 'Mobile', 'AI'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.jimaapps.crazycardriving.impossiblestunt.driving.simulator.games',
      },
    ],
  },
  {
    id: 'retire',
    title: 'Can You Retire?',
    kind: 'WebGL · Multiplayer board game',
    description:
      'Six-player WebGL board game about financial management, with private rooms, chat and a custom Firebase wrapper to work around WebGL limits.',
    image: '/project-images/CanYouRetire.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'CanYouRetire.mp4',
    tags: ['Unity', 'C#', 'WebGL', 'Photon PUN2', 'Firebase'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'WebGL', 'Firebase'],
    links: [],
  },
  {
    id: 'compiler',
    title: 'C++ Compiler',
    kind: 'C++ · Systems programming',
    description:
      'A compiler for a custom language that generates machine code, with instruction optimisation. Written in C++.',
    image: '',
    fit: 'cover',
    position: 'center',
    background: '#16161a',
    video: '',
    tags: ['C++', 'Compiler', 'Code generation', 'Optimisation'],
    keys: ['C++'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Muhammad-Shaharyar-0/Compiler',
      },
    ],
  },
]

// Order of the filter chips (a chip only shows if at least one project uses it).
const filterOrder = [
  'C#', 'C++', 'Python', 'Unity', 'Unreal', 'XR', 'Multiplayer', 'Mobile', 'WebGL', 'AI',
]
const filterLabels = { XR: 'XR / VR', WebGL: 'Web (WebGL)', Unreal: 'Unreal Engine' }

// A skill with a `key` opens the project window; one without is shown as plain text.
const skillGroups = [
  {
    name: 'Languages',
    items: [
      { label: 'C#', key: 'C#' },
      { label: 'C++', key: 'C++' },
      { label: 'Python', key: 'Python' },
      { label: 'SQL', key: 'SQL' },
    ],
  },
  {
    name: 'Engines, networking & AI',
    items: [
      { label: 'Unity', key: 'Unity' },
      { label: 'Photon Fusion & PUN2', key: 'Photon' },
      { label: 'Multiplayer systems', key: 'Multiplayer' },
      { label: 'AI & physics', key: 'AI' },
      { label: 'Unreal Engine 5' },
    ],
  },
  {
    name: 'Platforms',
    items: [
      { label: 'XR: Meta Quest', key: 'XR' },
      { label: 'Mobile: Android & iOS', key: 'Mobile' },
      { label: 'WebGL', key: 'WebGL' },
    ],
  },
  {
    name: 'Backend & cloud',
    items: [
      { label: 'AWS', key: 'AWS' },
      { label: 'Firebase', key: 'Firebase' },
      { label: 'Azure PlayFab', key: 'PlayFab' },
      { label: 'Unity Multiplay', key: 'Multiplay' },
    ],
  },
  {
    name: 'Workflow',
    items: [
      { label: 'Git' },
      { label: 'GitHub' },
      { label: 'Perforce' },
      { label: 'Jenkins' },
      { label: 'Jira' },
    ],
  },
]

const certifications = [
  {
    id: 'unity',
    provider: 'GameDev.tv · Udemy',
    title: 'Complete C# Unity Game Developer 3D',
    detail: 'Completed 9 June 2020 · 34 hours',
    url: 'https://www.udemy.com/certificate/UC-5b860926-e9e9-42bc-9a2c-384cb9d7fd0d/',
  },
  {
    id: 'unreal',
    provider: 'GameDev.tv · Udemy',
    title: 'Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games',
    detail: 'Completed 5 December 2022 · 29.5 hours',
    url: 'https://www.udemy.com/certificate/UC-828bd435-5f21-40b9-8dc6-a30ff579ffb7/',
  },
]

const contact = {
  email: 'shaheryar1963@gmail.com',
}

export {
  analytics,
  header,
  about,
  projects,
  filterOrder,
  filterLabels,
  skillGroups,
  certifications,
  contact,
}
