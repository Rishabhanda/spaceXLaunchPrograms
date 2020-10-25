export class LaunchedMission {
    missionName: string;
    launchYear: string;
    launchSuccess: boolean;
    missionPatch: string;
    missionSmallPatch: string;
    missionIds: string[];
    landSuccess: boolean;
    flightNumber: number;
    rocketName: string;

    constructor(data) {
        this.missionName = data ? data.mission_name : null;
        this.launchYear = data ? data.launch_year : null;
        this.launchSuccess = data ? data.launch_success : false;
        this.missionPatch = data ? data.links ? data.links.mission_patch : null : null;
        this.missionSmallPatch = data ? data.links ? data.links.mission_patch_small : null : null;
        this.missionIds = data ? data.mission_id : null;
        this.landSuccess = data ? this.getLandSuccess(data.rocket) : null;
        this.flightNumber = data ? data.flight_number : null;
        this.rocketName = data ? data.rocket ? data.rocket.rocket_name : null : null;
    }

    private getLandSuccess(data) {
        if (data && data.first_stage && data.first_stage.cores) {
            const cores = data.first_stage.cores;
            if (!cores.length) {
                return null;
            }
            return cores[0].land_success;
        }
        return null;
    }
}
