import { shallow } from 'vue-test-utils'
import VenueList from '../src/components/venue/VenueList.vue';
import Venue from '../src/components/venue/Venue.vue';
import venueObj from './venue.json';

describe('Component: VenueList.vue', () => {
	let comp;

	beforeEach(() => {
		comp = shallow(VenueList, { // Create a shallow instance of the component
			propsData: {
				venues: [venueObj]
			}
		});
	});

	it('Has the expected html structure', () => {
		expect(comp.element).toMatchSnapshot();
	});

	it('Has :venues prop to be set', () => {
		expect(comp.props().venues).toBeDefined();
	});

	it('Expects :venues to be an array with length 1', () => {
		const venues = comp.props().venues;
		expect(Array.isArray(venues)).toBeTruthy();
		expect(venues.length).toEqual(1);
	});

	it('Should contain Venue component', () => {
		expect(comp.contains(Venue)).toBeTruthy();
	});

});
