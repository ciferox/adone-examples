const {
    terminal,
    lodash: _
} = adone;

adone.app.run({
    main() {
        const fromRange = (start, end, fn) => {
            _.range(start, end).forEach(fn);
            terminal.print("{normal}\n");
        };

        terminal.print("{bold}\n=== 24 bits colors 256 shades of gray test ===\n\n{/}");

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{~%u-fg}*", i);
        });

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{~%u-bg} ", i);
        });

        terminal.print("{bold}\n=== 24 bits colors 256 shades of green test ===\n\n{/}");

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{#%02x%02x%02x-fg}*", 0, i, 0);
        });

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{#%02x%02x%02x-bg} ", 0, i, 0);
        });

        terminal.print("{bold}\n=== 24 bits colors 256 shades of desatured magenta test ===\n\n{/}");

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{#%02x%02x%02x-fg}*", i, Math.floor(i / 2), i);
        });

        fromRange(0, 256, (i) => {
            if (!(i % 70)) {
                terminal.print("{normal}\n");
            }
            terminal.print("{#%02x%02x%02x-bg} ", i, Math.floor(i / 2), i, " ");
        });

        terminal.print("{normal}\n");
        terminal.print("Reset...\n");
    }
});
