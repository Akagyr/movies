import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function convertDate(date: number) {
  return format(new Date(date), "d MMMM yyyy 'года'", { locale: ru });
}
