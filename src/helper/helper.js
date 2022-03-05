
const getListOfCategory = (items) => {
    const finalResult = []
    const result = items.reduce(function (r, a) {
        r[a.category] = r[a.category] || [];
        r[a.category].push(a);
        return r;
    }, Object.create(null));

    for (let x in result) {
        let sum = 0
        result[x].forEach((item) => {
            sum = sum + Number(item.price)
        })
        const expense = {
            title: x,
            totalPrice: sum
        }
        finalResult.push(expense)

    }


    return finalResult
}

export{
    getListOfCategory
}
