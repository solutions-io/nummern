# Nummern

<p align="center">
<img height="150" width="auto" src="https://nulldev.org/img/nul.png" /><br>
Package to spell out numbers
</p>

## :information_source: About

This NodeJS package allows you to convert numbers to text. It will spell out the whole numbers. 

(Nummern is german for 'Numbers')

> **`123`** -> one hundred twenty-three <br>
> **`2.5`** -> two point five one <br>
> **`-40`** -> minus forty

## :postbox: NPM

[![](https://nodei.co/npm/nummern.svg?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/nummern)

<hr>

## :wrench: Installation

```Assembly
npm i nummern
```

<hr>

## :white_check_mark: Features
  
| Language | Included |
| :---: | :---: |
| English                | :heavy_check_mark: | 
| German                 | :heavy_check_mark: | 
| Bosnian (experimental) | :heavy_check_mark: | 

- Error handling
- Multiple Languages
- Point numbers
- Negative numbers
- zero dependencies

<hr>

## :bulb: Usage

### Convert:


```javascript
nummern(<number>, <optional: language>);
```

Returns the text as string
If no language is specified, english is used.

**Example:**

```Javascript
var nr = require("nummern");

console.log(nr(100));
// => "one hundred"

console.log(nr(1, "german"));
// => "eins"

console.log(nr(201.045, "english"));
// => "two hundred one point zero four five"

console.log(nr(12, "bosnian"));
// => "dvanaest"
```

<hr>

## :copyright: Copyright

`Copyright (c) 2017 NullDev`
