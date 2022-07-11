class Settings {
	readonly apiUrl: string;
	readonly homeUrl: string;

	constructor() {
		this.apiUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`;
		this.homeUrl = import.meta.env.VITE_HOME_URL;
	}
}

export const settings = new Settings();
