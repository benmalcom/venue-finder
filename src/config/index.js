export default {
	API_BASE_URL: 'https://api.foursquare.com/v2/venues/',
	FOURSQUARE_CLIENT_ID: 'PZGM3LLNTPTGVRN20QKBKYEKETDI0MA0IVXU4ZWV25KTQ0BP',
	FOURSQUARE_CLIENT_SECRET: 'J3XLHSWOUREGXNMG4AK2HV2KFMSJHL4JKLKWMKO20GPGKDN2'
}

export const getCurrentPosition = () => new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition(
		(position) => resolve(position),
		(error) => reject(error)
	);
});

