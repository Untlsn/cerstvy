const difference = <T>(array: T[], values: any[]) => array.filter(el => !values.includes(el));

export default difference;