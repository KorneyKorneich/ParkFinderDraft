import { create } from "zustand";
import { Nullable } from "@shared/api";
import { Country } from "../types/types.ts";
import { getCountries } from "@screens/PhoneAuthScreen/api/countryCodeUtils.ts";



interface CountrySchema {
    countries: Nullable<Country[]>,
    isLoading: boolean
	defaultData: Nullable<Country>
	fetchCountries: () => void
}


export const useCountryStore = create<CountrySchema>()((set) => ({
	countries: null,
	isLoading: false,
	defaultData: null,

	fetchCountries: async () => {
		const countries = await getCountries();
		set({
			countries,
			defaultData: countries.filter((country) => country.code == "US")[0]
		});
	},



}));


