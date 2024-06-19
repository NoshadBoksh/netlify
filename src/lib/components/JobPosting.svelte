<script>
	import { onMount } from 'svelte';
  
	let title = '';
	let category = '';
	let date = '';
	let location = '';
	let rolesAndResponsibilities = '';
  
	onMount(async () => {
	  try {
		const response = await fetch('https://acument.herokuapp.com/api/jobs', {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json',
		  },
		});
  
		if (response.ok) {
		  const json_response = await response.json();
		  const job = json_response.data[0];
		  const attributes = job.attributes;
  
		  title = attributes.title;
		  category = attributes.category;
		  date = attributes.date;
		  location = attributes.location;
		  rolesAndResponsibilities = attributes.roles_and_responsibilities;
  
		  console.log('title: ', title);
		} else {
		  console.error('Failed to fetch jobs:', response.statusText);
		}
	  } catch (error) {
		console.error('Error:', error);
	  }
	});
  
	function formatDate(dateString) {
	  const date = new Date(dateString);
	  const options = { day: 'numeric', month: 'short', year: 'numeric' };
	  return date.toLocaleDateString('en-GB', options);
	}
  </script>
  
  <div class="container">
	<!-- Title -->
	<div class="title">
	  <h1>{title}</h1>
	</div>
  
	<!-- Apply Button -->
	<div class="apply-button">
	  <a href="/apply">Apply</a>
	</div>
  
	<!-- Category -->
	<div class="category">
	  <p>Category: {category}</p>
	</div>
  
	<!-- Roles and Responsibilities -->
	<div class="roles-and-responsibilities">
	  {@html rolesAndResponsibilities}
	</div>
  
	<!-- Location -->
	<div class="location">
	  <p>Location: {location}</p>
	</div>
  
	<!-- Date -->
	<div class="date">
	  <p>Date: {formatDate(date)}</p>
	</div>
  </div>
  
  <style lang="scss">
	body {
	  font-family: Arial, sans-serif;
	  color: #333;
	  background-color: #f4f4f4;
	  margin: 0;
	  padding: 0;
	}
  
	.container {
	  max-width: 800px;
	  margin: auto;
	  padding: 20px;
	  background: #fff;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
  
	.title h1 {
	  color: #444;
	}
  
	.apply-button a {
	  color: #06c;
	  text-decoration: none;
	  font-weight: bold;
  
	  &:hover {
		text-decoration: underline;
	  }
	}
  
	.category,
	.roles-and-responsibilities,
	.location,
	.date {
	  margin-bottom: 20px;
	}
  
	.date p {
	  color: #ffbbbb;
	  font-size: 1.2em;
	  font-weight: bold;
	}
  
	p {
	  line-height: 1.6em;
	}
  </style>
  