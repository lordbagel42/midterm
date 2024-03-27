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
				<strong class="text-xl uppercase">Bagel Industries</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-filled-secondary hover:bg-secondary-450 duration-[500ms]" href="/menu" target="_blank" rel="noreferrer">
					Menu
				</a>
				<a class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]" href="/order" target="_blank" rel="noreferrer">
					Order Now
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
