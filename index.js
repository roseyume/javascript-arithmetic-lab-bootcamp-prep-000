var number =5
number++ // 5
number//6 ... the number was incremented after it was evaluated. 
number--
number
function add(a,b)
{
  var n = a+b 
  return n
}

function subtract(a,b)
{
  var n = a-b 
  return n
}

function multiply(a,b)
{
  var n = a*b 
  return n
}

function divide(a,b)
{
  var n = a/b 
  return n
}

function inc(n)
{
  return ++n
}

function dec(n)
{
  return --n
}

function makeInt(n)
{
  return parseInt(n,10)
}


function preserveDecimal(n)
{
  return parseFloat(n)
}

