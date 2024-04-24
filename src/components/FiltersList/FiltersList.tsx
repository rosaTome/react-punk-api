import "./FiltersList.scss"

type FiltersListProps = {
    label: string;
    selected: string;
    options: string[];
    onChange: (selected: string) => void;
}

const FiltersList = ({ label, selected, options, onChange}: FiltersListProps) => {

    return (
        <div className="filters-list">
            <p>{label}</p>
            {options.map((option) => {
                const isActive = option === selected;
                return (
                <button
                    key={option}
                    className={isActive ? "active" : ""}
                    onClick={() => onChange(option)}
                >
                    {option}
                </button>
                );
            })}
        </div>
    );
};

export default FiltersList;