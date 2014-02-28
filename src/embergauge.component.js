/*
	Copyright 2014 embergauge @aehrJames

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

App.AnalyticGaugeComponent = Ember.Component.extend({
	didInsertElement: function () {
		this.send('buildGauge');
	},
	dataDidChange: function () {
		this.get('builtGauge').refresh(this.get('data')); //get the gauge property and refresh it's content.
	}.observes('data'),
	actions: {
		buildGauge: function () {
			var cm = this;
			var title = cm.get('title'),
				id = cm.get('gauge'),
				data = cm.get('data'),
				gmin = cm.get('min'),
				gmax = cm.get('max'),
				label = cm.get('label');
			var g = new JustGage({ //compile a new gauge
				'id': id,
				'value': data,
				'min': gmin,
				'max': gmax,
				'title': title,
				'label': label,
				'startAnimationTime': 2000
			});
			cm.set('builtGauge', g); //set the gauge as a property so we can refresh it on data update
		}
	}
});