export const calculateDeliveryDate = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 7); // Adding 7 days for the minimum delivery date
    const maxDeliveryDate = new Date(currentDate);
    maxDeliveryDate.setDate(currentDate.getDate() + 10); // Adding 10 days for the maximum delivery date

    return `${deliveryDate.getDate()}th ${deliveryDate.toLocaleString('default', {
      month: 'short',
    })} to ${maxDeliveryDate.getDate()}th ${maxDeliveryDate.toLocaleString('default', {
      month: 'short',
    })}`;
  };
