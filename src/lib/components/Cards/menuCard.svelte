<script lang="ts">
	import { Cart } from '$lib/cart/cart';
	import { reactive, ref, computed } from 'vue';

	export let item = reactive({
		image: String,
		name: String,
		description: String,
		qualities: String
	});

	const quantity = ref(1);
	const maxQuantity = 10;

	const cart = Cart.getCart();

	const addToCart = (name: string, quantityToAdd: number) => {
		const existingItem = cart.items.find((item) => item.name === name);

		if (existingItem) {
			existingItem.quantity += quantityToAdd;
		} else {
			cart.items.push({ name, quantity: quantityToAdd });
		}
	};

	const decreaseQuantity = () => {
		if (quantity.value > 1) {
			quantity.value--;
		}
	};

	const increaseQuantity = () => {
	
