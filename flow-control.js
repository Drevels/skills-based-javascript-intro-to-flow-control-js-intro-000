function basicTeenager(age) {
  if (age >= 13 && age <= 19) // if age is greater than or equal to 13 and less than or equal to 19
    {return ('You are a teenager!')// if true return 'You are a teenager!'
  }}

function teenager(age) {
  if(age <= 12 || age > 19)
  {return ('You are not a teenager!')
}}

function ageChecker(age) {
  if(age >= 13 && age < 19)
  return('You are a teenager!')
  else if (age >19)
  return('You are a grownup')
  else (age < 12 )
  return('You are a kid')}

function ternaryTeenager(age){
  ((age <= 13 || age <19 )?'You are not a teenager' : 'You are a teenager!')
}

function switchAge(age) {
  switch (age) {
    case 13: 'You are a teenager!'
      break;
    case 14: 'You are a teenager!'
      break;
    case 15: 'You are a teenager!'
      break;
    case 16: 'You are a teenager!'
      break;
    case 17: 'You are a teenager!'
      break;
    case 18: 'You are a teenager!'
      break;
    case 19: 'You are a teenager!'
      break;
      default:return 'You have an age';
  }
}
