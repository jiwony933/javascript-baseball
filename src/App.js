// MissionUtils 라이브러리에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
// Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
// 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.

const MissionUtils = require("@woowacourse/mission-utils");

class App {
    MakeQuizNumber() {
        let quizNumber = "";
        for (let i = 0; i < 3; i++) {
            let randomIntToString = MissionUtils.Random.pickNumberInRange(
                1,
                9
            ).toString();
            quizNumber.includes(randomIntToString)
                ? i - 1
                : (quizNumber += randomIntToString);
        }
        return quizNumber;
    }

    IsValidInput(input) {
        return Number(input) >= 100 && Number(input) < 1000;
    }

    InputNumber() {
        MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
            if (!this.IsValidInput(answer)) {
                throw "잘못된 수를 입력하였습니다.";
            }
        });
    }

    PrintStrikeBall(score) {
        if (score.strike > 0 && score.ball > 0) {
            MissionUtils.Console.print(
                `${score.ball}볼 ${score.strike}스트라이크`
            );
        } else if (score.strike === 0 && score.ball === 0) {
            MissionUtils.Console.print(`낫싱`);
        } else if (score.strike > 0) {
            MissionUtils.Console.print(`${score.strike}스트라이크`);
        } else if (score.ball > 0) {
            MissionUtils.Console.print(`${score.ball}볼`);
        }
    }

    CheckStrikeBalls(quizNumber, input) {
        let score = { strike: 0, ball: 0 };
        for (let i = 0; i < 3; i++) {
            if (quizNumber[i] === input[i]) {
                score.strike += 1;
            } else if (quizNumber.indexOf(input[i]) !== -1) {
                score.ball += 1;
            }
        }
        this.PrintStrikeBall(score);
    }

    play() {
        this.MakeQuizNumber();
        this.InputNumber();
    }
}

module.exports = App;
