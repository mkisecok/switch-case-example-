function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider('Color Analyzer');

const myColor = 'green';

switch (myColor) 
{
    case 'red':
    case 'blue':
    case 'green':
    case 'yellow':
        console.log('I m the color of : ', myColor );
        break;           

    default:
        console.log(myColor, ' are you sure ,is that a color ?' );
        break;

}

 divider('Grading');

 const myGrade = 4.1;
 const roundedGrade = Math.round(myGrade);

 switch (roundedGrade) 
 
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

 divider('Fruits');

 const fruits = 'apple';

 switch (fruits) 
 {
    case 'banana':
    case 'orange':
    case 'strawberry':
    case 'apple':
         console.log(`You have a ${fruits}`);
        break;
    default:
        console.log(`Are you sure is ${fruits} a fruits?`);
        break;
 }

 divider('Percentage Complete')

 const percentageComplate = 50;
 
 switch (true) 
 
 {
    case percentageComplate < 30 :
         console.log('Still a long way to go');
         break;
    case (percentageComplate >= 30 && percentageComplate < 50):
        console.log('Slowly getting there');
         break;

    case (percentageComplate >= 50 && percentageComplate < 80) :
        console.log('You can do it');
        break;

    case (percentageComplate >= 80 && percentageComplate <= 99):
        console.log('This is the last push!');
        break;

    case percentageComplate == 100:
        console.log('You are there. Well done!');  
        break;
     default:
         console.log('Invalid wert');
         break;
 }

 divider('Diffrences');

 /* wenn wir einzel variable haetten, waere  switch method schneller als if-else statement.aber besonder für boolean  waere if-else method besser als switch . */

