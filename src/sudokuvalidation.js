module.exports = {
    validateColumnAndRow: function (data) {
        let sudoku1 = [];
        let sudoku2 = [];

        //validate 9x9
        const grid = 9
        //if there is length data less than 9 return false
        if (data.length < 9) return false;
        //divide 18 rows into 2 parts
        for (let row = 0; row < data.length; row++) {
            if (row < grid) {
                if (data[row].length == grid) {
                    sudoku1.push(data[row]);
                }
            } else if (row >= grid) {
                if (data[row].length == grid) {
                    sudoku2.push(data[row]);
                }
            }
        }

        return [sudoku1, sudoku2];
    },

    validateSudoku: function (sudoku) {
        let result = [];
        //looping for 2 data sudoku
        for (let number = 0; number < sudoku.length; number++) {
            var map = {};
            var tempData = 0;

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    tempData = sudoku[number][i][j];
                    //check if there is number 0 / bigger than 9 in data
                    if (tempData == 0 || tempData > 9) return false;

                    //check if the new number have same row/col/grid from before
                    if (map['row' + i + tempData] || map['col' + j + tempData] || map['grid' + Math.floor(i / 3) + Math.floor(j / 3) + tempData]) return false;

                    //save new number with identify row,col,grid to validate
                    map['row' + i + tempData] = 1;
                    map['col' + j + tempData] = 1;
                    map['grid' + Math.floor(i / 3) + Math.floor(j / 3) + tempData] = 1;
                }
            }
            result.push("Valid");
        }

        return result;
    }
}