adone.app.run({
    main() {
        const screen = new adone.cli.ui.Screen();

        /**
         * Donut Options
          self.options.stroke = options.stroke || "magenta"
          self.options.radius = options.radius || 14;
          self.options.arcWidth = options.arcWidth || 4;
          self.options.spacing = options.spacing || 2;
          self.options.yPadding = options.yPadding || 2;
         */

        const donut = new adone.cli.ui.widget.Donut({
            label: "Test",
            radius: 8,
            arcWidth: 3,
            yPadding: 2,
            data: [
                { perent: 80, label: "web1", color: "green" }
            ]
        });

        screen.append(donut);

        let pct = 0.00;
        const updateDonuts = () => {
            if (pct > 0.99) {
                pct = 0.00;
            }
            donut.update([
                { percent: parseFloat((pct + 0.00) % 1).toFixed(2), label: "rcp", color: [100, 200, 170] },
                { percent: parseFloat((pct + 0.25) % 1).toFixed(2), label: "rcp", color: [128, 128, 128] },
                { percent: parseFloat((pct + 0.50) % 1).toFixed(2), label: "rcp", color: [255, 0, 0] },
                { percent: parseFloat((pct + 0.75) % 1).toFixed(2), label: "web1", color: [255, 128, 0] }
            ]);
            screen.render();
            pct += 0.01;
        };

        setInterval(updateDonuts, 5);

        screen.key(["escape", "q", "C-c"], (ch, key) => {
            return process.exit(0);
        });
    }
});
