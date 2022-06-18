const OrderStatus = { 'RECEIVED' : 'received',
'QUERY_RAISED':'query_raised',
'CONFIRMED':'confirmed',
'GETTING_READY':'getting_ready',
'DISPATCHED':'dispatched',
'DELIVERED':'delivered',
'PAYMENT_PENDING':'payment_pending',
'CANCELLED_BY_USER':'cancelled_by_user',
'CANCELLED_BY_ADMIN':'cancelled_by_admin'
}


module.exports = OrderStatus;