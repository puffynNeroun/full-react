import {useMemo} from 'react';

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    console.log('getPagesArray was called');
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}

export const usePagesArray = (totalPages) => {
    return useMemo(() => getPagesArray(totalPages), [totalPages]);
}
