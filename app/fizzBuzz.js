module.exports = {
 
fizzBuzz: function(num)
{
   if (typeof(num) == 'number')
   {
      if((num % 3 == 0) && (num % 5 == 0))
      {
         return 'FizzBuzz';
      }
      else if(num % 5 == 0)
      {
         return 'Buzz';
      }
      else if(num % 3 == 0)
      {
         return 'Fizz';
      }
      else
      {
         return num;
      }
   }
   else
   {
      return 'Invalid Argument, Enter A Number Next Time';
   }
}

}