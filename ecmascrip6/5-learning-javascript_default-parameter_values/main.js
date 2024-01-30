// *** Default parameter values ***

// With ECMAScript 5
function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Default value';
    }
    console.log(log);
}

logger();

// With ECMAScript 6
function logger1(log1 = 'Default value1') {
    console.log(log1);
}

logger1();

// Example
// function logger2(log2, isAlert = false) {
//     if (isAlert) return alert(log2);
//     console.log(log2);
// }

// logger2('Messenger', true)


// type
function logger2(log2, type = 'log') {
    console[type](log2);
}

logger2('Messenger', 'warn')