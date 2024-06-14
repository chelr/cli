import { Command } from "commander";
import { intro, text, outro, select, multiselect } from "@clack/prompts";

const program = new Command();

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

    const payment_choices = await multiselect({
      message: "Pick ur payment methods: ",
      options: [
        { value: "bitcoin", label: "Bitcoin (btc)", hint: "popular" },
        { value: "ethereum", label: "Ethereum (eth)" },
        { value: "solana", label: "Solana (sol)" },
      ],
    });

    console.log(project_name, payment_choices);

    outro("chelr integrated, have fun building the rest of your app.");
  });

program.parse();
