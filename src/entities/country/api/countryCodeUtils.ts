import axios from "axios";
import { Country, CountryAPIType } from "../types/countyTypes.ts";
import { WebLinks } from "@shared/api";

export async function getCountries(): Promise<Country[]> {
    const response = await axios.get(WebLinks.COUNTRY_API);
    return response.data.map((item: CountryAPIType) => ({
        code: item.alpha2Code,
        name: item.name,
        callingCode: `+${item.callingCodes[0]}`,
        flag: item.flags.png,
    }));
}
