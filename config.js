const CONFIG = {
  name: "Mrs. Lovely Rath",

  photo: "./img/teacher.jpg",
  music: "./music/teachers-day.mp3",

  colors: {
    primary: "#d4af37",
    accent: "#b8860b",

    dark: {
      background: "#0b1020",
      text: "#f8f5ec",
    },

    light: {
      background: "#faf8f2",
      text: "#1f2937",
    },
  },

  defaultMode: "dark",

  sections: [

    {
      type: "greeting",
      title: "A little something for",
      subtitle: "With gratitude and respect",
    },

    {
      type: "announcement",
      text: "Happy Teachers' Day!",
    },

    {
      type: "chatbox",
      message:
        "Thank you for inspiring us, guiding us, and making learning more meaningful. Your teaching leaves a lasting impact.",
      buttonText: "Continue",
    },

    {
      type: "stars",
      count: 45,
    },

    {
      type: "profile",
      wishTitle: "Happy Teachers' Day!",
      wishText:
        "Thank you for being a wonderful teacher. Wishing you a beautiful Teachers' Day, Ma'am!",
    },

    {
      type: "fireworks",
      count: 18,
    },

    {
      type: "closing",
      text: "With respect and gratitude,",
      replayText: "Tap here to watch it again.",
    },

  ],
};
