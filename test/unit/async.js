import {
    waitForElements,
    waitForVariable
} from '../../src/index';

let originalTimeout = null;

describe('(async) waitForVariable', () => {

    beforeEach(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('should discover the variable in standard time', (done) => {
        let someObject = {};
        setTimeout(() => { someObject.value = 10; }, 400);
        waitForVariable(someObject, (obj) => obj.value)
            .then((obj) => {
                expect(obj.value).toBe(10);
                done();
            });
    });

    it('should fail discovering the variable in standard time', (done) => {
        let someObject = {};
        setTimeout(() => { someObject.value = 10; }, 6000);
        waitForVariable(someObject, (obj) => obj.value).catch((e) => {
            console.warn(e);
            done();
        });
    });

    it('should discover the variable in custom time', (done) => {
        let someObject = {};
        setTimeout(() => { someObject.value = 10; }, 6000);
        waitForVariable(someObject, (obj) => obj.value, 8)
            .then((obj) => {
                expect(obj.value).toBe(10);
                done();
            });
    });

    it('should fail discovering the variable in custom time', (done) => {
        let someObject = {};
        waitForVariable(someObject, (obj) => obj.value, 2).catch((e) => {
            console.warn(e);
            done();
        });
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});

describe('(async) waitForElements', () => {

    beforeEach(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('should discover the elements in standard time', (done) => {
        setTimeout(() => {
            let div = document.createElement('h1');
            div.innerHTML = 'Test';
            document.body.appendChild(div);
        }, 400);
        waitForElements('h1', 1)
            .then((elements) => {
                expect(elements[0].innerHTML).toBe('Test');
                document.body.removeChild(document.querySelector('h1'));
                done();
            });
    });

    it('should fail discovering the elements in standard time', (done) => {
        waitForElements('h2', 1).catch((e) => {
            console.warn(e);
            done();
        });
    });

    it('should discover the elements in custom time', (done) => {
        setTimeout(() => {
            let div = document.createElement('h3');
            div.innerHTML = 'Test';
            document.body.appendChild(div);
        }, 6000);
        waitForElements('h3', 1, 15)
            .then((elements) => {
                expect(elements[0].innerHTML).toBe('Test');
                document.body.removeChild(document.querySelector('h3'));
                done();
            });
    });

    it('should fail discovering the elements in custom time', (done) => {
        waitForElements('h4', 1, 1).catch((e) => {
            console.warn(e);
            done();
        });
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
