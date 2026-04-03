const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem('ReadList');

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

};

const addToStoredDB = (id) => {
    // console.log(typeof id);
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('Already added to Read List');
    }
    else {
        storedBookData.push(id);
        // console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("ReadList", data);
    }

};

export { addToStoredDB };