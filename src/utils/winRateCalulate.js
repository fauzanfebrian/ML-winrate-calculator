const winRateCalculate = (winrateWanted, totalGame, winrate) => {
  let win = (totalGame / 100) * winrate;
  let winGame = 0;
  let value = [];
  while (+winrate - winrateWanted <= 5) {
    ++winGame;
    const tryWin = +win + winGame;
    const tryTotalGame = +totalGame + winGame;
    winrate = (tryWin / tryTotalGame) * 100;
    if (+winrate - winrateWanted >= 0) {
      value.push({winrate, winGame});
    }
  }
  console.log(value);
  const winRateFinal = +value[0]?.winrate.toFixed(1);
  const winGameFinal = +value[0]?.winGame;
  return {winRate: winRateFinal, winGame: winGameFinal};
};

export default winRateCalculate;
