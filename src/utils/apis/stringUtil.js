import {format, parse} from 'date-fns';

function convertToMoney(number, roundUp = false) {
  const config = {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 9,
  };
  const numberFormat = roundUp ? number.toFixed(0) : number;
  return `${new Intl.NumberFormat('vi-VN', config)
    .format(numberFormat)
    .replace(/₫/g, '')
    .trim()}`;
}

function getDDMMYY(dateTimeString) {
  const parsedDate = parse(dateTimeString, 'yyyy-MM-dd HH:mm:ss', new Date());
  if (parsedDate instanceof Date && !isNaN(parsedDate)) {
    const dateTimeFormat = 'dd-MM-yyyy';
    const formattedDate = format(parsedDate, dateTimeFormat);

    return formattedDate;
  } else {
    return 'Invalid Date';
  }
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function getHHMMSS(dateTimeString) {
  const parsedDate = parse(dateTimeString, 'yyyy-MM-dd HH:mm:ss', new Date());
  if (parsedDate instanceof Date && !isNaN(parsedDate)) {
    const dateTimeFormat = 'HH:mm:ss';
    const formattedDate = format(parsedDate, dateTimeFormat);

    return formattedDate;
  } else {
    return 'Invalid Date';
  }
}

export {convertToMoney, getDDMMYY, getHHMMSS,validateEmail};
