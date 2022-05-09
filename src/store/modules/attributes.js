export default {
  state: {
    avatar: {
      min: 50,
      max: 400,
      roundness: [
        { label: "Round", value: 100 },
        { label: "Square", value: 0 },
        { label: "Rounded corners", value: 5 },
      ],
    },
    font: {
      size: [
        { label: "Small", value: 11 },
        { label: "Medium", value: 12 },
        { label: "Large", value: 13 },
        { label: "XLarge", value: 14 },
        { label: "XXLarge", value: 16 },
      ],
      family: [
        {
          label: "sans-serif",
          options: [
            { label: "Lucida Grande", value: "'Lucida Grande', sans-serif" },
            { label: "Arial ", value: "'Arial', sans-serif" },
            { label: "Arial Black ", value: "'Arial Black', sans-serif" },
            { label: "Verdana ", value: "'Verdana', sans-serif" },
            { label: "Tahoma ", value: "'Tahoma', sans-serif" },
            { label: "Trebuchet MS ", value: "'Trebuchet MS', sans-serif" },
            { label: "Impact ", value: "'Impact', sans-serif" },
          ],
        },
        {
          label: "serif",
          options: [
            { label: "Times New Roman", value: "'Times New Roman', serif" },
            { label: "Didot", value: "'Didot', serif" },
            { label: "Georgia", value: "'Georgia', serif" },
            {
              label: "American Typewriter",
              value: "'American Typewriter', serif",
            },
          ],
        },
        {
          label: "monospace",
          options: [
            {
              label: "Courier New",
              value: "'Courier New', 'Courier', monospace",
            },
            {
              label: "Lucida Console",
              value: "'Lucida Console', 'Monaco', monospace",
            },
            { label: "Monaco", value: "'Monaco', monospace" },
          ],
        },
        {
          label: "cursive",
          options: [
            { label: "Bradley Hand", value: "'Bradley Hand', cursive" },
            { label: "Brush Script MT", value: "'Brush Script MT', cursive" },
            { label: "Comic Sans MS", value: "'Comic Sans MS', cursive" },
          ],
        },
      ],
    },
    separator: {
      options: [
        { label: "/", value: "/" },
        { label: "|", value: "|" },
        { label: "at", value: "at" },
        { label: "New line", value: "br" },
      ],
    },
    types: [
      { label: "Text", value: "text" },
      { label: "Email", value: "email" },
      { label: "Link", value: "link" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
};
