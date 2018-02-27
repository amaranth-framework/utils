import {
    className,
    extend,
    parentClassName,
    traits,
    traitsExclude
} from '../../src/index';

class A {}

class B extends A {}

class C extends B {}

class T {
    method1() {}
    method2() {}
}

class WT {}

class WET {}

describe('(object) className', () => {
    it('should discover class name', () => {
        expect(className(new A())).toBe('A');
        expect(className(new B())).toBe('B');
    });
});

describe('(object) extend', () => {
    const a = {
        array: [0, 1, 2],
        number: 10,
        object: {
            array: [4, 5, 6],
            number: 1,
            string: 2
        },
        string: 'test'
    };
    it('should replace array', () => {
        expect(extend(true, a, { array: [3, 4, 5] }).array).toEqual([3, 4, 5]);
    });
    it('should extend', () => {
        expect(extend(true, a, { number: 1 }).number).toBe(1);
        expect(extend(true, a, { string: 'test2' }).string).toBe('test2');
    });
    it('should deep extend', () => {
        expect(extend(true, a, { object: { string: 'test2' } }).object.string).toBe('test2');
    });
    it('should not deep extend', () => {
        expect(extend(false, a, { object: { string: 'test' } }).object.string).toBe('test');
    });
});

describe('(object) parentClassName', () => {
    it('should discover parent class name', () => {
        expect(parentClassName(new B())).toBe('A');
        expect(parentClassName(new C())).toBe('B');
    });
});

describe('(object) traits', () => {
    it('should apply traits to class', () => {
        const NT = traits(WT, T);
        expect(typeof NT.prototype.method1).toBe('function');
        expect(typeof NT.prototype.method2).toBe('function');
    });
});

describe('(object) traitsExclude', () => {
    it('should apply traits to class', () => {
        const NT = traits(WET, traitsExclude(T, 'method2'));
        expect(typeof NT.prototype.method1).toBe('function');
        expect(typeof NT.prototype.method2).toBe('undefined');
    });
});
