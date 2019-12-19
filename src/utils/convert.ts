const convert = (value: any) => (defaultValue: number | string = 0) =>
  typeof value === "number" ? `${value}px` : value || defaultValue;

export default convert;
