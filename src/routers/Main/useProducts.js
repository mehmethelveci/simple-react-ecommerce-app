import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';

const sortingOptions = [{
	id: 0,
	text: 'Price low to high',
	func: (a, b) => a.price - b.price,
}, {
	id: 1,
	text: 'Price hight to low',
	func: (a, b) => b.price - a.price,
}, {
	id: 2,
	text: 'New to old',
	func: (a, b) => {
		if (moment(a.added).isAfter(b.added)) {
			return -1;
		} else {
			return 1;
		}
	}
}, {
	id: 3,
	text: 'Old to new',
	func: (a, b) => {
		if (moment(a.added).isAfter(b.added)) {
			return 1;
		} else {
			return -1;
		}
	}
}];

const useProducts = (products = [], companies, categoryKey = "itemType") => {
	const [activeCategory, setActiveCategory] = useState();
	const [activePage, setActivePage] = useState(0);
	const [selectedSorting, setSelectedSorting] = useState();
	const [selectedBrands, setSelectedBrands] = useState();
	const [selectedTags, setSelectedTags] = useState();

	const productsDividedIntoCategories = useMemo(() =>
		products.reduce((acc, curr) => {
			if (!acc[curr[categoryKey]]) {
				acc[curr[categoryKey]] = [];
			}
			
			acc[curr[categoryKey]].push(curr);

			return acc;
		}, {})
	, [products, categoryKey]);

	const categories = useMemo(() => {
		if (productsDividedIntoCategories) {
			return Object.keys(productsDividedIntoCategories)
		}

		return [];
	}, [productsDividedIntoCategories]);

	useEffect(() => {
		if (productsDividedIntoCategories) {
			setActiveCategory(Object.keys(productsDividedIntoCategories)[0]);
		}
	}, [productsDividedIntoCategories]);

	const options = useMemo(() => {
		return products.reduce((acc, curr) => {
			const company = companies.find(item => item.slug === curr.manufacturer) || {};
			if (company && !acc.brandsOptions.find(item => item.id === company.slug)) {
				acc.brandsOptions.push({ id: company.slug, text: company.name, count: 1 });
			}
			curr.tags.forEach(tag => {
				if (!acc.tagsOptions.find(item => item.id === tag)) {
					acc.tagsOptions.push({ id: tag, text: tag });
				}
			});

			return acc;
		}, {
			brandsOptions: [],
			tagsOptions: [],
		});
	}, [products, companies]);

	const sortedAndFilteredProducts = productsDividedIntoCategories[activeCategory] && productsDividedIntoCategories[activeCategory]
		.filter(item => {
			if (selectedBrands && selectedBrands.length > 0) {
				return selectedBrands.some(sItem => sItem === item.manufacturer);
			}

			return true;
		})
		.filter(item => {
			if (selectedTags && selectedTags.length > 0) {
				return item.tags.some(sItem => selectedTags.includes(sItem))
			}

			return true;
		})
		.sort(sortingOptions[selectedSorting] && sortingOptions[selectedSorting].func);

	return {
		sortingOptions,
		...options,
		products: sortedAndFilteredProducts,
		categories,
		activeCategory,
		setActiveCategory,
		activePage,
		setActivePage,
		onChangeSorting: setSelectedSorting,
		onChangeBrands: setSelectedBrands,
		onChangeTags: setSelectedTags,
		selectedSorting,
		selectedBrands,
		selectedTags,
	}
};

export default useProducts;
