module.exports = {
 
fizzBuzz: function(num)
{
   //Check if the argument is a number
   if (typeof(num) == 'number')
   {
      //Check if argument is divisible by both 3 and 5
      if((num % 3 == 0) && (num % 5 == 0))
      {
         return 'FizzBuzz';
      }
      //Check if argument is divisible by 5 but not by 3
      else if(num % 5 == 0)
      {
         return 'Buzz';
      }
      //Check if argument is divisible by 3 but not by 5
      else if(num % 3 == 0)
      {
         return 'Fizz';
      }
      //Return argument if not divisibe by both 5 and 3
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