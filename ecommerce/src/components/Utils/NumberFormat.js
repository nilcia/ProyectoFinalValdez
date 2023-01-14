const NumberFormat = ({number}) => {
    let numberFormatter = new Intl.NumberFormat('de-DE', {  maximumSignificantDigits: 2 }).format(number);
    return 'Gs. ' + numberFormatter;
}
export default NumberFormat;