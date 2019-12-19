# burger

## Description

This is a burger web application by Ben Honken.  It uses express, handlebars, mysql, node and sequelize to create a server and interface with a database.  You may add and devour burgers.  When you hit the submit button, the text is selected using jQuery and an AJAX post call is made.  The call contains the burgers name and automatically sets devoured to false.  The burger list is rendered via handlebars.  When a devour button is pushed, it make an AJAX put call, updating the burger status to devour and re-rendering the page after a brief delay to ensure that the server has time to update.  


## Usage

As a fan of burgers, I want to be able to track my burgers so that I can remember what I have eaten and what I have left in the fridge.  

## Credits

Ben Honken made this.

## License

MIT License

Copyright (c) [2019] [Ben Honken]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
