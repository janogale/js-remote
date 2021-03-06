let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const YEAR = 2021;

//  export and rename

export { months as MonthsOfYear };

let currentDate = new Date().toLocaleDateString();

// default export

export default currentDate;
