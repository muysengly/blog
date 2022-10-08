---
title: "Python - GUI Programming (Tkinter)"
description: " "
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
toc: true
weight: 27
---


Python provides various options for developing graphical user interfaces (GUIs). Most important are listed below.

- **Tkinter** − Tkinter is the Python interface to the Tk GUI toolkit shipped with Python. We would look this option in this chapter.
- **wxPython** − This is an open-source Python interface for wxWindows [http://wxpython.org](http://wxpython.org/).
- **JPython** − JPython is a Python port for Java which gives Python scripts seamless access to Java class libraries on the local machine [http://www.jython.org](http://www.jython.org/).

There are many other interfaces available, which you can find them on the net.

## Tkinter Programming

Tkinter is the standard GUI library for Python. Python when combined with Tkinter provides a fast and easy way to create GUI applications. Tkinter provides a powerful object-oriented interface to the Tk GUI toolkit.

Creating a GUI application using Tkinter is an easy task. All you need to do is perform the following steps −

- Import the *Tkinter* module.
- Create the GUI application main window.
- Add one or more of the above-mentioned widgets to the GUI application.
- Enter the main event loop to take action against each event triggered by the user.

## Example

```
#!/usr/bin/python

import Tkinter
top = Tkinter.Tk()
# Code to add widgets will go here...
top.mainloop()
```

This would create a following window −

![TK Window](data:image/jpg;base64,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)

## Tkinter Widgets

Tkinter provides various controls, such as buttons, labels and text boxes used in a GUI application. These controls are commonly called widgets.

There are currently 15 types of widgets in Tkinter. We present these widgets as well as a brief description in the following table −

| Sr.No. |                    Operator & Description                    |
| :----: | :----------------------------------------------------------: |
|   1    | [Button](https://www.tutorialspoint.com/python/tk_button.htm)The Button widget is used to display buttons in your application. |
|   2    | [Canvas](https://www.tutorialspoint.com/python/tk_canvas.htm)The Canvas widget is used to draw shapes, such as lines, ovals, polygons and rectangles, in your application. |
|   3    | [Checkbutton](https://www.tutorialspoint.com/python/tk_checkbutton.htm)The Checkbutton widget is used to display a number of options as checkboxes. The user can select multiple options at a time. |
|   4    | [Entry](https://www.tutorialspoint.com/python/tk_entry.htm)The Entry widget is used to display a single-line text field for accepting values from a user. |
|   5    | [Frame](https://www.tutorialspoint.com/python/tk_frame.htm)The Frame widget is used as a container widget to organize other widgets. |
|   6    | [Label](https://www.tutorialspoint.com/python/tk_label.htm)The Label widget is used to provide a single-line caption for other widgets. It can also contain images. |
|   7    | [Listbox](https://www.tutorialspoint.com/python/tk_listbox.htm)The Listbox widget is used to provide a list of options to a user. |
|   8    | [Menubutton](https://www.tutorialspoint.com/python/tk_menubutton.htm)The Menubutton widget is used to display menus in your application. |
|   9    | [Menu](https://www.tutorialspoint.com/python/tk_menu.htm)The Menu widget is used to provide various commands to a user. These commands are contained inside Menubutton. |
|   10   | [Message](https://www.tutorialspoint.com/python/tk_message.htm)The Message widget is used to display multiline text fields for accepting values from a user. |
|   11   | [Radiobutton](https://www.tutorialspoint.com/python/tk_radiobutton.htm)The Radiobutton widget is used to display a number of options as radio buttons. The user can select only one option at a time. |
|   12   | [Scale](https://www.tutorialspoint.com/python/tk_scale.htm)The Scale widget is used to provide a slider widget. |
|   13   | [Scrollbar](https://www.tutorialspoint.com/python/tk_scrollbar.htm)The Scrollbar widget is used to add scrolling capability to various widgets, such as list boxes. |
|   14   | [Text](https://www.tutorialspoint.com/python/tk_text.htm)The Text widget is used to display text in multiple lines. |
|   15   | [Toplevel](https://www.tutorialspoint.com/python/tk_toplevel.htm)The Toplevel widget is used to provide a separate window container. |
|   16   | [Spinbox](https://www.tutorialspoint.com/python/tk_spinbox.htm)The Spinbox widget is a variant of the standard Tkinter Entry widget, which can be used to select from a fixed number of values. |
|   17   | [PanedWindow](https://www.tutorialspoint.com/python/tk_panedwindow.htm)A PanedWindow is a container widget that may contain any number of panes, arranged horizontally or vertically. |
|   18   | [LabelFrame](https://www.tutorialspoint.com/python/tk_labelframe.htm)A labelframe is a simple container widget. Its primary purpose is to act as a spacer or container for complex window layouts. |
|   19   | [tkMessageBox](https://www.tutorialspoint.com/python/tk_messagebox.htm)This module is used to display message boxes in your applications. |

Let us study these widgets in detail −

## Standard attributes

Let us take a look at how some of their common attributes.such as sizes, colors and fonts are specified.

- [Dimensions](https://www.tutorialspoint.com/python/tk_dimensions.htm)
- [Colors](https://www.tutorialspoint.com/python/tk_colors.htm)
- [Fonts](https://www.tutorialspoint.com/python/tk_fonts.htm)
- [Anchors](https://www.tutorialspoint.com/python/tk_anchors.htm)
- [Relief styles](https://www.tutorialspoint.com/python/tk_relief.htm)
- [Bitmaps](https://www.tutorialspoint.com/python/tk_bitmaps.htm)
- [Cursors](https://www.tutorialspoint.com/python/tk_cursors.htm)

Let us study them briefly −

## Geometry Management

All Tkinter widgets have access to specific geometry management methods, which have the purpose of organizing widgets throughout the parent widget area. Tkinter exposes the following geometry manager classes: pack, grid, and place.

- [The *pack()* Method](https://www.tutorialspoint.com/python/tk_pack.htm) − This geometry manager organizes widgets in blocks before placing them in the parent widget.
- [The *grid()* Method](https://www.tutorialspoint.com/python/tk_grid.htm) − This geometry manager organizes widgets in a table-like structure in the parent widget.
- [The *place()* Method](https://www.tutorialspoint.com/python/tk_place.htm) − This geometry manager organizes widgets by placing them in a specific position in the parent widget.

Let us study the geometry management methods briefly −
