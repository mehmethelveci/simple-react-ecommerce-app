import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import Button from '../Button';
import PaginationContainer from './styles';
import { useTranslation } from 'react-i18next';

const Pagination = ({ totalPageCount, activePage, onChange, children, totalItemCountPerPage }) => {
	const { t } = useTranslation();
	const pages = useMemo(() => Array.from(Array(totalPageCount).keys()), [totalPageCount]);

	const onPrev = () => {
		onChange(activePage - 1);
	};

	const onNext = () => {
		onChange(activePage + 1);
	};

	const onClick = (val) => {
		console.log(val);
		onChange(val);
	}

	if (children.length === 0) {
		return <></>;
	} 

	return <div className="container">
		{children.slice(activePage * totalItemCountPerPage, (activePage + 1) * totalItemCountPerPage)}
		<PaginationContainer pages={pages} activePage={activePage}>
			<Button type="text" disabled={activePage === 0} onClick={onPrev}>
				<LeftArrowIcon /> {t("prev")}
			</Button>
			{pages.map(item =>
				<Button
					type={activePage === item ? "primary" : "text"}
					key={item}
					onClick={() => onClick(item)}
					className={`page${activePage > item ? activePage - item : (activePage - item) * -1}`}
				>
					{item + 1}
				</Button>
			)}
			<Button type="text" disabled={activePage === pages.length - 1} onClick={onNext}>
				{t("next")} <RightArrowIcon />
			</Button>
		</PaginationContainer>
	</div>
};

Pagination.propTypes = {
	totalPageCount: PropTypes.number.isRequired,
	activePage: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.array.isRequired,
	totalItemCountPerPage: PropTypes.number.isRequired,
}

export default Pagination;
