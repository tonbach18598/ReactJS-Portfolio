import { CardProps } from '@material-ui/core';
import { Payment } from '@models/payment';

type Props = {
  item: Payment;
  onCopyClick: (item: Payment) => void;
  onCopyAllClick: (item: Payment) => void;
  onOpenDialog: () => void;
} & CardProps;

export default Props;
