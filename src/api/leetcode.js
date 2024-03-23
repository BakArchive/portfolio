import generalJsonFetch from "./common.js";

const api = "https://leetcodestats.cyclic.app/";
const key = "leetcode";

const leetcode = async (username) => {
  const url = `${api}${username}`;
  // store in localstorage
  return generalJsonFetch(url,{},key,trim);
};

function trim(origin) {
  const data = {
    ranking: origin.ranking,
    stat: [
      {
        name: "Total",
        solved: origin.totalSolved,
        total: origin.totalQuestions,
      },
      {
        name: "Easy",
        solved: origin.easySolved,
        total: origin.totalEasy,
      },
      {
        name: "Mid",
        solved: origin.mediumSolved,
        total: origin.totalMedium,
      },
      {
        name: "Hard",
        solved: origin.hardSolved,
        total: origin.totalHard,
      },
    ],
  };
  return data;
}

export default leetcode;
