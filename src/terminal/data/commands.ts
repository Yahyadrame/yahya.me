export const isValidCommand = (cmd: string) => {
  return ["whoami", "about", "projects", "skills", "contact", "gui", "help", "clear"].includes(cmd);
};

export const isGlowCommand = (cmd: string) => false;
