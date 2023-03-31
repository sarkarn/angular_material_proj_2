import { IRiskProfile } from "./risk-profile";
import { IStrategyComposition } from "./strategy-composition";

export interface IStrategyDetail {
    id: number,
    name: string,
    symbol: string,
    composition: IStrategyComposition[],
    risk_profile: IRiskProfile
}