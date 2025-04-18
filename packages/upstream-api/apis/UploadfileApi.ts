/* tslint:disable */
/* eslint-disable */
/**
 * Upstream Sensor Storage
 * Sensor Storage for Upstream data
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface PostSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPostRequest {
    campaignId: number;
    stationId: number;
    uploadedFile: Blob;
}

/**
 * 
 */
export class UploadfileApi extends runtime.BaseAPI {

    /**
     * Post Sensor And Measurement
     */
    async postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPostRaw(requestParameters: PostSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['campaignId'] == null) {
            throw new runtime.RequiredError(
                'campaignId',
                'Required parameter "campaignId" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        if (requestParameters['stationId'] == null) {
            throw new runtime.RequiredError(
                'stationId',
                'Required parameter "stationId" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        if (requestParameters['uploadedFile'] == null) {
            throw new runtime.RequiredError(
                'uploadedFile',
                'Required parameter "uploadedFile" was null or undefined when calling postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['uploadedFile'] != null) {
            formParams.append('uploaded_file', requestParameters['uploadedFile'] as any);
        }

        const response = await this.request({
            path: `/api/v1/uploadfile/campaign/{campaign_id}/station/{station_id}/sensor/`.replace(`{${"campaign_id"}}`, encodeURIComponent(String(requestParameters['campaignId']))).replace(`{${"station_id"}}`, encodeURIComponent(String(requestParameters['stationId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Post Sensor And Measurement
     */
    async postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPost(requestParameters: PostSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.postSensorAndMeasurementApiV1UploadfileCampaignCampaignIdStationStationIdSensorPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
