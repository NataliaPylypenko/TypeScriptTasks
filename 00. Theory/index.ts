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