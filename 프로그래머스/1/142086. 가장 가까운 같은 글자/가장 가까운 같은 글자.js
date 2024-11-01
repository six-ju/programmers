function solution(s) {
    s = s.split('');
    const repeat = [];
    const num = [];
    s.reduce((acc, text, index) => {
        if (!repeat.includes(text)) {
            repeat.push(text);
            num.push(-1);
            return acc;
        }

        if (repeat.includes(text)) {
            const n = repeat.length - repeat.lastIndexOf(text);
            repeat.push(text);
            num.push(n);
            return acc;
        }
    }, []);

    return num;
}
