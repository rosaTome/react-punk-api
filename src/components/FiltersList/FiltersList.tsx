import { ChangeEventHandler } from "react";
import "./FiltersList.scss"

type FiltersListProps = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    selected: string;
    options: string[];
    label: string;
}

const FiltersList = ({onChange, selected, options, label}: FiltersListProps) => {

    return (
        <div className="filters-list">
            <p>{label}</p>
            {options.map((option, index) => {
                const optionLower = option.toLowerCase();
                const optionCapitalised = 
                optionLower[0].toUpperCase() + optionLower.slice(1);
                return (
                    <div key={"filters-list" + option + index}>
                        <input 
                        type="text"
                        name="gender"
                        id={optionLower}
                        value={optionLower}
                        checked={optionLower === selected.toLowerCase()}
                        onChange={onChange}
                        />
                        <label 
                        className="filters-list__label"
                        htmlFor={optionLower}>
                            {optionCapitalised}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default FiltersList;