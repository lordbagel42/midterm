import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

// Check if the localStorageStore function exists
if (!localStorageStore) {
  console.error('localStorageStore not found. Make sure to install @skeletonlabs/skeleton');
} else {
  // Create a writable store using localStorageStore
  const CartStore = localStorageStore('Cart', [] as { name: string; quantity: number }[]);

  // Export the store as a writable store named "Cart"
  export const Cart = writable(CartStore);

  // Subscribe to the CartStore and update the localStorage on changes
  CartStore.subscribe(value => {
    localStorage.setItem('Cart', JSON.stringify(value));
  });
}
