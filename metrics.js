// import adone from "adone";

const {
    pretty
} = adone;

const shi = async function () {
    const term = adone.cli;
    const system = adone.metrics.system;
    console.log(term.parse("{white-fg}{bold}Operating system:{/}\n"));
    console.log(term.parse(`{green-fg}Manufaturer: {/}{white-fg}${system.manufacturer}{/}`));
    console.log(term.parse(`{green-fg}Family: {/}{white-fg}${system.family}{/}`));
    console.log(term.parse(`{green-fg}Version: {/}{white-fg}${system.version}{/}`));
    console.log(term.parse(`{green-fg}Code name: {/}{white-fg}${system.codeName}{/}`));
    console.log(term.parse(`{green-fg}Build number: {/}{white-fg}${system.buildNumber}{/}`));
    console.log(term.parse(`{green-fg}Full: {/}{white-fg}${system.toString()}{/}`));

    const fs = system.getFileSystem();
    const stores = await fs.getFileStores();
    console.log(term.parse("\n{white-fg}{bold}File system:{/}\n"));
    const maxDescrs = await fs.getMaxFileDescriptors();
    const openDescrs = await fs.getOpenFileDescriptors();
    console.log(term.parse(`{green-fg}Maximum available file descriptors{/}: {white-fg}${maxDescrs}{/}`));
    console.log(term.parse(`{green-fg}Opened file descriptors: {/}{white-fg}${openDescrs}{/}\n`));

    console.log(term.parse("{white-fg}{bold}Volumes:{/}\n"));
    const storesTable = new adone.text.table.Table({
        head: ["Name", "Type", "UUID", "Free space", "Total space", "Mount", "Description"],
        style: {
            compact: true
        }
    });

    for (const store of stores) {
        storesTable.push([store.name, store.fsType, store.uuid, pretty.size(store.freeSpace), pretty.size(store.totalSpace), store.mount, store.description]);
    }

    console.log(storesTable.toString());

    console.log(term.parse("\n{white-fg}{bold}Processes:{/}\n"));
    console.log(term.parse(`{green-fg}Process count: {/}{white-fg}${system.getProcessCount()}{/}`));
    console.log(term.parse(`{green-fg}Thread count: {/}{white-fg}${system.getThreadCount()}{/}`));

    const procs = system.getProcesses();
    const procsTable = new adone.text.table.Table({
        head: ["Name", "PID", "PPID", "State", "Priority", "VSIZE", "RSS", "UP time", "Kernel time", "User time", "Bytes read", "Bytes written"],
        style: {
            compact: true
        }
    });
    for (const proc of procs) {
        procsTable.push([
            proc.getName(),
            proc.getPID(),
            proc.getParentPID(),
            adone.metrics.Process.humanState(proc.getState()),
            proc.getPriority(),
            pretty.size(proc.getVirtualSize()),
            pretty.size(proc.getResidentSetSize()),
            pretty.time(proc.getUpTime()),
            pretty.time(proc.getKernelTime()),
            pretty.time(proc.getUserTime()),
            pretty.size(proc.getBytesRead()),
            pretty.size(proc.getBytesWritten())
        ]);
    }
    console.log(procsTable.toString());
}

shi();
