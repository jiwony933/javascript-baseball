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

    play() {
        this.MakeQuizNumber();
    }
}

module.exports = App;
