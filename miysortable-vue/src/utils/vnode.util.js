function callExpressionString(callObject, expressionString, assignValue) {
    const expressionArray = expressionString.split('.');
    expressionArray.reduce((a, b) => {
        if (b === expressionArray[expressionArray.length - 1]) {
            if (assignValue === null)
                a[b] = null;
            else if (a[b]) {
                a[b].value = assignValue;
            } else {
                a[b] = {
                    value: assignValue,
                    index: callObject.sortableMaxIndex,
                };
                callObject.sortableMaxIndex++;
            }
        }
        return a[b];
    }, callObject);
}

export {
    callExpressionString as callExpressionString
};