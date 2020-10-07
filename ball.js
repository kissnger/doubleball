function redballList() {

    var redList = [];
    for (let i = 1; i <= 33; i++) {
        redList.push(i);
    }

    var resultRed = [];
    for (let i = 0; i < 6; i++) {
        let random = Math.round(Math.random() * (32 - i));
        let ball = redList[random]
        resultRed.push(ball);
        redList.remove(ball);
    }
    resultRed = resultRed.sort(function (a, b) {
        return a - b
    });
    return resultRed
}

function blueballList() {

    var blueList = [];
    for (let i = 1; i <= 16; i++) {
        blueList.push(i);
    }
    var resultBlue = [];
    let random = Math.round(Math.random() * 15);
    let ball = blueList[random]
    resultBlue.push(ball);
    blueList.remove(ball);
    return resultBlue
}

function selectedCount(pool, count) {
    var beginResult = 1;
    for (let i = 1; i <= count; i++) {
        beginResult = beginResult * i;
    }
    var endResult = 1;
    for (let i = (pool - count + 1); i <= pool; i++) {
        endResult = endResult * i;
    }
    let result = endResult / beginResult;
    return result
}