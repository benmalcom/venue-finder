import { shallow } from 'vue-test-utils'
import Wrapper from '../src/components/Wrapper.vue';

describe('Component: Wrapper.vue', () => {
	let comp;

	beforeEach(() => {
		comp = shallow(Wrapper, { // Create a shallow instance of the component
		});
	});

	it('Has the expected html structure', () => {
		expect(comp.element).toMatchSnapshot();
	});

	it('Should contain a div element with class wrapper', () => {
		const div = comp.find('div.wrapper');
		expect(div).toBeDefined();
	});

	it('Should contain a slot inside a div child', () => {
		const slot = comp.find('div.wrapper slot');
		expect(slot).toBeDefined();
	});
});
