// src/lib/cart/cart.ts
import { writable } from 'svelte/store';

// Create a writable store
export const Cart = writable<string[]>([]);