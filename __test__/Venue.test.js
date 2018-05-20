import { shallow } from 'vue-test-utils'
import Venue from '../src/components/venue/Venue.vue';
import venueObj from './venue.json';

describe('Component: Venue.vue', () => {
	let comp;

	beforeEach(() => {
		comp = shallow(Venue, { // Create a shallow instance of the component
			propsData: {
				venue: venueObj
			}
		});
	});

	it('Has the expected html structure', () => {
		expect(comp.element).toMatchSnapshot();
	});

	it('Expects :venue prop attributes to be set', () => {
		expect(venueObj.name).toContain(comp.find('strong.name').text());
		expect(comp.find('h6.address').text()).toBeTruthy();
		expect(comp.find('label.category').text()).toBeTruthy();
	});

});
