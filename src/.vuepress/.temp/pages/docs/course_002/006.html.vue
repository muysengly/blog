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
<td style="text-align:center"><code v-pre>+</code> Addition</td>
<td style="text-align:center">Adds values on either side of the operator.</td>
<td style="text-align:center"><code v-pre>a + b = 30</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>-</code> Subtraction</td>
<td style="text-align:center">Subtracts right hand operand from left hand operand.</td>
<td style="text-align:center"><code v-pre>a – b = -10</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>*</code>Multiplication</td>
<td style="text-align:center">Multiplies values on either side of the operator</td>
<td style="text-align:center"><code v-pre>a \* b = 200</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/</code> Division</td>
<td style="text-align:center">Divides left hand operand by right hand operand</td>
<td style="text-align:center"><code v-pre>b / a = 2</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>%</code> Modulus</td>
<td style="text-align:center">Divides left hand operand by right hand operand and returns remainder</td>
<td style="text-align:center"><code v-pre>b % a = 0</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>**</code> Exponent</td>
<td style="text-align:center">Performs exponential (power) calculation on operators</td>
<td style="text-align:center"><code v-pre>a**b =10</code> to the power 20</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>//</code></td>
<td style="text-align:center">Floor Division - The division of operands where the result is the quotient in which the digits after the decimal point are removed. But if one of the operands is negative, the result is floored, i.e., rounded away from zero (towards negative infinity) −</td>
<td style="text-align:center"><code v-pre>9//2 = 4</code> and <code v-pre>9.0//2.0 = 4.0</code>, <code v-pre>-11//3 = -4</code>, <code v-pre>-11.0//3 = -4.0</code></td>
</tr>
</tbody>
</table>
<h2 id="python-comparison-operators" tabindex="-1"><a class="header-anchor" href="#python-comparison-operators"><span>Python Comparison Operators</span></a></h2>
<p>These operators compare the values on either sides of them and decide the relation among them. They are also called Relational operators.</p>
<p>Assume variable a holds 10 and variable b holds 20, then −</p>
<p>[ <a href="https://www.tutorialspoint.com/python/comparison_operators_example.htm" target="_blank" rel="noopener noreferrer">Show Example</a> ]</p>
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
<td style="text-align:center"><code v-pre>==</code></td>
<td style="text-align:center">If the values of two operands are equal, then the condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a == b)</code> is not true.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>!=</code></td>
<td style="text-align:center">If values of two operands are not equal, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a != b)</code> is true.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&lt;&gt;</code></td>
<td style="text-align:center">If values of two operands are not equal, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a &lt;&gt; b)</code> is true. This is similar to <code v-pre> !=</code> operator.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&gt;</code></td>
<td style="text-align:center">If the value of left operand is greater than the value of right operand, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a &gt; b)</code> is not true.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&lt;</code></td>
<td style="text-align:center">If the value of left operand is less than the value of right operand, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a &lt; b)</code> is true.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&gt;=</code></td>
<td style="text-align:center">If the value of left operand is greater than or equal to the value of right operand, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a &gt;= b)</code> is not true.</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&lt;=</code></td>
<td style="text-align:center">If the value of left operand is less than or equal to the value of right operand, then condition becomes true.</td>
<td style="text-align:center"><code v-pre>(a &lt;= b)</code> is true.</td>
</tr>
</tbody>
</table>
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
<td style="text-align:center"><code v-pre>=</code></td>
<td style="text-align:center">Assigns values from right side operands to left side operand</td>
<td style="text-align:center">c = a + b assigns value of a + b into c</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>+=</code> Add AND</td>
<td style="text-align:center">It adds right operand to the left operand and assign the result to left operand</td>
<td style="text-align:center">c += a is equivalent to c = c + a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>-=</code> Subtract AND</td>
<td style="text-align:center">It subtracts right operand from the left operand and assign the result to left operand</td>
<td style="text-align:center">c -= a is equivalent to c = c - a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>*=</code> Multiply AND</td>
<td style="text-align:center">It multiplies right operand with the left operand and assign the result to left operand</td>
<td style="text-align:center">c _= a is equivalent to c = c _ a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/=</code> Divide AND</td>
<td style="text-align:center">It divides left operand with the right operand and assign the result to left operand</td>
<td style="text-align:center">c /= a is equivalent to c = c / a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>%=</code> Modulus AND</td>
<td style="text-align:center">It takes modulus using two operands and assign the result to left operand</td>
<td style="text-align:center">c %= a is equivalent to c = c % a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>**=</code> Exponent AND</td>
<td style="text-align:center">Performs exponential (power) calculation on operators and assign value to the left operand</td>
<td style="text-align:center">c = a is equivalent to c = c  a</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>//=</code> Floor Division</td>
<td style="text-align:center">It performs floor division on operators and assign value to the left operand</td>
<td style="text-align:center">c //= a is equivalent to c = c // a</td>
</tr>
</tbody>
</table>
<h2 id="python-bitwise-operators" tabindex="-1"><a class="header-anchor" href="#python-bitwise-operators"><span>Python Bitwise Operators</span></a></h2>
<p>Bitwise operator works on bits and performs bit by bit operation. Assume if a = 60; and b = 13; Now in the binary format their values will be 0011 1100 and 0000 1101 respectively. Following table lists out the bitwise operators supported by Python language with an example each in those, we use the above two variables (a and b) as operands −</p>
<p><code v-pre>a = 0011 1100</code></p>
<p><code v-pre>b = 0000 1101</code></p>
<p>-----------------</p>
<p><code v-pre>a&amp;b = 0000 1100</code></p>
<p><code v-pre>a|b = 0011 1101</code></p>
<p><code v-pre>a^b = 0011 0001</code></p>
<p><code v-pre>~a = 1100 0011</code></p>
<p>There are following Bitwise operators supported by Python language</p>
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
<td style="text-align:center">&amp; Binary AND</td>
<td style="text-align:center">Operator copies a bit to the result if it exists in both operands</td>
<td style="text-align:center">(a &amp; b) (means 0000 1100)</td>
</tr>
<tr>
<td style="text-align:center">| Binary OR</td>
<td style="text-align:center">It copies a bit if it exists in either operand.</td>
<td style="text-align:center">(a | b) = 61 (means 0011 1101)</td>
</tr>
<tr>
<td style="text-align:center">^ Binary XOR</td>
<td style="text-align:center">It copies the bit if it is set in one operand but not both.</td>
<td style="text-align:center">(a ^ b) = 49 (means 0011 0001)</td>
</tr>
<tr>
<td style="text-align:center">~ Binary Ones Complement</td>
<td style="text-align:center">It is unary and has the effect of 'flipping' bits.</td>
<td style="text-align:center">(~a ) = -61 (means 1100 0011 in 2's complement form due to a signed binary number.)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&lt;&lt;</code> Binary Left Shift</td>
<td style="text-align:center">The left operands value is moved left by the number of bits specified by the right operand.</td>
<td style="text-align:center">a <code v-pre>&lt;&lt;</code> 2 = 240 (means 1111 0000)</td>
</tr>
<tr>
<td style="text-align:center">&gt;&gt; Binary Right Shift</td>
<td style="text-align:center">The left operands value is moved right by the number of bits specified by the right operand.</td>
<td style="text-align:center">a &gt;&gt; 2 = 15 (means 0000 1111)</td>
</tr>
</tbody>
</table>
<h2 id="python-logical-operators" tabindex="-1"><a class="header-anchor" href="#python-logical-operators"><span>Python Logical Operators</span></a></h2>
<p>There are following logical operators supported by Python language. Assume variable a holds 10 and variable b holds 20 then</p>
<p>[ <a href="https://www.tutorialspoint.com/python/logical_operators_example.htm" target="_blank" rel="noopener noreferrer">Show Example</a> ]</p>
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
<p>[ <a href="https://www.tutorialspoint.com/python/membership_operators_example.htm" target="_blank" rel="noopener noreferrer">Show Example</a> ]</p>
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
<p>[ <a href="https://www.tutorialspoint.com/python/identity_operators_example.htm" target="_blank" rel="noopener noreferrer">Show Example</a> ]</p>
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
<p>[ <a href="https://www.tutorialspoint.com/python/operators_precedence_example.htm" target="_blank" rel="noopener noreferrer">Show Example</a> ]</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Operator &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">******Exponentiation (raise to the power)</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**~ + -**Complement, unary plus and minus (method names for the last two are +@ and -@)</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">*** / % //**Multiply, divide, modulo and floor division</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**+ -**Addition and subtraction</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><code v-pre>**&gt;&gt;</code> <code v-pre>&lt;&lt;**</code> Right and left bitwise shift</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**&amp;**Bitwise 'AND'</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">**^ |**Bitwise exclusive <code v-pre>OR' and regular </code>OR'</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center"><code v-pre>**&lt;=</code> &lt; &gt; <code v-pre>&gt;=**</code> Comparison operators</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center"><code v-pre>**&lt;&gt;</code> == <code v-pre>!=**</code> Equality operators</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">**= %= /= //= -= += *= **=**Assignment operators</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center"><strong>is is not</strong>Identity operators</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center"><strong>in not in</strong>Membership operators</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center"><strong>not or and</strong>Logical operators</td>
</tr>
</tbody>
</table>
</div></template>


