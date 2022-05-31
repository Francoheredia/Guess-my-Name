import React, { ReactNode, useState } from 'react';
import randomGenerator from './helpers/randomGenerator';
import verifyNumber from './helpers/verifyNumber';

const GuessNumber = () => {
  const [inputValue, setinputValue] = useState<String | Number>('');
  const [numberSecret, setNumberSecret] = useState<Number | String | any>(
    randomGenerator()
  );
  const [ErrorInput, setErrorInput] = useState<Boolean>(false);
  const [winStatus, setWinStatus] = useState<Boolean | null>(null);
  const [score, setScore] = useState<Number | any>(20);
  const handleOnChange = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (Number(target.value) > 20 || Number(target.value) < 0) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
      setinputValue(target.value);
    }
  };
  const [message, setMessage] = useState<String>('Start guessing...');
  const [highscore, setHighscore] = useState<Number | any>(0);

  const handleAgain = (): void => {
    setMessage('Start guessing...');
    setScore(20);
    setNumberSecret(randomGenerator());
    setinputValue('');
    setWinStatus(null);
  };

  const verifyGaming = (): void => {
    if (verifyNumber(numberSecret, inputValue)) {
      setWinStatus(true);
      setMessage('You Win 🏆');
      if (score > highscore) {
        setHighscore(score);
      } else {
        setHighscore(highscore);
      }
    } else {
      setScore(score - 1);
      if (inputValue > numberSecret) {
        setMessage('Too high! 📈 ');
      } else if (inputValue < numberSecret) {
        setMessage('Too low! 📉 ');
      }
      if (score <= 1) {
        setWinStatus(false);
        setMessage('Game over 😓');
      }
    }
  };

  return (
    <div
      className={
        winStatus === null
          ? 'container'
          : !winStatus
          ? 'containerFalse'
          : 'containerMainTrue'
      }
    >
      <header>
        <h1>Guess my Number!</h1>

        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
        <p className="between">(Between 1 and 20)</p>
        <div className="number">
          {winStatus === null ? '?' : !winStatus ? numberSecret : numberSecret}
        </div>
      </header>
      <main>
        <section className="left">
          {ErrorInput && (
            <p className="errorInput">{'only numbers from 1 to 20'}</p>
          )}
          <input type="number" className="guess" onChange={handleOnChange} />

          <button className="btn check" onClick={verifyGaming}>
            {' '}
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          {}
          <p className="label-score">
            💯 Score: <span className="score">{`${score}`}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default GuessNumber;
