import React from 'react';

const Pager = ({
                page,
                pagesTotal,
                loadPage
               }) => (
    <nav>
        {1 < pagesTotal && (
            <ul className="pager">
                {1 !== page && (
                    <li className="previous">
                        <span className="cursor-pointer" onClick={() => 1 !== page && loadPage(page - 1)}>previous</span>
                    </li>
                )}
                {page !== pagesTotal && (
                    <li className="next">
                        <span className="cursor-pointer" onClick={() => page !== pagesTotal && loadPage(page + 1)}>Next</span>
                    </li>
                )}
            </ul>
        )}
    </nav>
);

export default Pager;