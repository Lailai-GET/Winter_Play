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
    {
      name: "Øystein Sunde",
      files: [
        {
          name: "2003 en butikk",
          path: "music/Øystein Sunde/2003 en butikk.mp3",
        },
        {
          name: "Datterdatter",
          path: "music/Øystein Sunde/Datterdatter.mp3",
        },
        {
          name: "Fjøsprat",
          path: "music/Øystein Sunde/Fjøsprat.mp3",
        },
        {
          name: "Hest er best som pålegg",
          path: "music/Øystein Sunde/Hest er best som pålegg.mp3",
        },
        {
          name: "Jaktprat",
          path: "music/Øystein Sunde/Jaktprat.mp3",
        },
        {
          name: "Oppfinnervise",
          path: "music/Øystein Sunde/Oppfinnervise.mp3",
        },
        {
          name: "Piken fra konfesjonsfabrikken",
          path: "music/Øystein Sunde/Piken fra konfesjonsfabrikken.mp3",
        },
        {
          name: "Skal det være noe mer før vi stenger",
          path: "music/Øystein Sunde/Skal det være noe mer før vi stenger.mp3",
        },
        {
          name: "Super-SS-rally-GT-fastback-hardtop-sprint",
          path: "music/Øystein Sunde/Super-SS-rally-GT-fastback-hardtop-sprint.mp3",
        },
        {
          name: "Svigerfars motorsag",
          path: "music/Øystein Sunde/Svigerfars motorsag.mp3",
        },
        {
          name: "Tass",
          path: "music/Øystein Sunde/Tass.mp3",
        },
      ],
    },
    {
      name: "Irish and Shanties",
      files: [
        {
          name: "Irish Rover",
          path: "music/Irish and Shanties/Irish Rover.mp3",
        },
        {
          name: "Leave Her Johnny",
          path: "music/Irish and Shanties/Leave Her Johnny.mp3",
        },
        {
          name: "Lord of the dance",
          path: "music/Irish and Shanties/Lord of the dance.mp3",
        },
        {
          name: "Seven Drunken Nights",
          path: "music/Irish and Shanties/Seven Drunken Nights.mp3",
        },
        {
          name: "The Ramblin' Rover",
          path: "music/Irish and Shanties/The Ramblin' Rover.mp3",
        },
        {
          name: "Whiskey in the Jar",
          path: "music/Irish and Shanties/Whiskey in the Jar.mp3",
        },
        {
          name: "Wild Rover",
          path: "music/Irish and Shanties/Wild Rover.mp3",
        },
      ],
    },
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
  ],
};
