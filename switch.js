function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider('Color Analyzer');

const myColor = 'yellow';

switch (myColor) 
{
    case 'red':
        console.log('I m the color of : ', myColor );
        break;

    case 'blue':
        console.log('I m the color of : ', myColor );
        break;

    case 'green':
        console.log('I m the color of : ', myColor );
        break;  
    case 'yellow':
        console.log('I m the color of : ', myColor );
        break;           

    default:
        console.log(myColor, ' are you sure ,is that a color ?' );
        break;

}

 divider('Grading');

 const myGrade = 5;


 switch (myGrade) 
 
 {
     case 1:
         console.log(`Excellent, You have successfully completed between 90 and 100% of the material required in the exam with ${myGrade} `)
         break;
    case 2:
        console.log(`Overall very good. However, you need to work more in specific study areas, with ${myGrade}`);
        break;

    case 3:
        console.log(` Good. Your achievement is satisfying, but there is room for improvement, with ${myGrade}`);
        break;

    case 4:
        console.log(`Adequate with ${myGrade}`);
        break;

    case 5:
        console.log(`Sufficient to pass the exam, but very poor otherwise with ${myGrade}`);
        break;

    case 6:
        console.log(` Insufficient. You have shown insufficient knowledge to pass the exam you sat. with ${myGrade}`);
        break;
        
    default:
        console.log(`${myGrade} that is invalid grade`);
         break;
 }

