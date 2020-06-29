import '../css/index.css';
import test from './test.js';
console.log('hello from home');
test();


if (module.hot) {
    module.hot.accept('./test.js', () => {
        test();
    });
}
