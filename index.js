import { Command } from "commander";
import { intro, text, outro, select, multiselect } from "@clack/prompts";

const program = new Command();
var options_chosen = [];

program
  .name("chelr")
  .description("payment integration made easy.")
  .version("0.0.1");

program.command("ping").action(() => console.log("pong"));

program
  .command("generate")
  .description("generate chelr app")
  .action(async () => {
    intro("integrate chelr");

    const project_name = await text({
      message: "Project name: ",
      placeholder: "awesome-chelr-project",
    });

    const project_language_choice = await multiselect({
      message: "Language: ",
      options: [
        {value: "typescript", label: "Typescript (ts)", hint: "popular"},
        {value: "javascript", label: "Javascript (js)"},
      ]
    })

    const payment_choices = await multiselect({
      message: "Pick ur payment methods: ",
      options: [
        { value: "bitcoin", label: "Bitcoin (btc)", hint: "popular" },
        { value: "ethereum", label: "Ethereum (eth)" },
        { value: "solana", label: "Solana (sol)" },
      ],
    });

    options_chosen.push(project_name);
    options_chosen.push(project_language_choice);
    options_chosen.push(payment_choices);

    console.log(options_chosen);

    outro("chelr integrated, have fun building the rest of your app.");
  });

program.parse();
