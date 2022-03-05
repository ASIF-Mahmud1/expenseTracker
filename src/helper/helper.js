
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

const getDayDate=(date)=>{
  let day= new Date(date)
  return  day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
}

const getWeekDate = (date) => {

    let currentdate = new Date(date)
    let oneJan = new Date(currentdate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
   
    return result

}


const getExpenseByDay=(items)=>{
    const finalResult= []
    let uniqueDate={}
    items.forEach((ele)=>{
        var dayDate =getDayDate(ele.date)
        uniqueDate[dayDate]=[]
    })

    items.forEach((ele)=>{
        let correspindingDate= getDayDate (ele.date)
        uniqueDate[correspindingDate].push(ele)
    })

    for (let x in uniqueDate) {
        let sum = 0
        uniqueDate[x].forEach((item) => {
            sum = sum + Number(item.price)
        })
        const expense = {
            title: "Date: "+ x,
            totalPrice: sum,
            other: uniqueDate[x]
        }
        finalResult.push(expense)

    }

    return finalResult

}

const getExpenseByWeek=(items)=>{
    const finalResult= []
    let uniqueDate={}
    items.forEach((ele)=>{

        var dayDate =getWeekDate(ele.date)
        uniqueDate[dayDate]=[]
    })

    items.forEach((ele)=>{
        let correspindingDate= getWeekDate (ele.date)
        uniqueDate[correspindingDate].push(ele)
    })

    for (let x in uniqueDate) {
        let sum = 0
        uniqueDate[x].forEach((item) => {
            sum = sum + Number(item.price)
        })
        const expense = {
            title: "Week: "+x,
            totalPrice: sum,
            other: uniqueDate[x]
        }
        finalResult.push(expense)

    }

    return finalResult

}

const getTotalPrice=(item)=>{
    let result=0
    item.forEach(ele=> {
    
        result=result+ Number(ele.totalPrice)
    })
    return result ?result :0

}



export{
    getListOfCategory,
    getExpenseByWeek,
    getExpenseByDay,
    getTotalPrice
}
