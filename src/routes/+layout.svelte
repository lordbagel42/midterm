<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<svelte:head lang="ts">
	<title>Bagel Industries</title>
	<link rel="icon" type="image/png" href="/favicon.png">
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
					key="contact"
				>
					<span class="sr-only">Contact Us</span>
					<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
						<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-6v2h-2v-2h2zm0-4v2h-2V7h2zM6 7h2v2H6V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z"/>
					</svg>
					Contact Us
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/discover"
					key="discover"
				>
					<span class="sr-only">Discover Your Bagel</span>
					<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
						<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-6v2h-2v-2h2zm0-4v2h-2V7h2zM6 7h2v2H6V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z"/>
					</svg>
					Discover Your Bagel
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/menu"
					key="menu"
				>
					<span class="sr-only">Menu</span>
					<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
						<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-6v2h-2v-2h2zm0-4v2h-2V7h2zM6 7h2v2H6V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z"/>
					</svg>
					Menu
				</a>
				<a
					class="btn btn-sm variant-filled-primary hover:bg-primary-400 duration-[500ms]"
					href="/order"
					key="order"
				>
					<span class="sr-only">Cart</span>
					<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
						<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-6v2h-2v-2h2zm0-4v2h-2V7h2zM6 7h2v2H6V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z"/>
					</svg>
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

