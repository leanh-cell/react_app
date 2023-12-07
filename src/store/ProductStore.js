// counter.store.js
import React from 'react';
import {makeObservable, action, observable} from 'mobx';
import {RepoManager} from '../services';

class ProductStore {
  loading = true;
  product = null;
  averagedStars = null;
  totalReview = null;
  listReview = null;
  listProductSimilar = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      product: observable,
      totalReview: observable,
      averagedStars: observable,
      listReview: observable,
      listProductSimilar: observable,
      getProductDetail: action.bound,
      favoriteProduct: action.bound,
      getReviewProduct: action.bound,
      getSimilarProduct: action.bound,
    });
  }

  getProductDetail = async id => {
    try {
      this.loading = true;
      const response = await RepoManager.product.getProductDetail(id);
      console.log(
        'response ==================================',
        response?.data?.data,
      );

      this.product = response?.data?.data;
      console.log(this.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false;
    }
  };

  favoriteProduct = async (id, is_favorite) => {
    try {
      const response = await RepoManager.product.favoriteProduct(
        id,
        is_favorite,
      );

      this.product = response?.data?.data;
      console.log(this.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
    }
  };

  getReviewProduct = async id => {
    try {
      const response = await RepoManager.product.getReviewProduct(
        id,
        '',
        '',
        '',
      );

      this.averagedStars = response?.data?.data?.averaged_stars;
      this.totalReview = response?.data?.data?.total_reviews;

      this.listReview = response?.data?.data?.data;

      console.log(this.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
    }
  };

  getSimilarProduct = async id => {
    try {
      const response = await RepoManager.product.getSimilarProduct(id);

      this.listProductSimilar = response?.data?.data;

      console.log(this.product);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
    }
  };
}

// Instantiate the counter store.
const productStore = new ProductStore();
// Create a React Context with the counter store instance.
export const ProductStoreContext = React.createContext(productStore);
export const useProductStore = () => React.useContext(ProductStoreContext);
