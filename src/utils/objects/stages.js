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
  6: {
    description: "AdministratorOptions",
    obj: require("../../stages/AdministratorOptions"),
  },
  7: {
    description: "ChoiceOptions",
    obj: require("../../stages/ChoiceOptions"),
  },
  8: {
    description: "AdministratorPanel",
    obj: require("../../stages/AdministratorPanel"),
  },
  9: {
    description: "ChoiceAdmCommands",
    obj: require("../../stages/ChoiceAdmCommands"),
  },
};

exports.step = stages;
