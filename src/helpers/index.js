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
	else if (location.address || location.city || location.state || location.country) {
		address += location.address || '';
		address += location.city || '';
		address += location.state || '';
		address += location.country || '';
	} else {
		address = "Not available";
	}
	return address.length > 50 ? address.substring(0, 49) : address;
};

/**
 * @function returns category from a venue object.
 * @param venue
 * @return {null}
 */
export const getCategory = (venue) => {
	if (venue.categories &&  venue.categories.length) {
		return venue.categories.filter((category) => category.primary === true)[0];
	}
	return null;
};

// Predefined feedback message
export const messages = {
	accessingLocation: 'Trying to access your location',
	noLocationOrRefresh: `Your location is either not enabled or it's a network error, please refresh browser...`,
	noVenues: 'No venues available',
	gettingVenues: 'Getting venues...'
};
