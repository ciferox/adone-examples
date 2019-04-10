adone.app.run({
    main() {
        const screen = new adone.cli.ui.Screen({
            dump: `${__dirname}/logs/noalt.log`,
            title: "widget-noalt test",
            noAlt: true,
            warnings: true
        });

        const list = new adone.cli.ui.widget.List({
            parent: screen,
            align: "center",
            mouse: true,
            keys: true,
            vi: true,
            width: "50%",
            height: "shrink",
            //border: 'line',
            top: 5,
            //bottom: 2,
            left: 0,
            style: {
                fg: "blue",
                bg: "default",
                selected: {
                    bg: "green"
                }
            },
            items: [
                "one",
                "two",
                "three"
            ]
        });

        list.select(0);

        list.on("select", (item) => {
            console.log(item.getText());
            screen.destroy();
            this.exit();
        });

        screen.key("C-c", () => {
            screen.destroy();
        });

        list.focus();

        screen.render();
    }
});
