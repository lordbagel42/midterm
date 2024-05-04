// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// Define a Locals interface for any data you want to be available
	// on the server-side (e.g. in endpoints)
	interface Locals {
		user: {
			id: number;
			name: string;
		};
	}

	// Define a PageData interface for any data you want to be available
	// on the server-side when rendering a page
	interface PageData {
		title: string;
		description: string;
	}

	// Define an Error interface for any error objects you want to be
	// able to handle in a consistent way
	interface Error {
		status: number;
		message: string;
	}

	// Define a Platform interface for any data you want to be able to
	// access about the current platform (e.g. browser or server)
	interface Platform {
		env: {
			MODE: 'development' | 'production';
		};
		browser: boolean;
	}
}
