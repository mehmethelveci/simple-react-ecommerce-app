import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import TextInput from '../TextInput';
import { useTranslation } from 'react-i18next';

const SortOrFilterCard = ({ title, type, data, name, values, onChange, search }) => {
	const { t } = useTranslation();
	const [searchVal, onSearch] = useState('');
	const onChangeRadio = (val) => {
		onChange([val]);
	};

	const onChangeCheckbox = (val) => {
		if (isChecked(val)) {
			onChange(values.filter(item => item !== val));
			return;
		}

		onChange([ ...values, val ]);
		return;
	};

	const isChecked = (id) => {
		return values.some(sItem => id === sItem)
	}

	const filteredData = useMemo(() => {
		return data.filter(item => !(item.text || "").toLocaleLowerCase().search(new RegExp(searchVal.toLocaleLowerCase(), 'g')))
	}, [ data, searchVal ]);

	if (!data || data.length === 0) {
		return <></>
	}

	return (
		<Container>
			<div className="title">{title}</div>
			<div className="content">
				{search && <TextInput placeholder={t("search")} value={searchVal} onChangeText={onSearch} />}
				<div className="radioOrCheckboxGroup">
					{filteredData.map(item => type === 'radio' ?
						<Radio key={item.id} name={name} label={item.text} checked={!!isChecked(item.id)} onChange={() => onChangeRadio(item.id)} /> :
						<Checkbox key={item.id} label={item.text} checked={!!isChecked(item.id)} onChange={() => onChangeCheckbox(item.id)} />
					)}
				</div>
			</div>
		</Container>
	);
};

SortOrFilterCard.propTypes = {
  title: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	values: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	search: PropTypes.bool,
};

SortOrFilterCard.defaultProps = {
	values: [],
  data: [],
};

export default SortOrFilterCard;
