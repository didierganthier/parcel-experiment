import { formatDistanceToNow } from 'date-fns'

const date = '1998-06-05 10:00:00';
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
