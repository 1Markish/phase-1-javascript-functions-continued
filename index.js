// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(result = "*") {
  function adjective(emphatic = "a hard worker") {
    return `You are ${result}${emphatic}${result}!`;
  }
  return adjective;
}
