<template><div><p>Operators are the constructs which can manipulate the value of operands.</p>
<p>Consider the expression 4 + 5 = 9. Here, 4 and 5 are called operands and + is called operator.</p>
<h2 id="types-of-operator" tabindex="-1"><a class="header-anchor" href="#types-of-operator"><span>Types of Operator</span></a></h2>
<p>Python language supports the following types of operators.</p>
<ul>
<li>Arithmetic Operators</li>
<li>Comparison (Relational) Operators</li>
<li>Assignment Operators</li>
<li>Logical Operators</li>
<li>Bitwise Operators</li>
<li>Membership Operators</li>
<li>Identity Operators</li>
</ul>
<p>Let us have a look on all operators one by one.</p>
<h2 id="python-arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#python-arithmetic-operators"><span>Python Arithmetic Operators</span></a></h2>
<p>Assume variable a holds 10 and variable b holds 20, then −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+ Addition</td>
<td style="text-align:center">Adds values on either side of the operator.</td>
<td style="text-align:center">a + b = 30</td>
</tr>
<tr>
<td style="text-align:center">- Subtraction</td>
<td style="text-align:center">Subtracts right hand operand from left hand operand.</td>
<td style="text-align:center">a – b = -10</td>
</tr>
<tr>
<td style="text-align:center">* Multiplication</td>
<td style="text-align:center">Multiplies values on either side of the operator</td>
<td style="text-align:center">a * b = 200</td>
</tr>
<tr>
<td style="text-align:center">/ Division</td>
<td style="text-align:center">Divides left hand operand by right hand operand</td>
<td style="text-align:center">b / a = 2</td>
</tr>
<tr>
<td style="text-align:center">% Modulus</td>
<td style="text-align:center">Divides left hand operand by right hand operand and returns remainder</td>
<td style="text-align:center">b % a = 0</td>
</tr>
<tr>
<td style="text-align:center">** Exponent</td>
<td style="text-align:center">Performs exponential (power) calculation on operators</td>
<td style="text-align:center">a**b =10 to the power 20</td>
</tr>
<tr>
<td style="text-align:center">//</td>
<td style="text-align:center">Floor Division - The division of operands where the result is the quotient in which the digits after the decimal point are removed. But if one of the operands is negative, the result is floored, i.e., rounded away from zero (towards negative infinity) −</td>
<td style="text-align:center">9//2 = 4 and 9.0//2.0 = 4.0, -11//3 = -4, -11.0//3 = -4.0</td>
</tr>
</tbody>
</table>
<h2 id="python-comparison-operators" tabindex="-1"><a class="header-anchor" href="#python-comparison-operators"><span>Python Comparison Operators</span></a></h2>
<p>These operators compare the values on either sides of them and decide the relation among them. They are also called Relational operators.</p>
<p>Assume variable a holds 10 and variable b holds 20, then −</p>
<!-- | Operator |                         Description                          |                      Example                      |
| :------: | :----------------------------------------------------------: | :-----------------------------------------------: |
|    ==    | If the values of two operands are equal, then the condition becomes true. |               (a == b) is not true.               |
|    !=    | If values of two operands are not equal, then condition becomes true. |                 (a != b) is true.                 |
|    <>    | If values of two operands are not equal, then condition becomes true. | (a <> b) is true. This is similar to != operator. |
|    >     | If the value of left operand is greater than the value of right operand, then condition becomes true. |               (a > b) is not true.                |
|    <     | If the value of left operand is less than the value of right operand, then condition becomes true. |                 (a < b) is true.                  |
|    >=    | If the value of left operand is greater than or equal to the value of right operand, then condition becomes true. |               (a >= b) is not true.               |
|    <=    | If the value of left operand is less than or equal to the value of right operand, then condition becomes true. |                 (a <= b) is true.                 | -->
<h2 id="python-assignment-operators" tabindex="-1"><a class="header-anchor" href="#python-assignment-operators"><span>Python Assignment Operators</span></a></h2>
<p>Assume variable a holds 10 and variable b holds 20, then −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">=</td>
<td style="text-align:center">Assigns values from right side operands to left side operand</td>
<td style="text-align:center">c = a + b assigns value of a + b into c</td>
</tr>
<tr>
<td style="text-align:center">+= Add AND</td>
<td style="text-align:center">It adds right operand to the left operand and assign the result to left operand</td>
<td style="text-align:center">c += a is equivalent to c = c + a</td>
</tr>
<tr>
<td style="text-align:center">-= Subtract AND</td>
<td style="text-align:center">It subtracts right operand from the left operand and assign the result to left operand</td>
<td style="text-align:center">c -= a is equivalent to c = c - a</td>
</tr>
<tr>
<td style="text-align:center">*= Multiply AND</td>
<td style="text-align:center">It multiplies right operand with the left operand and assign the result to left operand</td>
<td style="text-align:center">c *= a is equivalent to c = c * a</td>
</tr>
<tr>
<td style="text-align:center">/= Divide AND</td>
<td style="text-align:center">It divides left operand with the right operand and assign the result to left operand</td>
<td style="text-align:center">c /= a is equivalent to c = c / a</td>
</tr>
<tr>
<td style="text-align:center">%= Modulus AND</td>
<td style="text-align:center">It takes modulus using two operands and assign the result to left operand</td>
<td style="text-align:center">c %= a is equivalent to c = c % a</td>
</tr>
<tr>
<td style="text-align:center">**= Exponent AND</td>
<td style="text-align:center">Performs exponential (power) calculation on operators and assign value to the left operand</td>
<td style="text-align:center">c **= a is equivalent to c = c ** a</td>
</tr>
<tr>
<td style="text-align:center">//= Floor Division</td>
<td style="text-align:center">It performs floor division on operators and assign value to the left operand</td>
<td style="text-align:center">c //= a is equivalent to c = c // a</td>
</tr>
</tbody>
</table>
<h2 id="python-bitwise-operators" tabindex="-1"><a class="header-anchor" href="#python-bitwise-operators"><span>Python Bitwise Operators</span></a></h2>
<p>Bitwise operator works on bits and performs bit by bit operation. Assume if a = 60; and b = 13; Now in the binary format their values will be 0011 1100 and 0000 1101 respectively. Following table lists out the bitwise operators supported by Python language with an example each in those, we use the above two variables (a and b) as operands −</p>
<p>a = 0011 1100</p>
<p>b = 0000 1101</p>
<p>-----------------</p>
<p>a&amp;b = 0000 1100</p>
<p>a|b = 0011 1101</p>
<p>a^b = 0011 0001</p>
<p>~a = 1100 0011</p>
<p>There are following Bitwise operators supported by Python language</p>
<!-- |         Operator         |                         Description                          |                           Example                            |
| :----------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       & Binary AND       | Operator copies a bit to the result if it exists in both operands |                  (a & b) (means 0000 1100)                   |
|       \| Binary OR       |       It copies a bit if it exists in either operand.        |               (a \| b) = 61 (means 0011 1101)                |
|       ^ Binary XOR       | It copies the bit if it is set in one operand but not both.  |                (a ^ b) = 49 (means 0011 0001)                |
| ~ Binary Ones Complement |      It is unary and has the effect of 'flipping' bits.      | (~a ) = -61 (means 1100 0011 in 2's complement form due to a signed binary number. |
|   << Binary Left Shift   | The left operands value is moved left by the number of bits specified by the right operand. |                a << 2 = 240 (means 1111 0000)                |
|  >> Binary Right Shift   | The left operands value is moved right by the number of bits specified by the right operand. |                a >> 2 = 15 (means 0000 1111)                 | -->
<h2 id="python-logical-operators" tabindex="-1"><a class="header-anchor" href="#python-logical-operators"><span>Python Logical Operators</span></a></h2>
<p>There are following logical operators supported by Python language. Assume variable a holds 10 and variable b holds 20 then</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">and Logical AND</td>
<td style="text-align:center">If both the operands are true then condition becomes true.</td>
<td style="text-align:center">(a and b) is true.</td>
</tr>
<tr>
<td style="text-align:center">or Logical OR</td>
<td style="text-align:center">If any of the two operands are non-zero then condition becomes true.</td>
<td style="text-align:center">(a or b) is true.</td>
</tr>
<tr>
<td style="text-align:center">not Logical NOT</td>
<td style="text-align:center">Used to reverse the logical state of its operand.</td>
<td style="text-align:center">Not(a and b) is false.</td>
</tr>
</tbody>
</table>
<h2 id="python-membership-operators" tabindex="-1"><a class="header-anchor" href="#python-membership-operators"><span>Python Membership Operators</span></a></h2>
<p>Python’s membership operators test for membership in a sequence, such as strings, lists, or tuples. There are two membership operators as explained below −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">in</td>
<td style="text-align:center">Evaluates to true if it finds a variable in the specified sequence and false otherwise.</td>
<td style="text-align:center">x in y, here in results in a 1 if x is a member of sequence y.</td>
</tr>
<tr>
<td style="text-align:center">not in</td>
<td style="text-align:center">Evaluates to true if it does not finds a variable in the specified sequence and false otherwise.</td>
<td style="text-align:center">x not in y, here not in results in a 1 if x is not a member of sequence y.</td>
</tr>
</tbody>
</table>
<h2 id="python-identity-operators" tabindex="-1"><a class="header-anchor" href="#python-identity-operators"><span>Python Identity Operators</span></a></h2>
<p>Identity operators compare the memory locations of two objects. There are two Identity operators explained below −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">is</td>
<td style="text-align:center">Evaluates to true if the variables on either side of the operator point to the same object and false otherwise.</td>
<td style="text-align:center">x is y, here <strong>is</strong> results in 1 if id(x) equals id(y).</td>
</tr>
<tr>
<td style="text-align:center">is not</td>
<td style="text-align:center">Evaluates to false if the variables on either side of the operator point to the same object and true otherwise.</td>
<td style="text-align:center">x is not y, here <strong>is not</strong> results in 1 if id(x) is not equal to id(y).</td>
</tr>
</tbody>
</table>
<h2 id="python-operators-precedence" tabindex="-1"><a class="header-anchor" href="#python-operators-precedence"><span>Python Operators Precedence</span></a></h2>
<p>The following table lists all operators from highest precedence to lowest.</p>
<!-- | Sr.No. |                    Operator & Description                    |
| :----: | :----------------------------------------------------------: |
|   1    |          ***\***Exponentiation (raise to the power)          |
|   2    | **~ + -**Complement, unary plus and minus (method names for the last two are +@ and -@) |
|   3    |   *** / % //**Multiply, divide, modulo and floor division    |
|   4    |               **+ -**Addition and subtraction                |
|   5    |            **>> <<**Right and left bitwise shift             |
|   6    |                      **&**Bitwise 'AND'                      |
|   7    |       **^ \|**Bitwise exclusive `OR' and regular` OR'        |
|   8    |              **<= < > >=**Comparison operators               |
|   9    |                **<> == !=**Equality operators                |
|   10   |      **= %= /= //= -= += \*= \**=**Assignment operators      |
|   11   |               **is is not**Identity operators                |
|   12   |              **in not in**Membership operators               |
|   13   |               **not or and**Logical operators                | -->
</div></template>


