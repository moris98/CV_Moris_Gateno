# Moris' Resume

## instructions: 
All you should do in order to open the site is double click 'MorisGatenoCV.html' file. 

## Input validations in form:
html:
```html
    
    <!-- validation for full name -->
    <input id="fullName" name="fullName" type="text" placeholder="Full Name" required pattern="[a-zA-Z]{2,} [a-zA-Z]{2,}">
    ...
    <!-- validation for email -->
    <input id="email" name="email" type="email" placeholder="E-Mail" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$">
```
javaScript:
```javascript
    if (/^[a-zA-Z]{2,} [a-zA-Z]{2,}$/.test(Fullname) && company && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) 
```

## Java Script:

1) Setting an event for navbar - if a tab was chosen and currently the mode is on hamburger, then it will shrink the hamburger back to its original possition
2) Event for clicking the submit btn
3) Smooth transition between the sections


**Author: Moris Gateno**

- [Email](mailto:moris.gateno@gmail.com?subject=Hi)

<br>V 1.0
