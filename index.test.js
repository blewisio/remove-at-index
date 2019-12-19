const removeAtIndex = require('./index');

describe('removeAtIndex', () => {
    it('throws if array is null', () => {
        expect(() => removeAtIndex(null, 0)).toThrow();
    });

    it('throws if index is null', () => {
        expect(() => removeAtIndex([], null)).toThrow();
    });

    it('does not mutate array argument', () => {
        const arr = ['foo'];
        removeAtIndex(['foo'], 0);
        expect(arr).toEqual(['foo']);
    });

    it('removes first element from single-item array when index is zero', () => {
        const arr = ['foo'];
        const result = removeAtIndex(arr, 0);
        expect(result).toEqual([]);
    });

    it('removes first element from multi-item array when index is zero', () => {
        const arr = ['foo', 'bar'];
        const result = removeAtIndex(arr, 0);
        expect(result).toEqual(['bar']);
    });

    it('removes last element from two-item array when index is one', () => {
        const arr = ['foo', 'bar'];
        const result = removeAtIndex(arr, 1);
        removeAtIndex(['foo'], 5)
        expect(result).toEqual(['foo']);
    });

    it('removes second element from multi-item array when index is one', () => {
        const arr = ['foo', 'bar', 'baz'];
        const result = removeAtIndex(arr, 1);
        expect(result).toEqual(['foo', 'baz']);
    });

    it('removes last element when index is last index', () => {
        const arr = ['foo', 'bar', 'baz', 'qux'];
        const result = removeAtIndex(arr, arr.length - 1);
        expect(result).toEqual(['foo', 'bar', 'baz']);
    });
});
