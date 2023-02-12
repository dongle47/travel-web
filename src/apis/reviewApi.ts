import { axiosClient } from './axiosClient';
import { CreateReviewParams, ReviewPaginate } from './../models/review';
import { PaginateParams, Response } from '../models/common';
const reviewApi = {
    postReview(params: CreateReviewParams) : Promise<any>{
        const url = '/place-service/review/create'
        return axiosClient.post(url, params)
    },

    getReviews(placeId:string, paginate: PaginateParams): Promise<Response<ReviewPaginate>>{
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