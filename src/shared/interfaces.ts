import { Current } from "./enums/current";
import { Cylinder } from "./enums/cylinder";
import { Equipment } from "./enums/equipment";
import { GasMixture } from "./enums/gasMixture";
import { Rating } from "./enums/rating";
import { Surge } from "./enums/surge";
import { Visibility } from "./enums/visibility";
import { WaterBody } from "./enums/waterbody";
import { WaterType } from "./enums/waterType";
import { Waves } from "./enums/waves";
import { Weight } from "./enums/weight";

export interface IUser  {
    loggedIn: boolean;
    username?: string;
    token?: string
}

export interface ISettings {
    language: string;
    rememberMe: boolean;
}

export interface IDive {
    id: string
    name: string
    maxDepth: number
    BottomTime?: string
    date: string
    equipmentUsed: Array<Equipment>
    comment?: string
    typeOfWater: WaterType,
    rating?: Rating,
    waterBody?: WaterBody
    airTemperature?: number
    surfaceTemperature?: number
    bottomTemperature?: number
    visibility?: Visibility
    current: Current
    waves?: Waves
    surge?: Surge
    cylinder?: Cylinder
    gasMixture?: GasMixture 
    startingCylinderPressure?: number
    endingCylinderPressure?: number 
    weight?: number
    weightExperience?: Weight
    diveSite?: IDiveSite
    diveLog?: IDiveLog
}

export interface IDiveSite {
	id: number
	name: string
	description: string
	coordinates: IGeoPoint
}

export interface IDiveLog {

}

export interface IGeoPoint {
    lat: number,
    long: number,
}