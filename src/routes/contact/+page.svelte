<script lang="ts">
	let status = '';
	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		if (name !== '' && email !== '' && message !== '') {
			window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
		} else {
			status = 'Please fill out all fields before submitting.';
		}
	};

	let name = '';
	let email = '';
	let message = '';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
			<input type="hidden" name="remember" value="true" />
			<input type="hidden" name="access_key" value="1320797b-54ab-4ceb-8027-14a5b075a7c1">
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="name" class="sr-only">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						class="appearance-none rounded-md relative block w-full px-3 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Name"
						bind:value={name}
					/>
				</div>
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none rounded-md relative block w-full px-3 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
						bind:value={email}
					/>
				</div>
				<div>
					<label for="message" class="sr-only">Message</label>
					<textarea
						id="message"
						name="message"
						required
						class="appearance-none rounded-md relative block w-full px-3 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Your message"
						bind:value={message}
					></textarea>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Send
				</button>
			</div>
		</form>
		<div class="text-center">{status}</div>
	</div>
</div>
