import './index.scss';
import $ from 'jquery';

import { Dropdown } from './components/objects/index';
import { Content, Navigation, Contact } from './components/modules/index';

/**
 * --------------------------------------------------------------------------
 * jQuery Detection
 * --------------------------------------------------------------------------
 */

($) => {
	if (typeof $ === 'undefined') {
		throw new TypeError(
			'The frontend requires jQuery. Jquery must be included before the framework javascript.'
		);
	}
};

/**
 * --------------------------------------------------------------------------
 * Resize Listeners
 * --------------------------------------------------------------------------
 */

window.onresize = function (event) { };

// import wrapTable from './components/modules/m-content/js/m-content';

// wrapTable();

/**
 * --------------------------------------------------------------------------
 * Scroll Listeners
 * --------------------------------------------------------------------------
 */

const isScrolling = (event) => { };

window.addEventListener('scroll', isScrolling);
