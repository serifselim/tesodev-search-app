const nameLocaleCompare = (a, b, isAscend) => {
    const nameA = a[0].toLowerCase();
    const nameB = b[0].toLowerCase();
    return isAscend ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
};

const dateLocaleCompare = (a, b, isAscend) => {
    const dateA = a[3].split('/').reverse().join('');
    const dateB = b[3].split('/').reverse().join('');
    return isAscend ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
};

export {
    nameLocaleCompare,
    dateLocaleCompare
};