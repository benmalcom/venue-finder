import { shallow, mount } from 'vue-test-utils';
import App from '../src/App.vue';
import TopBar from '../src/components/TopBar.vue';
import Wrapper from '../src/components/Wrapper.vue';

describe('Component: App.vue', () => {
	let comp;

	beforeEach(() => {
		comp = shallow(App);
	});

	it('Has the expected html structure', () => {
		expect(comp.element).toMatchSnapshot();
	});


	it('Should contain Wrapper component', () => {
		expect(comp.find(Wrapper).exists()).toBeTruthy();
	});

	it('Should set component default data', () => {
		expect(comp.vm.currentPosition).toBeNull();
		expect(comp.vm.venues).toBeNull();
		expect(Array.isArray(comp.vm.venueCategories)).toBeTruthy();
		expect(comp.vm.message).toBeDefined();
		expect(typeof comp.vm.message).toEqual("string");
		expect(comp.vm.alertClass).toBeDefined();
		expect(typeof comp.vm.alertClass).toEqual("string");
		expect(typeof comp.vm.searchFilter).toEqual("object");
	});
});
