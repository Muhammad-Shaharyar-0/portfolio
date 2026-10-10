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
  picture: '',
  description:
    'I’m a game programmer with over 4 years of professional experience shipping games on Meta Quest, Android, iOS and WebGL. I work mainly in Unity and C#, with a focus on multiplayer and networked gameplay (Photon Fusion and PUN), mixed reality, and mobile performance. I’m currently Lead Developer at Nexus Arcade Studio, where I run a live mixed reality multiplayer game, and I teach games programming at SAE Institute. I enjoy building clean, efficient systems, and I’m particularly strong at bug fixing and refactoring tangled legacy codebases. My main passion is problem solving: I love getting stuck into a complex problem that needs creative thinking and my full focus, and the satisfaction of finally solving it.',
  currently: [
    { title: 'Lead Developer', place: 'Nexus Arcade Studio' },
    { title: 'Games Lecturer', place: 'SAE Institute' },
  ],
  education: [
    { title: 'MSc Game Development', place: 'University of Hull' },
    { title: 'BS Computer Science', place: 'NUCES' },
    { title: 'MSc Cybersecurity Management', place: 'University of Law', note: 'in progress' },
  ],
  stats: [
    { value: '4+', label: 'years building shipped games across mobile, XR and PC' },
    { value: '50M+', label: 'Play Store downloads on a mobile game I worked on' },
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
// role: one line on what I did. facts: three quick technical details shown on the card.
// breakdown: the short technical write-up opened from the card.
// Projects with a detailed breakdown come first; the rest follow.
const projects = [
  {
    id: 'nexus',
    title: 'Nexus Arcade',
    kind: 'Meta Quest · Mixed reality',
    description:
      'Mixed reality arcade with boxing, shooting, racing and bowling. Co-located and online multiplayer on Photon Fusion, with Meta platform integrations.',
    role: 'Lead developer · gameplay and multiplayer programmer',
    facts: [
      ['Engine', 'Unity 6'],
      ['Networking', 'Photon Fusion 1, Shared mode'],
      ['Platform', 'Meta Quest · Meta XR SDK, MRUK, Depth API'],
    ],
    image: '/project-images/Nexus_Arcade.webp',
    fit: 'contain',
    position: 'center',
    background: '#0b0b2c',
    video: 'Nexus_Arcade.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'MRUK', 'Co-location'],
    keys: ['C#', 'Unity', 'Photon', 'XR', 'Multiplayer', 'GameAI'],
    links: [{ label: 'Website', url: 'https://nexusarcadevr.com/' }],
    breakdown: {
      about:
        'Nexus Arcade turns your own room into a virtual arcade. The headset’s cameras scan the space, and four games (racing, bowling, boxing and shooting) are placed in it. Friends can play together in the same room or from different homes.',
      tech: ['Unity 6', 'C#', 'Photon Fusion 1 (Shared mode)', 'Photon Voice', 'Meta XR SDK', 'Meta Interaction SDK', 'Meta Mixed Reality Utility Kit (MRUK)', 'Meta Depth API', 'Meta Avatars SDK', 'Spatial anchors', 'Unity NavMesh', 'URP', 'Unity Profiler', 'Network programming', 'Gameplay programming'],
      features: [
        {
          title: 'Multiplayer sessions',
          points: [
            'Photon Fusion 1 in Shared mode: a shell scene spawns each game as a networked prefab when a player picks it.',
            'Public rooms, private rooms with a room code and quick play run through a Photon lobby, and friend invites use deep links from the Meta Platform SDK.',
            'Co-location uses Meta’s colocation package (shared spatial anchors) to line players up in the same room, and falls back to joining remotely if the anchor cannot be shared.',
            'Meta Avatars SDK represents each player in the arcade.',
          ],
        },
        {
          title: 'Kart racing',
          points: [
            'Photon Fusion state authority gives each player ownership of their own kart. Control is handed over in a fixed order: request authority, wait until it is granted, then enable input.',
            'Fusion interpolation settings were tuned to remove stutter and desync when karts pass close together at speed.',
            'A mini map and a look-back camera were added for racers.',
          ],
        },
        {
          title: 'Mixed reality',
          points: [
            'Meta’s Mixed Reality Utility Kit (MRUK) reads the scanned room.',
            'The Depth API (environment depth) uses MRUK room objects as masks, so real objects hide virtual ones.',
            'Unity AI Navigation builds a NavMesh from the room at runtime, so animals spawn from a portal and move around the player’s real space.',
          ],
        },
        {
          title: 'Shooting and bowling',
          points: [
            'Guns and bowling balls are grabbed with the Meta Interaction SDK (hand grab and distance grab), customised with Meta building blocks.',
            'Photon Fusion passes an ammo clip’s authority to the player holding it, and clips are switched with hand controls.',
            'Bowling uses a custom throw tuner built on the Interaction SDK’s ThrowTuner, and C# scoring that handles strikes, spares and the tenth frame.',
          ],
        },
        {
          title: 'Performance',
          points: [
            'The Unity Profiler and Memory Profiler were used to find the most expensive scripts and allocations.',
            'Tightly coupled scripts were decoupled, and scene-wide object searches were replaced with event-based registration, to hold the Quest’s 72 FPS target.',
          ],
        },
      ],
    },
  },
  {
    id: 'crazycar',
    title: 'Crazy Car Driving',
    kind: 'Android · 50M+ downloads',
    description:
      'A multi-level car driving obstacle game with over 50 million downloads on Google Play. I was brought in to fix the app-not-responding errors that were hurting its store ranking, then improved performance, set up the in-app advertising and built a level-maker tool for new levels and an endless mode.',
    role: 'Gameplay and tools programmer · level designer',
    facts: [
      ['Engine', 'Unity · Android'],
      ['Focus', 'ANR rate, memory and frame rate'],
      ['Targets', 'Steady 60 FPS, memory on low-end devices'],
    ],
    image: '/project-images/CrazyCar.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'Crazy Car Driving.mp4',
    tags: ['Unity', 'C#', 'Profiling', 'Optimisation', 'Level tools', 'In-app ads'],
    keys: ['C#', 'Unity', 'Mobile'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.jimaapps.crazycardriving.impossiblestunt.driving.simulator.games',
      },
    ],
    breakdown: {
      about:
        'A mobile driving game where you steer powerful cars along stunt tracks and obstacle courses. It has over 50 million downloads on Google Play.',
      tech: ['Unity', 'C#', 'Android (IL2CPP)', 'Google Play Console', 'Firebase', 'Google Sign-In', 'Google Ads', 'AppLovin', 'ironSource', 'Unity Profiler', 'Unity Memory Profiler', 'Level design', 'Texture atlasing', 'Batching', 'Level-maker tool', 'Procedural generation'],
      features: [
        {
          title: 'Stability on low-end devices',
          points: [
            'Google Play Console data showed the ANRs were concentrated on older, low-end phones.',
            'The Unity Profiler and Memory Profiler showed what blocked start-up and what used the most memory.',
            'The third-party SDKs (Firebase, Google Sign-In) were reimplemented properly, fixing misused APIs and authentication logic that contributed to the ANRs.',
            'Texture compression was changed to a more suitable format, with stronger compression on textures that are rarely visible.',
            'UI textures were packed into atlases to reduce batches and render calls, and meshes and models were combined to cut draw calls.',
          ],
        },
        {
          title: 'Frame rate',
          points: [
            'The Unity Profiler on the gameplay scenes showed where frame time was spent.',
            'Code that relied too heavily on Update() was reworked so it no longer ran every frame.',
            'Texture and shader settings that were too high for a mobile game were lowered.',
            'Batching, atlasing and mesh combining were tested side by side to find what reduced render calls most.',
            'Together with the memory work above, this held a steady 60 FPS on mobile.',
          ],
        },
        {
          title: 'In-app advertising',
          points: [
            'Set up rewarded, interstitial and banner ads using Google Ads and the AppLovin and ironSource ad networks.',
            'Integrated each network’s Unity SDK and wired the ad calls into the game flow.',
          ],
        },
        {
          title: 'Levels and obstacles',
          points: [
            'Built a level-maker tool in Unity (C#). It takes a list of prefabs (straight road, left and right curves, and roads with different obstacles and jumps), each with a spawn point and an end point.',
            'The tool snaps the prefabs together end to end to assemble levels in many different permutations.',
            'Extended the same script to run at run time as an endless mode: it keeps placing new obstacles ahead of the car and removes earlier prefabs after a delay to save memory.',
            'The generator includes logic to avoid repeating sections or picking the same type of prefab too often.',
          ],
        },
      ],
    },
  },
  {
    id: 'fruit',
    title: 'Fruit Munch',
    kind: 'Mobile · Match-three',
    description:
      'A match-three puzzle game built with a small team for a children’s charity. I improved the match detection and cascades, designed the leaderboard on Unity Gaming Services and am moving in-app purchases to Unity IAP.',
    role: 'Lead developer · gameplay programmer',
    facts: [
      ['Engine', 'Unity 6'],
      ['Services', 'Unity Gaming Services · Authentication, Leaderboards'],
      ['Content', '31 levels, seeded boards, special tiles'],
    ],
    image: '/project-images/FruitMunch.webp',
    fit: 'contain',
    position: 'center',
    background: '#fdf5de',
    video: '',
    tags: ['Unity', 'C#', 'Unity Gaming Services', 'Leaderboards', 'Match-3'],
    keys: ['C#', 'Unity', 'Mobile'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.Games4Good.FruitMunchGO&hl=en_GB',
      },
    ],
    breakdown: {
      about:
        'A colourful match-three puzzle game: swap neighbouring fruit to line up three or more and clear the board. It is built for a children’s charity.',
      tech: ['Unity 6', 'C#', 'Unity Gaming Services (Authentication, Leaderboards)', 'Unity IAP', 'Input System', 'Android', 'Gameplay programming'],
      features: [
        {
          title: 'Match detection and cascades',
          points: [
            'C# scans rows and columns for runs of three or more; runs of four or more create special tiles.',
            'After tiles fall, only the tiles that moved or spawned are re-checked, so new matches are found without rescanning the board.',
            'Input is locked until the board stops moving, so a cascade cannot be interrupted.',
          ],
        },
        {
          title: 'Level structure',
          points: [
            'Every level is a Unity scene using one shared Level prefab.',
            'A scene only sets its level number, random seed, score target and grid shape, and the seed makes each board reproducible.',
          ],
        },
        {
          title: 'Leaderboard',
          points: [
            'Unity Gaming Services Authentication signs players in anonymously.',
            'Unity Leaderboards stores each player’s total, which is the sum of their best score on every level, so replaying only adds the improvement.',
            'Scores queue and retry when the player is offline.',
          ],
        },
        {
          title: 'In-app purchases',
          points: [
            'Purchases are being moved from a third-party storefront plugin to Unity IAP.',
          ],
        },
      ],
    },
  },
  {
    id: 'retire',
    title: 'Can You Retire?',
    kind: 'WebGL · Multiplayer board game',
    description:
      'Six-player WebGL board game about financial management, with private rooms, chat and a Firestore layer built to work around the lack of a Firebase SDK for WebGL.',
    role: 'Back-end, gameplay and network programmer',
    facts: [
      ['Engine', 'Unity 2021 · WebGL'],
      ['Networking', 'Photon PUN, relay model with room properties'],
      ['Backend', 'Firebase Authentication and Firestore'],
    ],
    image: '/project-images/CanYouRetire.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'CanYouRetire.mp4',
    tags: ['Unity', 'C#', 'WebGL', 'Photon PUN', 'Firebase'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'WebGL', 'Firebase'],
    links: [],
    breakdown: {
      about:
        'An educational board game, in the spirit of Monopoly, that teaches financial management. Players join an online room and take turns, and it runs directly in a web browser.',
      tech: ['Unity 2021 (WebGL)', 'C#', 'Photon PUN', 'Firebase Authentication', 'Cloud Firestore', 'JavaScript plugin', 'Back-end programming', 'Network programming', 'Gameplay programming'],
      features: [
        {
          title: 'Turn-based multiplayer',
          points: [
            'Photon PUN is used as a relay: the active player’s client works out their turn and sends the result to everyone with RPCs.',
            'Shared state (turn order, room code, shuffled card decks) is kept in Photon room properties and set up by the master client.',
          ],
        },
        {
          title: 'Rejoining and spectating',
          points: [
            'Players who disconnect can rejoin through PUN and the game restores their place.',
            'An admin can join a running game as a spectator.',
          ],
        },
        {
          title: 'Running in a browser',
          points: [
            'A JavaScript timer keeps the Photon connection alive in background tabs, which browsers throttle.',
            'Unity has no Firebase SDK for WebGL, so a JavaScript plugin bridges to Firebase’s web SDK, with my own C# layer on top for Firebase Authentication and Cloud Firestore.',
          ],
        },
        {
          title: 'Admin tools and data',
          points: [
            'Card values are stored in Cloud Firestore and can be edited in the game by an admin.',
            'Every match is saved and can be exported as a per-player CSV.',
          ],
        },
      ],
    },
  },
  {
    id: 'animalia',
    title: 'Animalia',
    kind: 'PC · Live-service card game',
    description:
      'Multiplayer card game on a custom CCG framework with Zenject and UniRx. Photon Fusion networking, Unity Multiplay servers and PlayFab services.',
    role: 'Game and network programmer',
    facts: [
      ['Framework', 'Custom CCG framework, Zenject, UniRx'],
      ['Networking', 'Photon Fusion'],
      ['Services', 'Unity Multiplay, PlayFab'],
    ],
    image: '/project-images/Animalia.webp',
    fit: 'cover',
    position: 'center',
    background: '#0b0b0e',
    video: 'Animalia.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'PlayFab', 'Multiplay', 'SQL'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'PlayFab', 'Multiplay', 'SQL'],
    links: [{ label: 'Website', url: 'https://animalia.games/' }],
    breakdown: {
      about:
        'An online multiplayer collectible card game where players battle each other with their cards.',
      tech: ['Unity', 'C#', 'Zenject', 'UniRx', 'Photon Fusion', 'Unity Multiplay', 'Azure PlayFab', 'SQL', 'Network programming'],
      features: [
        {
          title: 'Card game framework',
          points: [
            'The game runs on a custom collectible card game framework in C#.',
            'Zenject provides dependency injection and UniRx provides reactive programming.',
          ],
        },
        {
          title: 'Online play',
          points: [
            'Photon Fusion handles networking.',
            'Game servers are hosted on Unity Multiplay, PlayFab provides the player services and SQL stores data.',
          ],
        },
      ],
    },
  },
  {
    id: 'gesture',
    title: 'Hand Gesture Recognition VR',
    kind: 'VR · MSc dissertation',
    description:
      'Real-time hand gesture recognition on Quest 2. A neural network in a Python backend, with Unity on the headset and gestures that can be added at runtime.',
    role: 'Solo · machine learning and VR programmer',
    facts: [
      ['Hardware', 'Meta Quest 2, hand tracking'],
      ['Model', 'Dense network, 72 input features (Keras)'],
      ['Backend', 'Flask prediction server'],
    ],
    image: '/project-images/HandGestureVR.webp',
    fit: 'cover',
    position: 'center top',
    background: '#f2f2f2',
    video: 'HandGestureVR.mp4',
    tags: ['Unity', 'C#', 'Python', 'TensorFlow', 'Quest 2'],
    keys: ['C#', 'Unity', 'Python', 'XR'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Muhammad-Shaharyar-0/Hand-Guesture-Recognition-VR',
      },
    ],
    breakdown: {
      about:
        'A research prototype that lets a VR player teach the game new hand gestures. You record a gesture with your hand in the headset, the system learns it, and the game then recognises it as an input.',
      tech: ['Unity', 'C#', 'Meta Quest 2', 'Meta XR SDK (hand tracking)', 'Python', 'TensorFlow / Keras', 'scikit-learn', 'Flask', 'Machine learning'],
      features: [
        {
          title: 'Capturing a gesture',
          points: [
            'Unity reads the positions of 24 hand bones from the Meta hand skeleton (Meta XR SDK).',
            'Positions are taken relative to the hand, so a gesture does not depend on where the hand is in the room.',
            'Each frame becomes a list of 72 numbers.',
          ],
        },
        {
          title: 'Training the model',
          points: [
            'A Python script normalises the recorded data with scikit-learn.',
            'A small dense neural network (layers of 128 and 64 units, softmax output) is trained in TensorFlow and Keras.',
            'Two network sizes are trained and compared on their loss and accuracy curves.',
          ],
        },
        {
          title: 'Recognising gestures live',
          points: [
            'A Flask server loads the model and returns the predicted gesture for each pose sent from the headset, or no gesture below 70% confidence.',
            'A retrain command lets a player add a new gesture and rebuild the model without leaving the app.',
          ],
        },
      ],
    },
  },
  {
    id: 'compiler',
    title: 'C++ Compiler',
    kind: 'C++ · Compiler programming',
    description:
      'A compiler and virtual machine for a custom language, written in C++. It parses source into a parse tree, generates three-address code and machine code, and runs the result.',
    role: 'Solo · compiler programmer',
    facts: [
      ['Language', 'C++, around 1,700 lines'],
      ['Stages', 'Lexer, parser, three-address code, code generator'],
      ['Target', 'Custom virtual machine'],
    ],
    image: '/project-images/Compiler.webp',
    fit: 'cover',
    position: 'center',
    background: '#16161a',
    video: 'Compiler.mp4',
    tags: ['C++', 'Compiler', 'Parsing', 'Code generation', 'Virtual machine'],
    keys: ['C++'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Muhammad-Shaharyar-0/Compiler',
      },
    ],
    breakdown: {
      about:
        'A compiler translates code written in a programming language into instructions a machine can run. This one handles a small language I designed and includes a virtual machine to run the result.',
      tech: ['C++', 'Visual Studio', 'Compiler design', 'Parsing', 'Code generation'],
      features: [
        {
          title: 'Lexing and parsing',
          points: [
            'A lexical analyser turns source text into tokens and a symbol table.',
            'A top-down parser, with one function per grammar rule, checks the syntax and writes out a parse tree.',
          ],
        },
        {
          title: 'Code generation',
          points: [
            'A translator produces three-address code using temporary variables.',
            'A code generator lowers it to machine instructions, each an opcode with up to three operands.',
          ],
        },
        {
          title: 'Virtual machine',
          points: [
            'A virtual machine runs the generated instructions, storing variables at addresses in 4-byte steps.',
            'The language supports typed functions, integer and character variables, input and print, nested loops and if / elif / else.',
          ],
        },
      ],
    },
  },
  {
    id: 'chess',
    title: 'Chess',
    kind: 'Python · Academic project · Game AI',
    description:
      'A chess game with a hand-written rules engine, an AI opponent that searches with minimax and alpha-beta pruning, and a Tkinter interface.',
    role: 'Programmer · gameplay and AI',
    facts: [
      ['Language', 'Python, Tkinter'],
      ['Search', 'Minimax with alpha-beta pruning'],
      ['Rules', 'Castling, en passant, promotion, stalemate'],
    ],
    image: '/project-images/Chess.webp',
    fit: 'contain',
    position: 'center',
    background: '#16161a',
    video: 'Chess.mp4',
    tags: ['Python', 'Minimax', 'Alpha-beta pruning', 'Tkinter'],
    keys: ['Python', 'GameAI'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Muhammad-Shaharyar-0/Chess',
      },
    ],
    breakdown: {
      about:
        'A playable chess game where you can face a computer opponent or another person. The computer looks several moves ahead and picks the move that leaves it best placed.',
      tech: ['Python', 'Tkinter', 'Minimax and alpha-beta pruning', 'pickle (save and undo)', 'Game AI'],
      features: [
        {
          title: 'Computer opponent',
          points: [
            'Minimax with alpha-beta pruning searches a tree of possible moves and skips branches that cannot change the result.',
            'Positions are scored by material, with optional piece-square tables that change between opening and endgame.',
            'The search depth is configurable.',
          ],
        },
        {
          title: 'Rules engine',
          points: [
            'Each piece is a Python class that knows its own moves, on a board stored as a dictionary keyed by square.',
            'A move is legal only if it does not leave the player’s own king in check.',
            'Castling, en passant, promotion, checkmate and stalemate are all handled.',
          ],
        },
        {
          title: 'Game features',
          points: [
            'Human versus AI and human versus human modes in a Tkinter interface.',
            'Save, load and undo using pickled snapshots of the board.',
          ],
        },
      ],
    },
  },
  {
    id: 'warren',
    title: 'The Search for Warren',
    kind: 'PC · Prototype · Real-time multiplayer',
    description:
      'A playable prototype of a real-time multiplayer lane battler. Players spend elixir to deploy cards onto a grid and their units push toward the enemy towers. Built on Photon Fusion; unfinished, as I left to start my master’s.',
    role: 'Lead developer · gameplay and network programmer',
    facts: [
      ['Engine', 'Unity 2020'],
      ['Networking', 'Photon Fusion, Host mode, 60 Hz tick'],
      ['Backend', 'Firebase Firestore'],
    ],
    image: '/project-images/SearchForWarren.webp',
    fit: 'cover',
    position: 'center 18%',
    background: '#0b0b0e',
    video: 'SearchForWarren.mp4',
    tags: ['Unity', 'C#', 'Photon Fusion', 'Firebase', 'Unit AI'],
    keys: ['C#', 'Unity', 'Photon', 'Multiplayer', 'Firebase', 'GameAI'],
    links: [],
    breakdown: {
      about:
        'A real-time strategy prototype for two players. Each player spends a refilling resource (elixir) to deploy units from a hand of cards onto a grid, and the units march down lanes to attack the opponent’s towers.',
      tech: ['Unity 2020', 'C#', 'Photon Fusion 1 (Host mode)', 'Photon Cloud', 'Cloud Firestore', 'Unity NavMesh', 'Network programming', 'Gameplay programming'],
      features: [
        {
          title: 'Multiplayer netcode',
          points: [
            'Photon Fusion in Host mode at a 60 Hz tick rate.',
            'Matchmaking joins an open session from a shared lobby, or becomes the host if none is free, and retries on a timer.',
            'Friend matches use room IDs shared through Cloud Firestore.',
          ],
        },
        {
          title: 'Host-run simulation',
          points: [
            'Every unit is a networked state machine (idle, seeking, attacking, dead) using Fusion networked properties for state and health.',
            'Deploying a card sends an RPC, and the host spawns the unit on the grid.',
          ],
        },
        {
          title: 'Unit AI',
          points: [
            'Each unit picks the nearest valid enemy, filtered by lane, target type and whether it has finished spawning.',
            'Units move to their target with Unity NavMesh pathfinding.',
          ],
        },
        {
          title: 'Online services',
          points: [
            'Cloud Firestore stores player profiles, card catalogues, friends, online presence and match requests.',
          ],
        },
      ],
    },
  },
]

// Order of the filter chips (a chip only shows if at least one project uses it).
const filterOrder = [
  'C#', 'C++', 'Python', 'Unity', 'Unreal', 'XR', 'Multiplayer', 'Mobile', 'WebGL', 'GameAI',
]
const filterLabels = {
  XR: 'XR / VR',
  WebGL: 'Web (WebGL)',
  Unreal: 'Unreal Engine',
  GameAI: 'Game AI',
}

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
      { label: 'Photon Fusion & PUN', key: 'Photon' },
      { label: 'Multiplayer systems', key: 'Multiplayer' },
      { label: 'Game AI', key: 'GameAI' },
      { label: 'Unreal Engine 5 (certification, teaching)' },
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
      { label: 'Firebase', key: 'Firebase' },
      { label: 'Azure PlayFab', key: 'PlayFab' },
      { label: 'Unity Multiplay', key: 'Multiplay' },
    ],
  },
  {
    name: 'Monetisation',
    items: [
      { label: 'In-app ads (rewarded, interstitial, banner)' },
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
