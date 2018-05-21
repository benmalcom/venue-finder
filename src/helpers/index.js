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
	return address.length > 54 ? `${address.substring(0, 57)}...` : address;
};

/**
 * @function returns category from a venue object.
 * @param venue
 * @return {null || string}
 */
export const getCategory = (venue) => {
	if (venue.categories &&  venue.categories.length) {
		const category = venue.categories.filter((category) => category.primary === true)[0];
		if (category) {
			const {shortName} = category;
			return shortName.length > 30 ? `${shortName.substring(0, 29)}...` : shortName;
		}
	}
	return null;
};

// Predefined feedback message
export const messages = {
	accessingLocation: 'Trying to access your location',
	errorGettingVenues: `Error getting venues! Please enable your location services or refresh your browser`,
	noVenues: 'No venues available',
	gettingVenues: 'Getting venues...'
};
