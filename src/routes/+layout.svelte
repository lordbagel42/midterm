<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Bagel Industries</title>
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">Bagel Industries</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/contact"
				>
					Contact Us
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/discover"
				>
					Discover Your Bagel
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/menu"
				>
					Menu
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/order"
				>
					Cart
				</a>
			</svelte:fragment>
		</AppBar>
	
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="flex justify-center items-center">
			<p class="text-sm text-gray-500">© 2024 Bagel Industries. All rights reserved.</p>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
