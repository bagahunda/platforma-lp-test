export const date = val => {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];
  const date = new Date(val);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const messageDate = val => {
  const date = new Date(val);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const minutes = date.getMinutes();
  const formattedDay = day > 10 ? day : `0${day}`;
  const formattedMonth = month > 10 ? month : `0${month}`;
  const formattedHrs = hrs > 10 ? hrs : `0${hrs}`;
  const formattedMinutes = minutes > 10 ? minutes : `0${minutes}`;

  return `${formattedDay}.${formattedMonth}.${year} ${formattedHrs}:${formattedMinutes}`;
};

export const truncate = (text, length = 30, sep = "...") => {
  return text.length > length ? text.substring(0, length) + sep : text;
};
