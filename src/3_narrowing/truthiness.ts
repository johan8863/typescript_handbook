// in javascript if condition not always expect a boolean value
// sometimes they expect the 'truthiness' of the condition,
// almost alway yo check againt the 'falsy' nature of data structure

const getUsersOnline = (numUsersOnline: number) => {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} users online now!`;
  }
  return "Nobody's online :(";
};

const printAll = (strs: string | string[] | null) => {
  if (strs && typeof strs === "object") {
    for (const str of strs) {
      console.log(str);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
};
