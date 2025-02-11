function averageLength(array) {
    const average = Math.round(array.reduce((acc, item) => acc + item.length, 0) / array.length);

    return array.map((item) => item[0].repeat(average));
}