<script>
	import { onMount } from 'svelte';

	let title = '';
	let category = '';
	let date = '';
	let location = '';
	let rolesAndResponsibilities = '';

	onMount(async () => {
		// Replace the URL with your CMS or data source URL
		const response = await fetch('/path/to/your/data.json');
		const data = await response.json();

		title = data.title;
		category = data.category;
		date = data.date;
		location = data.location;
		rolesAndResponsibilities = data.rolesAndResponsibilities;
	});

	function formatDate(dateString) {
		const date = new Date(dateString);
		const options = { day: 'numeric', month: 'short', year: 'numeric' };
		return date.toLocaleDateString('en-GB', options);
	}
</script>
