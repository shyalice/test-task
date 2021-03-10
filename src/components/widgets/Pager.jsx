import React from 'react';

const Pager = ({
                page,
                pagesTotal,
                loadPage
               }) => (
    <nav>
        {1 < pagesTotal && (
            <div className="pager">
                <button className="btn previous" disabled={1 === page} onClick={() => 1 !== page && loadPage(page - 1)}>
                    <span >Previous</span>
                </button>
                <button className="btn next" disabled={page === pagesTotal} onClick={() => page !== pagesTotal && loadPage(page + 1)}>
                    <span >Next</span>
                </button>
            </div>
        )}
    </nav>
);

export default Pager;