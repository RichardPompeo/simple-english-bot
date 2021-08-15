const stages = {
  0: {
    description: "Welcome",
    obj: require("../../stages/Welcome"),
  },
  1: {
    description: "Pay",
    obj: require("../../stages/Pay"),
  },
  2: {
    description: "Pay-2",
    obj: require("../../stages/PayTwo"),
  },
  3: {
    description: "Commands",
    obj: require("../../stages/Commands"),
  },
  4: {
    description: "ChoiceCommands",
    obj: require("../../stages/ChoiceCommands"),
  },
  5: {
    description: "CommandInitialized",
    obj: require("../../stages/CommandInitialized"),
  },
  41: {
    description: "SearchWord",
    obj: require("../../functions/SearchWord"),
  },
};

exports.step = stages;
