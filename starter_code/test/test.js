var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');

for (i = 0; i <= 31; i++) {
    var num = i;

    var answer = {
        thumbFinger: 'off',
        indexFinger: 'off',
        middleFinger: 'off',
        ringFinger: 'off',
        pinkyFinger: 'off'
    };

    if (num >= 16) {
        answer.pinkyFinger = 'on';
        num -= 16;
    }
    if (num >= 8) {
        answer.ringFinger = 'on';
        num -= 8;
    }
    if (num >= 4) {
        answer.middleFinger = 'on';
        num -= 4;
    }
    if (num >= 2) {
        answer.indexFinger = 'on';
        num -= 2;
    }
    if (num >= 1) {
        answer.thumbFinger = 'on';
        num -= 1;
    }

    num = i;
    check(num, answer);
}

function check(num, answer) {

    describe('Binary Counting Test', function() {
        var label = 'The hand shows the number ' + num;
        it(label, function() {
            var response = ex.fingers(num);
            answer.should.eql(response);
        });
    });

}