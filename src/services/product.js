import StoreCode from '../singletons/StoreCode';
import {callApi} from '../utils/apis';

const getProductDetail = id => {
  return callApi(`customer/${StoreCode.getStoreCode()}/products/${id}`, 'get');
};

const favoriteProduct = (id, is_favorite) => {
  return callApi(
    `customer/${StoreCode.getStoreCode()}/products/${id}/favorites`,
    'post',
    {is_favorite: is_favorite},
  );
};

const getReviewProduct = (
  id,
  filterBy,
  filterByValue,
  hasImage,
) => {
  return callApi(
    `customer/${StoreCode.getStoreCode()}/products/${id}/reviews?filter_by=${filterBy}&filter_by_value=${filterByValue}&has_image=${hasImage}`,
    'get',
  );
};

const getSimilarProduct = (
    id,
  ) => {
    return callApi(
      `customer/${StoreCode.getStoreCode()}/products/${id}/similar_products`,
      'get',
    );
  };

export const product = {
  getProductDetail,
  favoriteProduct,
  getReviewProduct,
  getSimilarProduct,
};
