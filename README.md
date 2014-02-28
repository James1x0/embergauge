embergauge
==========

###An Ember.js real-time gauge component

**Dependencies:**

+ [justGage](http://justgage.com/)
+ [Ember.js](http://emberjs.com/)

##Simple to include, simple to update...

*In the document head:*
```javascript
<!-- App script, emberjs, and justgage above -->
<script src="embergauge.component.min.js"></script>
```

*In the document (as a component template):*
```javascript
<script type="text/x-handlebars" data-template-name="components/ember-gauge">
    <div class="gauge" {{bind-attr id=gauge}} style="width:200px; height:160px; margin:0 auto;"></div> {{! you can add custom styling here. It's included inline based on what justgage.com did.}}
</script>
```


**And then you can use it like:**

```javascript
{{ember-gauge gauge="orders" data=orders min=0 max=500 title="Orders Today" label="Orders"}}
```

Anywhere in your template. The built-in observer will rebuild the gauge when your data changes. For more information on the gauge component, see http://justgage.com


`data`: `Number` Data to display and keep updated with. Don't try to pass words or something into it, it will break.
`min`: `Number` Minimum number you want on the gauge.
`max`: `Number` Maximum number you want on the gauge.
`title`: `String` Title of the gauge.
`label`: `String` Name of what you're measuring in.
`gauge`: `String` Unique name of your gauge.
