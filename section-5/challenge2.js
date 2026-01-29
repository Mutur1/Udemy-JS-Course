// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app,
you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]*/
// totalHours, avgHours, maxHours, daysworked

const analyzeWorkWeek = function (hours) {
  let totalHours = 0;
  let daysWorked = 0;
  let maxHours = 0;
  let maxDay = 0;

  for (let i = 0; i < hours.length; i++) {
    const curHours = hours[i];

    if (curHours === 0) continue;

    totalHours += curHours;
    daysWorked++;

    if (curHours > maxHours) {
      maxHours = curHours;
      maxDay = i + 1;
    }
  }

  const averageHours = daysWorked > 0 ? totalHours / daysWorked : 0;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    maxHours,
    daysWorked,
    isFullTime,
  };
};
const weekHours = [8, 7, 6, 8, 5, 0, 0];
console.log(analyzeWorkWeek(weekHours));
