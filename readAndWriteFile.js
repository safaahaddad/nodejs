
const XLSX = require('xlsx')

const readFromExcleFile = (fileName) => {
    const workbook = XLSX.readFile(fileName);
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {
        blankrows: false,
        defval: '',
        header: 'A', //its give alpha sequence to the keys
        raw: true,
        rawNumbers: true
    });
    filteredArr = xlData.slice(1); //to remove the header 
    myJsonArray = filteredArr.map(obj => {
        newObj = {}
        // Get the keys of the object from first row 
        const newKeys = Object.values(xlData[0]);
        // map the keys of the object 
        Object.keys(obj).forEach(key => {
            switch (key) {
                case 'A':
                    newObj[newKeys[0]] = obj['A'];
                    break;
                case 'B':
                    newObj[newKeys[1]] = obj['B'];
                    break;
                case 'C':
                    newObj[newKeys[2]] = obj['C'];
                    break;
                case 'D':
                    newObj[newKeys[3]] = obj['D'];
                    break;
                case 'E':
                    newObj[newKeys[4]] = obj['E'];
                    break;
                case 'F':
                    newObj[newKeys[5]] = obj['F'];
                    break;
                case 'G':
                    newObj[newKeys[6]] = obj['G'];
                    break;
                default:
                    break;
            }
        });
        return (newObj)
    });
    console.log(myJsonArray)
}
readFromExcleFile('./NodeJs_course_1.xlsx');

const addDataToExcleFile = () => {
    const arr = [
        { studentNumber: 52, studentEmail: 'abc@example.com' }
    ];
    const Heading = [['Student Number', 'Student Email']];
    //Had to create a new workbook and then add the header
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws, Heading);
    //Starting in the second row to avoid overriding and skipping headers
    XLSX.utils.sheet_add_json(ws, arr, { origin: 'A2', skipHeader: true });
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'WriteFile.xlsx');
    readFromExcleFile('WriteFile.xlsx');
}
addDataToExcleFile();