/*
My 5th kata, and 1st in a planned series of rock climbing themed katas.

    In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade).

You will be given a list of climbing grades and you have to write a function to returnlist a of the grades sorted easiest to hardest.

    If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

    Please do vote, rank, and provide any feedback on the kata.*/


function sortGrades(arr) {
    function parseGrade(grade) {
        let rest = grade.slice(1);

        let number = parseInt(rest, 10);
        let suffix = rest.slice(String(number).length);

        return {number, suffix};
    }
}

console.log(sortGrades(["V13", "V14", "VB", "V0"]))