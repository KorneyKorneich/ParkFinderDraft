import { location } from "../common/common";

export interface ParkingInf {
	parkingName: string;
	paid: boolean;
	handicap: boolean;
	charging: boolean;
	workingHours: string;
	rating: number;
	comment: string;
}

export interface ParkingSchema {
	location: location;
	id: string;
	parkingInf: ParkingInf;
	approvedStatus: boolean;
}
