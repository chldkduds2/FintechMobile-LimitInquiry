import { useState } from 'react';

export const useLoanFilterBar = (initialFilters: string[]) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeFilters, setActiveFilters] = useState<number[]>([]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleFilterClick = (index: number) => {
        setActiveFilters((prevState) =>
            prevState.includes(index) ? prevState.filter((i) => i !== index) : [...prevState, index]
        );
    };

    return {
        isExpanded,
        activeFilters,
        toggleExpand,
        handleFilterClick,
    };
};
