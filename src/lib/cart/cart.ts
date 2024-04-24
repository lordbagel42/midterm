import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

// Create a writable store using localStorageStore
export const Cart: Writable<{ name: string; quantity: number }[]> = localStorageStore('Cart', []);