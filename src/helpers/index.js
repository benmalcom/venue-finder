/**
 * @function getFormattedAddress, get a formatted address from a venues' location
 * @param location
 * @return {string}
 */
export const getFormattedAddress = (location) => {
	let address = "";
	if(location.formattedAddress && location.formattedAddress.length) {
		address = location.formattedAddress[0];
	}
	else if (location.address || location.city || location.city || location.country) {
		address += location.address ? `,${location.address}` : '';
		address += location.city ? `,${location.city}` : '';
		address += location.state ? `,${location.state}` : '';
		address += location.country ? `,${location.country}` : '';
	} else {
		address = "Not available";
	}
	return address;
};

/**
 * @function returns category from a venue object.
 * @param venue
 * @return {null}
 */
export const getCategory = (venue) => venue.categories &&  venue.categories.length ? venue.categories[0] : null;

// Predefined feedback message
export const messages = {
	accessingLocation: 'Trying to access your location',
	noLocationOrRefresh: `Your location is either not enabled or it's a network error, please refresh browser...`,
	noVenues: 'No venues available',
	gettingVenues: 'Getting venues...'
};
