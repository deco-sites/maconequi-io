import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      red: "#AD2128",
      black: "#1E1E1E",
      white: {
        base: "#f1f1f1",
        ice: "F8F8F8",
        darker: "#f2f2f2",
      },
      green: "#108658",
      gray: {
        base: "#606060",
        darker: "#494949",
        lighter: "#BEBEBE",
      },
    },
  },
};
