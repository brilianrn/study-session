export const formatDate = (str: string) => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const date = new Date(str);
  const format = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return format;
};
