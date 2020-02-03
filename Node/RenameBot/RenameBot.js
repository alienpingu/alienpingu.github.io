const fs = require('fs');
if(typeof require !== 'undefined') XLSX = require('xlsx');

function titleCase(str) {
   var splitStr = str.toLowerCase().replace('-','_').split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join('_'); 
}

function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;
}

function loadExcel(path) {
	var workbook = XLSX.readFile('../database.xlsx');
	var first_sheet_name = workbook.SheetNames[0];
	var worksheet = workbook.Sheets[first_sheet_name];
	var range = XLSX.utils.decode_range(worksheet['!ref']);
}

console.time()

loadExcel('../ingrati/');


for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
	
    const nameCell = path + titleCase(worksheet[XLSX.utils.encode_cell({r: rowNum, c: 0})].w);
    let pathNum1 = path + 'IMG_' + pad_with_zeroes(worksheet[XLSX.utils.encode_cell({r: rowNum, c: 1})].w, 4) + '.jpg';
    let pathNum2 = path + 'IMG_' + pad_with_zeroes(worksheet[XLSX.utils.encode_cell({r: rowNum, c: 2})].w, 4) + '.jpg';

    fs.rename(pathNum1, nameCell + '_1.jpg', (err) => {
	  	if (err) {
	  		console.log();
	  	}
	});
	fs.rename(pathNum2, nameCell + '_2.jpg', (err) => {
	  	if (err) {
	  		console.log();
	  	}
	});
}

console.timeEnd()





