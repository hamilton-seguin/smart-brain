import React, { useEffect, useState } from "react";

const entriesToEmoji = (entries) => {
  if (entries < 5) {
    return 0;
  }
  if (entries >= 5 && entries < 10) {
    return 1;
  }
  if (entries >= 10 && entries < 15) {
    return 2;
  }
  if (entries >= 15 && entries < 20) {
    return 3;
  }
  if (entries >= 20 && entries < 25) {
    return 4;
  }
  if (entries >= 25 && entries < 30) {
    return 5;
  }
  if (entries >= 30) {
    return 6;
  }
};

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");
  const [emojiRank, setEmojiRank] = useState(0);

  useEffect(() => {
    const rank = entriesToEmoji(entries);
    setEmojiRank((prevRank) => {
      if (rank !== prevRank) {
        return rank;
      }
      return prevRank;
    });
  }, [entries]);

  useEffect(() => {
    fetch(
      `https://l3o1ptq3le.execute-api.eu-central-1.amazonaws.com/prod/rank?rank=${emojiRank}`
    )
      .then((response) => {
        response.json().then((data) => {
          console.log("data", data);
          return setEmoji(data.input);
        });
      })
  }, [emojiRank]);
  
  return (
    <div>
      <div className="white f3">
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f1">{entries}</div>{" "}
      <div className="white f1">{emoji}</div>
    </div>
  );
};

export default Rank;
