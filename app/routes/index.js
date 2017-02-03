import Ember from 'ember';

export default Ember.Route.extend({
	init(){

		$.ajax({
			url:"https://catalog.paytm.com/v1/g/electronics-store/samsung-one-stop-shop?channel=web&child_site_id=1&site_id=1&version=2&page_count=1&items_per_page=30&resolution=960x720&quality=high&curated=1&_type=1",
		}).then((response)=>{
			this.get('controller').set('data',response.grid_layout);
			this.get('controller').set('filters',response.frontend_filters);
		});

		//get data from server
	},



});


//9810895837 

