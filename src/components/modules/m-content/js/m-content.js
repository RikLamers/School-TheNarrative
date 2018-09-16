import $ from 'jquery';

class Content {
	constructor(options) {
		if (options === null) {
			options = {};
		}

		this.options = options;
		this.initialize();
	}

	setup() {
		this.$holder = $('.js--m-content');
		this.$table = this.$holder.find('table');
	}

	wrapTable() {
		this.$table.wrap('<div class=\'o-table__responsive-wrapper\'></div>');
	}

	initialize() {
		this.setup();
		this.wrapTable();
	}
}

new Content();
