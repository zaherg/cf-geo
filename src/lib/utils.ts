import { isoCountries } from '@/lib/iso-countries';

export const getCountryName = (countryCode: string): string =>
	// @ts-ignore
	isoCountries?.[countryCode] || countryCode;
