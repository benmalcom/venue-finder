import { shallow } from 'vue-test-utils'
import TopBar from '../src/components/TopBar.vue';

describe('Component: TopBar.vue', () => {
	let comp;

	beforeEach(() => {
		comp = shallow(TopBar, { // Create a shallow instance of the component
			propsData: {
				position: null
			}
		});
	});

	it('Has the expected html structure', () => {
		expect(comp.element).toMatchSnapshot();
	});

	it('Expects :position prop to be null', () => {
		expect(comp.props().position).toBeNull();
	});

	it('Expects :position prop to be set with lat, long', () => {
		comp.setProps({ position: {
			latitude: 2.2222, longitude: 3.3333
		}});

		expect(comp.vm.position).toBeDefined();
		expect(comp.vm.position.latitude).toEqual(2.2222);
		expect(comp.vm.position.longitude).toEqual(3.3333);
	});

});
