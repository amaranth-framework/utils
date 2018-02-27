import {
    Storage
} from '../../src/index';

import * as Cookies from 'js-cookie';

//
// Testing LocalStorage
//

describe('(storage) (window.localStorage)', () => {
    const storage = new Storage();
    it('shoult set a string', () => {
        const o = 'test';
        storage.set('stringKey', o);

        const lo = JSON.parse(window.localStorage.getItem('stringKey'));
        expect(lo).toBe(o);
        window.localStorage.removeItem('stringKey');
    });
    it('shoult set an object', () => {
        const o = { a: 1 };
        storage.set('objectKey', o);

        const lo = JSON.parse(window.localStorage.getItem('objectKey'));
        expect(lo).toEqual(o);
        window.localStorage.removeItem('objectKey');
    });
});

describe('(storage) (window.localStorage)', () => {
    const storage = new Storage();
    it('shoult get a string', () => {
        const o = 'test';
        const lo = JSON.stringify(o);
        window.localStorage.setItem('stringKey', lo);

        expect(storage.get('stringKey')).toBe(o);
        window.localStorage.removeItem('stringKey');
    });
    it('shoult get an object', () => {
        const o = { a: 1 };
        const lo = JSON.stringify(o);
        window.localStorage.setItem('objectKey', lo);

        expect(storage.get('objectKey')).toEqual(o);
        window.localStorage.removeItem('objectKey');
    });
});

describe('(storage) (window.localStorage)', () => {
    const storage = new Storage();
    it('should remove an item', () => {
        const o = 'test';
        window.localStorage.setItem('stringKey', o);
        storage.remove('stringKey');

        expect(storage.get('stringKey')).toBe(null);
    });
});

//
// Testing SessionStorage
//


describe('(storage) (window.sessionStorage)', () => {
    const storage = new Storage(Storage.TYPE_SESSION);
    it('shoult set a string', () => {
        const o = 'test';
        storage.set('stringKey', o);

        const lo = JSON.parse(window.sessionStorage.getItem('stringKey'));
        expect(lo).toBe(o);
        window.sessionStorage.removeItem('stringKey');
    });
    it('shoult set an object', () => {
        const o = { a: 1 };
        storage.set('objectKey', o);

        const lo = JSON.parse(window.sessionStorage.getItem('objectKey'));
        expect(lo).toEqual(o);
        window.sessionStorage.removeItem('objectKey');
    });
});

describe('(storage) (window.sessionStorage)', () => {
    const storage = new Storage(Storage.TYPE_SESSION);
    it('shoult get a string', () => {
        const o = 'test';
        const lo = JSON.stringify(o);
        window.sessionStorage.setItem('stringKey', lo);

        expect(storage.get('stringKey')).toBe(o);
        window.sessionStorage.removeItem('stringKey');
    });
    it('shoult get an object', () => {
        const o = { a: 1 };
        const lo = JSON.stringify(o);
        window.sessionStorage.setItem('objectKey', lo);

        expect(storage.get('objectKey')).toEqual(o);
        window.sessionStorage.removeItem('objectKey');
    });
});

describe('(storage) (window.sessionStorage)', () => {
    const storage = new Storage(Storage.TYPE_SESSION);
    it('should remove an item', () => {
        const o = 'test';
        window.sessionStorage.setItem('stringKey', o);
        storage.remove('stringKey');

        expect(storage.get('stringKey')).toBe(null);
    });
});

//
// Testing Cookies
//

describe('(storage) (Cookies)', () => {
    const storage = new Storage(Storage.TYPE_COOKIE);
    it('shoult set a string', () => {
        const o = 'test';
        storage.set('stringKey', o);

        const lo = JSON.parse(Cookies.get('stringKey'));
        expect(lo).toBe(o);
        Cookies.remove('stringKey');
    });
    it('shoult set an object', () => {
        const o = { a: 1 };
        storage.set('objectKey', o);

        const lo = JSON.parse(Cookies.get('objectKey'));
        expect(lo).toEqual(o);
        Cookies.remove('objectKey');
    });
});

describe('(storage) (Cookies)', () => {
    const storage = new Storage(Storage.TYPE_COOKIE);
    it('shoult get a string', () => {
        const o = 'test';
        const lo = JSON.stringify(o);
        Cookies.set('stringKey', lo);

        expect(storage.get('stringKey')).toBe(o);
        Cookies.remove('stringKey');
    });
    it('shoult get an object', () => {
        const o = { a: 1 };
        const lo = JSON.stringify(o);
        Cookies.set('objectKey', lo);

        expect(storage.get('objectKey')).toEqual(o);
        Cookies.remove('objectKey');
    });
});

describe('(storage) (Cookies)', () => {
    const storage = new Storage(Storage.TYPE_COOKIE);
    it('should remove an item', () => {
        const o = 'test';
        Cookies.set('stringKey', o);
        storage.remove('stringKey');

        expect(storage.get('stringKey')).toBe(null);
    });
});
