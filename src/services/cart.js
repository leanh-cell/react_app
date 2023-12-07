import StoreCode from '../singletons/StoreCode';
import {callApi} from '../utils/apis';

const getPaymentMethod = () => {
  return callApi(`customer/${StoreCode.getStoreCode()}/payment_methods`, 'get');
};

const createOrder = (data) => {
  return callApi(`customer/${StoreCode.getStoreCode()}/carts/orders`, 'post', data);
};

const updateItemCart = (
  cartItemId,
  productId,
  quantity,
  listDistributes,
  codeVoucher,
  note,
) => {
  return callApi(`customer/${StoreCode.getStoreCode()}/carts/items`, 'put', {
    line_item_id: cartItemId,
    product_id: productId,
    quantity: quantity,
    distributes: listDistributes,
    code_voucher: codeVoucher,
    note: note,
  });
};

const getComboCustomer = () => {
  return callApi(`customer/${StoreCode.getStoreCode()}/combos`, 'get');
};

const getItemCart = (
  codeVoucher,
  isUsePoints,
  isUseBalanceCollaborator,
  totalShippingFee,
) => {
  return callApi(`customer/${StoreCode.getStoreCode()}/carts`, 'post', {
    code_voucher: codeVoucher,
    is_use_points: isUsePoints,
    is_use_balance_collaborator: isUseBalanceCollaborator,
    total_shipping_fee: totalShippingFee,
  });
};

const addVoucherCart = ({
  codeVoucher,
  isUsePoints,
  isUseBalanceCollaborator,
  totalShippingFee,
  isUseBalanceAgency,
  isOrderForCustomer,
}) => {
  return callApi(`customer/${StoreCode.getStoreCode()}/carts`, 'post', {
    code_voucher: codeVoucher,
    is_use_points: isUsePoints,
    is_use_balance_collaborator: isUseBalanceCollaborator,
    is_use_balance_agency: isUseBalanceAgency,
    total_shipping_fee: totalShippingFee,
    is_order_for_customer: isOrderForCustomer,
  });
};

const addItemCart = (idProduct, quantity, listDistributes) => {
  return callApi(`customer/${StoreCode.getStoreCode()}/carts/items`, 'post', {
    product_id: idProduct,
    quantity: quantity,
    distributes: listDistributes,
  });
};

const getVoucherCustomer = () => {
  return callApi(`customer/${StoreCode.getStoreCode()}/vouchers`, 'get');
};


export const cart = {
  updateItemCart,
  getComboCustomer,
  getItemCart,
  addVoucherCart,
  addItemCart,
  getPaymentMethod,
  createOrder,
  getVoucherCustomer,
};
