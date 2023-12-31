import React from 'react';
import {getPagesArray, usePagesArray} from "../../../utils/pages.js";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page === p ? "page page__current" : "page"}
                    onClick={() => changePage(p)}>
                 {p}
               </span>
            )}
        </div>
    );
};

export default Pagination;