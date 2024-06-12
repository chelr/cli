import { Command } from "commander";
// import Generate from "./generate";

const program = new Command();

program
  .name("chelr")
  .description("payment integration made easy.")
  .version("0.0.1");

program.command("ping").action(() => console.log("pong"));

program.command("generate").description("generate chelr app");
//   .action(Generate());

program.parse();
