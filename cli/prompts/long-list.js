adone.app.run({
    async main() {
        const choices = Array.apply(0, new Array(26)).map((x, y) => {
            return String.fromCharCode(y + 65);
        });
        choices.push("Multiline option \n  super cool feature");
        choices.push({
            name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
            value: "foo",
            short: "The long option"
        });

        const answers = await adone.cli.prompt().run([
            {
                type: "list",
                name: "letter",
                message: "What's your favorite letter?",
                paginated: true,
                choices
            },
            {
                type: "checkbox",
                name: "name",
                message: "Select the letter contained in your name:",
                paginated: true,
                choices
            }
        ]);
        console.log(JSON.stringify(answers, null, "  "));
    }
});
