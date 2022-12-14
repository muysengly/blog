---
title: "Lists"
description: "The most..."
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
toc: true
weight: 11
---



The most basic data structure in Python is the **sequence**. Each element of a sequence is assigned a number - its position or index. The first index is zero, the second index is one, and so forth.

Python has six built-in types of sequences, but the most common ones are lists and tuples, which we would see in this tutorial.

There are certain things you can do with all sequence types. These operations include indexing, slicing, adding, multiplying, and checking for membership. In addition, Python has built-in functions for finding the length of a sequence and for finding its largest and smallest elements.

## Python Lists

The list is a most versatile datatype available in Python which can be written as a list of comma-separated values (items) between square brackets. Important thing about a list is that items in a list need not be of the same type.

Creating a list is as simple as putting different comma-separated values between square brackets. For example −

```bash
list1 = ['physics', 'chemistry', 1997, 2000];
list2 = [1, 2, 3, 4, 5 ];
list3 = ["a", "b", "c", "d"]
```

Similar to string indices, list indices start at 0, and lists can be sliced, concatenated and so on.

## Accessing Values in Lists

To access values in lists, use the square brackets for slicing along with the index or indices to obtain value available at that index. For example −

[Live Demo](http://tpcg.io/GWTzcq)

```bash
#!/usr/bin/python

list1 = ['physics', 'chemistry', 1997, 2000];
list2 = [1, 2, 3, 4, 5, 6, 7 ];
print "list1[0]: ", list1[0]
print "list2[1:5]: ", list2[1:5]
```

When the above code is executed, it produces the following result −

```bash
list1[0]: physics
list2[1:5]: [2, 3, 4, 5]
```

## Updating Lists

You can update single or multiple elements of lists by giving the slice on the left-hand side of the assignment operator, and you can add to elements in a list with the append() method. For example −

[Live Demo](http://tpcg.io/PHXpBD)

```bash
#!/usr/bin/python

list = ['physics', 'chemistry', 1997, 2000];
print "Value available at index 2 : "
print list[2]
list[2] = 2001;
print "New value available at index 2 : "
print list[2]
```

**Note** − append() method is discussed in subsequent section.

When the above code is executed, it produces the following result −

```bash
Value available at index 2 :
1997
New value available at index 2 :
2001
```

## Delete List Elements

To remove a list element, you can use either the del statement if you know exactly which element(s) you are deleting or the remove() method if you do not know. For example −

[Live Demo](http://tpcg.io/k3xK1x)

```bash
#!/usr/bin/python

list1 = ['physics', 'chemistry', 1997, 2000];
print list1
del list1[2];
print "After deleting value at index 2 : "
print list1
```

When the above code is executed, it produces following result −

```bash
['physics', 'chemistry', 1997, 2000]
After deleting value at index 2 :
['physics', 'chemistry', 2000]
```

**Note** − remove() method is discussed in subsequent section.

## Basic List Operations

Lists respond to the + and * operators much like strings; they mean concatenation and repetition here too, except that the result is a new list, not a string.

In fact, lists respond to all of the general sequence operations we used on strings in the prior chapter.

|      Python Expression       |           Results            |  Description  |
| :--------------------------: | :--------------------------: | :-----------: |
|        len([1, 2, 3])        |              3               |    Length     |
|    [1, 2, 3] + [4, 5, 6]     |      [1, 2, 3, 4, 5, 6]      | Concatenation |
|         ['Hi!'] * 4          | ['Hi!', 'Hi!', 'Hi!', 'Hi!'] |  Repetition   |
|        3 in [1, 2, 3]        |             True             |  Membership   |
| for x in [1, 2, 3]: print x, |            1 2 3             |   Iteration   |

## Indexing, Slicing, and Matrixes

Because lists are sequences, indexing and slicing work the same way for lists as they do for strings.

Assuming following input −

```bash
L = ['spam', 'Spam', 'SPAM!']
```

| Python Expression |      Results      |          Description           |
| :---------------: | :---------------: | :----------------------------: |
|       L[2]        |       SPAM!       |     Offsets start at zero      |
|       L[-2]       |       Spam        | Negative: count from the right |
|       L[1:]       | ['Spam', 'SPAM!'] |    Slicing fetches sections    |

## Built-in List Functions & Methods

Python includes the following list functions −

| Sr.No. |                  Function with Description                   |
| :----: | :----------------------------------------------------------: |
|   1    | [cmp(list1, list2)](https://www.tutorialspoint.com/python/list_cmp.htm)Compares elements of both lists. |
|   2    | [len(list)](https://www.tutorialspoint.com/python/list_len.htm)Gives the total length of the list. |
|   3    | [max(list)](https://www.tutorialspoint.com/python/list_max.htm)Returns item from the list with max value. |
|   4    | [min(list)](https://www.tutorialspoint.com/python/list_min.htm)Returns item from the list with min value. |
|   5    | [list(seq)](https://www.tutorialspoint.com/python/list_list.htm)Converts a tuple into list. |

Python includes following list methods

| Sr.No. |                   Methods with Description                   |
| :----: | :----------------------------------------------------------: |
|   1    | [list.append(obj)](https://www.tutorialspoint.com/python/list_append.htm)Appends object obj to list |
|   2    | [list.count(obj)](https://www.tutorialspoint.com/python/list_count.htm)Returns count of how many times obj occurs in list |
|   3    | [list.extend(seq)](https://www.tutorialspoint.com/python/list_extend.htm)Appends the contents of seq to list |
|   4    | [list.index(obj)](https://www.tutorialspoint.com/python/list_index.htm)Returns the lowest index in list that obj appears |
|   5    | [list.insert(index, obj)](https://www.tutorialspoint.com/python/list_insert.htm)Inserts object obj into list at offset index |
|   6    | [list.pop(obj=list[-1\])](https://www.tutorialspoint.com/python/list_pop.htm)Removes and returns last object or obj from list |
|   7    | [list.remove(obj)](https://www.tutorialspoint.com/python/list_remove.htm)Removes object obj from list |
|   8    | [list.reverse()](https://www.tutorialspoint.com/python/list_reverse.htm)Reverses objects of list in place |
|   9    | [list.sort([func\])](https://www.tutorialspoint.com/python/list_sort.htm)Sorts objects of list, use compare func if given |
