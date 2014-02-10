# angular-kudos directive

[Demo Page](http://olaji.de/inspiration) 

A [svbtle](http://svbtle.com/)-style kudos implementation with [AngularJS](http://angularjs.org/) and [Firebase](http://firebase.com)

## Getting Started

1. include  `angular.js` ,`ngStorage.js` ,  `angular-kudos.js`  and `kudos.css` into your HTML
2. include `angular-kudos`  in your application's module dependencies.
3. Use the `og-kudos` directive.



## Example

```html
<div og-kudos>
</div>
```

This alone would work but it needs a little extra configuration (see attributes) for persistence. 

## Attributes

### `og-kudos-id`

You can give a kudo a unique id to track if a user already voted on a kudo with the particular id, it could take a string or an {{}} expression

*Example:*

```html
<div ng-repeat="quote in quotes">
  <div og-kudos
       og-kudos-id="{{quote.id}}">
 </div>
</div>
```

### `og-kudos-count`

You could return a number of how many kudos were filled in with this attribute, it could take a string or an {{}} expression

*Example:*

```html
<div ng-repeat="quote in quotes">
  <div og-kudos
       og-kudos-id="{{quote.id}}"
       og-kudos-count="{{quotes.kudos}}">
 </div>
</div>
```

### `og-kudos-done`

You can pass in a function for when a kudos action is complete with this attribute

*Example:*

```html
<div ng-repeat="quote in quotes">
  <div og-kudos
       og-kudos-id="{{quote.id}}"
       og-kudos-count="{{quotes.kudos}}"
       og-kudos-done="addCount(quote.id)">
 </div>
</div>
```
##  Controller

an example controller that has  `angular-kudos` and `firebase` as a dependency can be found [here](http://github.com/oojr/inspiration)




## Credits

- @dcurtis for kudos
- https://github.com/masukomi/kudos
- https://github.com/gsklee/ngStorage





## License

MIT


