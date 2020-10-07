var redPool = [];
for (let i = 1; i <= 33; i++) {
    redPool.push(i);
}

function redballList(count) {
    if (count == null) {
        count = 6;
    }
    var redList = redPool.concat();
    var resultRed = [];
    for (let i = 0; i < count; i++) {
        let random = Math.round(Math.random() * (redList.length - 1));
        let ball = redList[random];
        resultRed.push(ball);
        redList.remove(ball);
    }
    resultRed = resultRed.sort(function (a, b) {
        return a - b
    });
    return resultRed
}
var bluePool = [];
for (let i = 1; i <= 16; i++) {
    bluePool.push(i);
}

function blueballList(count) {
    if (count == null) {
        count = 1;
    }
    var blueList = bluePool.concat();
    var resultBlue = [];
    for (let i = 0; i < count; i++) {
        let random = Math.round(Math.random() * (blueList.length - 1));
        let ball = blueList[random]
        resultBlue.push(ball);
        blueList.remove(ball);
    }
    blueList = blueList.sort(function (a, b) {
        return a - b
    });
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