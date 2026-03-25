const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

function predictCycle(startDate, cycleLength, duration) {

    const nextPeriod = addDays(startDate, cycleLength);
    const periodEnd = addDays(nextPeriod, duration - 1);
    const ovulation = addDays(nextPeriod, -14);
    const fertilityStart = addDays(ovulation, -5);

    console.log("\nNext Period:", nextPeriod.toDateString());
    console.log("Period End:", periodEnd.toDateString());
    console.log("Ovulation:", ovulation.toDateString());
    console.log("Fertility Start:", fertilityStart.toDateString());
    console.log("Fertility End:", ovulation.toDateString());
}


rl.question("Enter last period start date (YYYY-MM-DD): ", (startDate) => {

    rl.question("Enter cycle length: ", (cycleLength) => {

        rl.question("Enter period duration: ", (duration) => {

            predictCycle(
                new Date(startDate),
                parseInt(cycleLength),
                parseInt(duration)
            );

            rl.close();
        });

    });

});