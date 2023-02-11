import { axiosClient } from './axiosClient';
import { CreateReviewParams } from './../models/review';
import { PaginateParams } from '../models/common';
const reviewApi = {
    postReview(params: CreateReviewParams) : Promise<any>{
        const url = '/place-service/review/create'
        return axiosClient.post(url, params)
    },

    getReviews(placeId:string, paginate: PaginateParams){
        const url = `/place-service/review/list/${placeId}`
        return axiosClient.get(url, {
            params: {
                page: paginate.page,
                limit: paginate.limit
            }
        })
    }
}

export default reviewApi