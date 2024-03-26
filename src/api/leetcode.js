import generalJsonFetch from "./common.js";

const api = "https://leetcodestats.cyclic.app";
const key = "leetcode";

/**
 * fetch leetcode user profile
 * @param {string} username leetcode username
 * @returns promose of leetcode user profile
 */
const leetcode = async (username) => {
  const url = `${api}/${username}`;
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
