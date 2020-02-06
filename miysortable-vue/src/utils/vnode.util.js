function callExpressionString(callObject, expressionString, assignValue) {
    const expressionArray = expressionString.split('.');
    expressionArray.reduce((a, b) => {
        if (b === expressionArray[expressionArray.length - 1]) a[b] = assignValue;
        return a[b];
    }, callObject);
}

export {
    callExpressionString as callExpressionString
};