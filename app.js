const express = require('express')
const bodyparser = require("body-parser")
const app = express()
const port = 3004
const sudokuvalidate = require("./src/sudokuvalidation")

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.post('/sudoku-validation', (req, res) => {
  //retrieve data
  let sudoku = req.body.data;
  //validate sudoku kolom and row
  let realSudoku = sudokuvalidate.validateColumnAndRow(sudoku);
  //validate sudoku is true or false
  let validatingSudoku = sudokuvalidate.validateSudoku(realSudoku);

  res.json(validatingSudoku);
})

app.get('*', function (req, res) {
  res.status(404).json({ 'message': "Url Not Found" });
});

app.listen(port, () => {
  console.log(`server started on port : ${port}`)
})