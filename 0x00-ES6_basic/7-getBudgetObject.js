/*object keys*/

export default function getBudgetObject(income,gdp,capita){
    const year = 2017;
    const budget = {
        income: income,
        gdp: gdp,
        capita: capita,
    };
    return budget;
}