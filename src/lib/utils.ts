import { isoCountries } from '@/lib/iso-countries';
import { Iso3166Alpha2Code } from '@cloudflare/workers-types';

export const getCountryName = (
	countryCode: Iso3166Alpha2Code | 'T1' | undefined,
): string => isoCountries?.[countryCode] || countryCode;
