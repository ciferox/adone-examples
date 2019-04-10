const { std: { fs } } = adone;

adone.app.run({
    main() {
        const screen = new adone.cli.ui.Screen({
            dump: `${__dirname}/logs/record.log`,
            smartCSR: true,
            warnings: true
        });

        new adone.cli.ui.widget.Element({
            parent: screen,
            left: "center",
            top: "center",
            width: "80%",
            height: "80%",
            style: {
                bg: "green"
            },
            border: "line",
            content: "CSR should still work."
        });

        const text = new adone.cli.ui.widget.ScrollableText({
            parent: screen,
            content: fs.readFileSync(`${__dirname}/data/git.diff`, "utf8"),
            border: "line",
            left: "center",
            top: "center",
            draggable: true,
            width: "50%",
            height: "50%",
            mouse: true,
            keys: true,
            vi: true
        });

        text.focus();

        const frames = [];

        const timer = setInterval(() => {
            frames.push(screen.screenshot());
        }, 100);

        screen.key("C-q", () => {
            fs.writeFileSync(`${__dirname}/data/frames.json`, JSON.stringify(frames));
            clearInterval(timer);
            screen.destroy();
            this.exit();
        });

        screen.render();
    }
});
