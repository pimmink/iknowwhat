import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'I know what.'
	}
});

export default app;