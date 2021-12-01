export const isPromise = (v) => {
  return v && typeof v.then === 'function';
};

export const getTotalPrice = (products = []) => {
	let total = 0;
	products.forEach(item => {
		total = total + (item.price * item.count);
	});

	return total.toFixed(2);
};

export const getProductsAfterRemoveFromBasket = (products, product) => {
	const newProducts = [ ...products ];
	const index = newProducts.findIndex(item => item.slug === product.slug);

	if (index !== -1) {
		newProducts[index].count--;
	}

	return newProducts.filter(item => item.count !== 0);
};

export const getProductsAfterOnAddToBasket = (products, product) => {
	const newProducts = [ ...products ];
	const index = products.findIndex(item => item.slug === product.slug);
	
	if (index === -1) {
		product.count = 1;
		newProducts.push(product);
	} else {
		newProducts[index].count++;
	}

	return newProducts;
};
