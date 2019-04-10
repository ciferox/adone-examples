adone.app.run({
    main() {
        const screen = new adone.cli.ui.Screen();
        const grid = new adone.cli.ui.layout.Grid({
            rows: 2,
            cols: 2,
            hideBorder: true,
            screen
        });
        grid.set(0, 0, 1, 1, adone.cli.ui.widget.Gauge, {
            showLabel: false,
            stack: [
                { percent: 30, stroke: "green" },
                { percent: 30, stroke: "magenta" },
                { percent: 40, stroke: "cyan" }
            ]
        });

        screen.key(["escape", "q", "C-c"], (ch, key) => {
            screen.destroy();
            this.exit(0);
        });

        screen.render();
    }
});
