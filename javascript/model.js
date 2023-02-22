const model = {
  current: document.createElement("audio"),
  isPlaying: false,
  namePlaying: "",
  lengthPlaying: "00:00",
  folderPlaying: "",
  shuffle: false,
  volume: 1,
  loop: false,
  listPlaying: [],
  indexPlaying: 0,
  folders: [
    {
      name: "Seasonality",
      files: [
        {
          name: "Brumunddal",
          path: "music/Seasonality/Brumunddal.mp3",
        },
        {
          name: "Eplejakt",
          path: "music/Seasonality/Eplejakt.mp3",
        },
        {
          name: "Jaktlyn",
          path: "music/Seasonality/Jaktlyn.mp3",
        },
        {
          name: "Lille Dvergen",
          path: "music/Seasonality/Lille Dvergen.mp3",
        },
        {
          name: "Zaraikvals Avskjedssang",
          path: "music/Seasonality/Zaraikvals Avskjedssang.mp3",
        },
      ],
    },
    {
      name: "The Mountain Goats",
      files: [
          {
              name: "Clemency for the Wizard King",
              path: "music/The Mountain Goats/Clemency for the Wizard King.mp3",
            },
            {
                name: "Damn These Vampires",
                path: "music/The Mountain Goats/Damn These Vampires.mp3",
            },
            {
                name: "The Best Ever Death Metal Band in Denton",
                path: "music/The Mountain Goats/The Best Ever Death Metal Band in Denton.mp3",
            },
            {
                name: "Woke Up New",
                path: "music/The Mountain Goats/Woke new.mp3",
            },
            {
                name: "Golden Boy",
                path: "music/The Mountain Goats/Golden Boy.mp3",
            },
        ],
    },
  ],
};
