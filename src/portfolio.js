const header = {
  homepage: 'https://muhammad-shaharyar-0.github.io/portfolio/',
  title: 'MS.',
}

const about = {
  name: 'Muhammad Shaharyar',
  role: 'Game Programmer | Multiplayer & XR',
  picture: '/profile-images/3.png',

  description:
    'Hi, I’m a game programmer with over 4 years of professional experience building gameplay systems and immersive experiences across multiple platforms. I primarily work with Unity and C#, but am proficient with Unreal 5 and C++ as well, and have contributed to both shipped and prototype projects ranging from multiplayer and co-op games to Web3 titles, mixed reality experiences, casual and hypercasual games. I enjoy tackling technical challenges, designing clean and scalable systems, and turning ideas into engaging, player-focused experiences.',
  resume: 'https://drive.google.com/file/d/12SmGOqPSKkzb4ZZ0gBRfEeyRFEk_qTAB/view?usp=sharing',
  showResume: true,
  social: {
    linkedin: 'https://www.linkedin.com/in/aboutshaharyar/',
    github: 'https://github.com/Muhammad-Shaharyar-0',
    favouriteGames: 'https://www.grouvee.com/user/108085-ZeXXuS/shelves/591562-favorites/',
  },
}

const projects = [
  {
    name: 'Nexus Arcade',
    description:
      'Co-Developer of this mixed reality arcade simulation for Meta Quest blending virtual gameplay with real-world spatial interaction. Includes Boxing, Shooting, Racing, and Ten Pin Bowling with single-player, co-located multiplayer, and online multiplayer. Built around shared spatial experiences and Meta platform social integrations.',
    stack: [
      'Unity C#',
      'Photon Fusion',
      'Mixed Reality (MR)',
      'MR Utility Kit (MRUK)',
      'Spatial Anchors / Co-Location',
      'Meta Social Platform APIs',
    ],
    sourceCode: '',
    livePreview:
      'https://www.meta.com/en-gb/experiences/nexus-arcade/6962116033836064/?require_login=true',
    video: 'Nexus_Arcade.mp4',
    image: '/project-images/Nexus_Arcade.png',
  },
  {
    name: 'Animalia',
    description:
      'A multiplayer PC card game focused on scalable architecture, real-time networking, and live-service features. Built on a customized CCG framework with reactive patterns and dependency injection, integrating Photon Fusion for multiplayer, Unity Multiplay for server orchestration, and PlayFab-backed services for player data, progression, and online play.',
    stack: [
      'Unity C#',
      'Zenject',
      'UniRx',
      'Custom CCG Framework',
      'Photon Fusion',
      'Unity Multiplay',
      'PlayFab',
      'SQL',
      'Addressables',
    ],
    sourceCode: '',
    livePreview: 'https://animalia.games/',
    video: 'Animalia.mp4',
    // NOTE: your file is `Animalia.PNG` (uppercase extension) in public/project-images
    image: '/project-images/Animalia.PNG',
  },
  {
    name: 'Thunder Horse Racing',
    description:
      'Multiplayer mobile horse racing with breeding, campaign, competitive multiplayer, and training modes. Features persistent player data on a remote backend, real-time events, championships, and progression for horse upgrades/customization. Work focused on core gameplay systems, client integration with AWS-backed services, game state management, and UI/UX for online features.',
    stack: [
      'Unity C#',
      'Photon Fusion',
      'Live Realtime Events',
      'Remote Persistence',
      'AWS Backend Integration',
      'Progression Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.multiplayer.thunder.horse.racing&hl=en',
    video: '',
    image: '/project-images/HorseRacing.png',
  },
  {
    name: 'The Search for Warren',
    description:
      'A real-time multiplayer tower defence game built in Unity with Photon Fusion. Features custom AI, NFT integration via MetaMask, and a self-hosted server/client architecture where all calculations are handled server-side to prevent simulation mismatch. Built entirely from scratch using OOP principles with a fully modular event-driven architecture.',
    stack: [
      'Unity C#',
      'Photon Fusion',
      'Tower Defence Systems',
      'Custom AI Implementation',
      'NFT Integration (MetaMask)',
      'Self-Hosted Server Architecture',
      'Modular Event-Driven Design',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'SearchForWarren.mp4', // replace with your actual filename
    image: '/project-images/SearchForWarren.png', // replace with your actual filename
  },
  {
    name: 'Hand Gesture Recognition VR',
    description:
      'A hand gesture recognition system for Oculus Quest 2 using an Artificial Neural Network to interpret gestures in real time within a VR environment. Unity handles the VR side while a Python backend processes gestures through a local server, with a modular architecture allowing new gestures to be added at runtime.',
    stack: [
      'Unity C#',
      'Python',
      'Artificial Neural Network (ANN)',
      'Oculus Quest 2',
      'Real-Time Gesture Processing',
      'Local Server Communication',
    ],
    sourceCode: 'https://github.com/Muhammad-Shaharyar-0/Hand-Guesture-Recognition-VR',
    livePreview: '',
    video: 'HandGestureVR.mp4', // replace with your actual filename
    image: '/project-images/HandGestureVR.png', // replace with your actual filename
  },
  {
    name: 'Texas Holdem',
    description:
      'Co-Developed this multiplayer mobile poker game supporting up to six players per table with real-time synchronized gameplay. Features multiple room configurations with varying buy-in values and gameplay modes, persistent player data, authentication, and social features. Implements turn-based betting logic, server-synchronized game states, and secure session management for fair and consistent gameplay across clients.',
    stack: [
  'Unity C#',
      'Photon PUN2',
      'Turn-Based Game Logic',
      'Room & Matchmaking Systems',
      'Firebase (Auth & Database)',
      'Social Logins (Google, Facebook)',
      'In-Game Chat & Voice Systems',
    ],
    sourceCode: 'https://github.com/Muhammad-Shaharyar-0/Poker_Texas_Holdem',
    livePreview: '',
    video: 'TexasHoldem.mp4',
    image: '/project-images/TexasHoldem.PNG',
  },
  {
    name: 'Emergency Ops: Drive to Rescue',
    description:
      'A multi-phase simulation combining shop management (inventory, shelf stocking, autonomous customer AI) with mission-based emergency operations. Players prepare resources, then deploy specialized vehicles (fire truck, ambulance, etc.) to resolve dynamic rescue missions. Built with scalable, data-driven architecture and structured AI workflows.',
    stack: [
  'Unity C#',
      'Simulation Systems Design',
      'AI Behavior Systems',
      'Command & Queue-Based Architectures',
      'Data-Driven Design (JSON)',
      'Vehicle Control Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://apps.apple.com/uy/app/emergency-ops-drive-to-rescue/id6748608256',
    video: '',
    image: '/project-images/Emergency_Ops.png',
  },
  {
    name: 'Skid Rush - Car Race',
    description:
      'A fast-paced endless racing game inspired by double-drift mechanics, expanded with multiple modes including One Lane, Two Lane, Time Bomb, Speed Test, and AI Multiplayer. Focuses on responsive driving, adaptive AI opponents, and runtime procedural generation for obstacles, power-ups, and road segments.',
    stack: [
  'Unity C#',
      'Adaptive AI Systems',
      'Procedural Content Generation',
      'Runtime Level Generation',
      'Weighted Spawn Algorithms',
    ],
    sourceCode: '',
    livePreview:
      'https://apps.apple.com/us/app/skid-rush-car-race/id6748746985',
    video: '',
    image: '/project-images/SkidRush.png',
  },
  {
    name: 'Can You Retire?',
    description:
      'Co-Developed this multiplayer WebGL board game inspired by classic turn-based board games, supporting up to six players per session. Features card-based mechanics, real-time multiplayer gameplay, and an integrated chat room. Players join private rooms using invitation codes shared via email, with persistent player and session data stored remotely. Required significant customization to adapt Firebase authentication, data storage, and role-based access systems for WebGL platform limitations.',
    stack: [
      'Unity C#',
      'WebGL Deployment',
      'Photon PUN2',
      'Turn-Based Multiplayer System',
      'Custom Firebase Integration(JavaScript Wrapper)',
      'Real-Time Chat Systems',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'CanYouRetire.mp4',
    image: '/project-images/CanYouRetire.PNG',
  },

  {
    name: 'Maze',
    description:
      'A 3D casual game where players navigate progressively challenging maze environments while avoiding multiple AI-controlled enemies with distinct behavior patterns. Features proximity-based chaser enemies and radar-based sentry enemies using line-of-sight detection, plus a customized physics-based character controller built on Puppet Master for dynamic, physics-driven interactions.',
    stack: [
  'Unity C#',
      'AI Behavior Systems',
      'State Machines',
      'Puppet Master (Customized)',
      'Power-Up Systems',
      '3D Level Design',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'Maze.mp4',
    image: '/project-images/Maze.PNG',
  },
  {
    name: 'Ball Bash',
    description:
      'Co-Developed a hyper-casual arcade game where players guide a continuous flow of physics-driven balls through dynamic, obstacle-filled paths to the goal. Players draw runtime meshes to block, redirect, or open routes, affecting how many balls reach the end. Features varied layouts (bumps, cut sections, gaps, jump ramps) and a performance-based reward/progression loop.',
    stack: [
    'Unity C#',
      'Hyper-Casual Game Design',
      'Physics-Based Gameplay',
      'Runtime Mesh Generation',
      'Ads & Monetization Systems',
      'Touch Input Systems',
    ],
    sourceCode: '',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.SynergyGames.BashingBalls&pli=1',
    video: 'BallBash.mp4',
    image: '/project-images/BallBash.PNG',
  },
  {
    name: 'Ophelia',
    description:
      'Co-Developed a first-person mystery puzzle game focused on exploration, environmental storytelling, and clue-based progression. Set within a dark, castle-like environment, players investigate their surroundings, uncover hidden clues, and solve puzzles to advance through interconnected levels. Features an inventory system for collecting and reviewing narrative items such as books and medieval-style scrolls.',
    stack: [
  'Unity C#',
      'Puzzle Design',
      'Inventory Systems',
      'Level Design',
    ],
    sourceCode: '',
    livePreview: '',
    video: 'Ophelia.mp4',
    image: '/project-images/Ophelia.PNG',
  },
  {
  name: 'Chess AI',
  description:
    'A chess game implemented in Python with Player vs Player and Player vs AI modes, featuring a fully working GUI. The AI uses the MinMax algorithm with alpha-beta pruning, evaluating board states using piece values combined with positional values relative to placement. Developed as an AI semester project.',
  stack: [
    'Python',
    'MinMax Algorithm',
    'Alpha-Beta Pruning',
    'State Evaluation',
    'tkinter GUI',
  ],
  sourceCode: 'https://github.com/Muhammad-Shaharyar-0/Chess', // add github link if you have one
  livePreview: '',
  video: 'Chess.mp4', // replace with your actual filename
  image: '/project-images/Chess.png', // replace with your actual filename
  },
  {
    name: 'Snake — x86 Assembly',
    description:
      'A full recreation of the classic Nokia Snake game built entirely in x86 16-bit Real Mode Assembly targeting DOS. Features direct VGA text-mode video memory manipulation, custom Interrupt Service Routines for keyboard and timer, Sound Blaster DSP audio with embedded WAV data, two difficulty levels, dynamic speed scaling and collision detection via direct memory reads.',
    stack: [
      'x86 Assembly (NASM)',
      '16-bit Real Mode',
      'DOS .COM Executable',
      'VGA Memory Manipulation',
      'Custom ISR (Keyboard & Timer)',
      'Sound Blaster DSP',
      'Low-Level Hardware Programming',
    ],
    sourceCode: 'https://github.com/Muhammad-Shaharyar-0/Snake-Game', // add github link if you have one
    livePreview: '',
    video: 'SnakeAssembly.mp4', // replace with your actual filename
    image: '/project-images/SnakeAssembly.png', // replace with your actual filename
  },
]

const skills = [
  {
    category: 'Programming Languages & Frameworks',
    items: ['C#', 'C++', 'Python', '.NET', 'Node.js', 'SQL'],
  },
  {
    category: 'Game Engines & Multiplayer',
    items: [
      'Unity',
      'Unreal Engine 5',
      'Photon (Fusion & Pun2)',
      'Netcode for GameObjects',
    ],
  },
  {
    category: 'Platforms & Deployment',
    items: [
      'XR Development(Meta Quest)',
      'Mobile Game Development(Android & iOS)',
      "WebGL Development",
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      'AWS (Backend & Hosting)',
      'Firebase',
      'Azure PlayFab',
      'Unity Multiplay',
      'Social Platform APIs (Meta, Apple, Google Play)',
    ],
  },
  {
    category: 'Specialised Skills',
    items: [
      'AI and Physics Programming',
      'ProcGen Unreal 5',
      'Game Engine Development',
    ],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Perforce', 'Jenkins', 'Jira'],
  },
]

const contact = {
  email: 'shaheryar1963@gmail.com',
}

export { header, about, projects, skills, contact }
