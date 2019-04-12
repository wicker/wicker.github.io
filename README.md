# New-Portfolio
Prototyping the new portfolio look in CSS

## YAML Header

|title|
|description|
|type|
|destination|
|category|
|subcat|
|location|
|image|
|permalink|
|publish|

## Web Design Data Model

### JSON

Separate JSON files for talks and projects in the `_data` folder. 

Making the top-level object an array allows for the use of the Liquid for loop.

`_data/projects.json `

```
[
  {
    "title": "",
    "src": "",
    "demo": "",
    "desc": "",
    "thumb": "",
    "year": "",
    "tags": [""],
    "lang": [""]
  }
]
```

```
{% for proj in site.data.projects %}
  {{ proj.title }}
{% endfor %}
```

Similarly, this is the format for the talks:

```
[
  { 
    "title": "",
    "venue": "",
    "src": "",
    "video": "",
    "year": "",
    "tags": [""],
    "lang": [""]
  }
]
```

WordPress
Hardware

### Languages

javascript
python
assembly
c
vhdl
system-verilog

### Tags

vanillajs
react
redux
wordpress
woocommerce
css-grid
html-css
external-api
internal-api
rails
flexbox
react-native
wix
flask
sqlite3
postgresql
pcb-design
testing
arduino
kicad
eaglecad
teensy
analog:

