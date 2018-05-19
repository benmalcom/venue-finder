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

export const getCategory = (venue) => venue.categories &&  venue.categories.length ? venue.categories[0] : null;