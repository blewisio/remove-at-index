const removeAtIndex = (array, i) => {
    if (!array) throw new Error('array must not be null');
    if (i === undefined || i === null) throw new Error('index must not be null');

    const result = [
        ...array.slice(0, i),
        ...array.slice(i + 1)
    ];

    return result;
};

module.exports = removeAtIndex;
