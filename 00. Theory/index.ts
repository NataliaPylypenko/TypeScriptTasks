// Union (Narrowed)

// function logId(id: string | number | boolean) {
//     console.log(id);
// }
//
// logId(1);
// logId('string');
// logId(true);


function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

// ====================
// Literal Types

function fetchWithAuth(url: string, method: 'post' | 'get') {}
fetchWithAuth('url', 'post');

// 1 don't work
// let method = 'post';
// fetchWithAuth('url', method);

// 2
const method1 = 'post';
fetchWithAuth('url', method1);

// 3
let method2 = 'post';
fetchWithAuth('url', method2 as 'post');

// 4 but...
let method3 = '3';
fetchWithAuth('url', method3 as 'post');