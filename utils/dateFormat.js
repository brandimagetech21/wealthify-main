import moment from "moment";
const formatDate = (date) => {
  return moment(date).format("Do MMM YY");

  // return IsoDateTo;
  // const IsoDateTo = moment("2105-03-04").format("YYYY-MM-DD[T]HH:mm:ss");
};

export default formatDate;
