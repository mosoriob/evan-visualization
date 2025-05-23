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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CampaignsIn
 */
export interface CampaignsIn {
    /**
     * 
     * @type {string}
     * @memberof CampaignsIn
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignsIn
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignsIn
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignsIn
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CampaignsIn
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CampaignsIn
     */
    endDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CampaignsIn
     */
    allocation: string;
}

/**
 * Check if a given object implements the CampaignsIn interface.
 */
export function instanceOfCampaignsIn(value: object): value is CampaignsIn {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('allocation' in value) || value['allocation'] === undefined) return false;
    return true;
}

export function CampaignsInFromJSON(json: any): CampaignsIn {
    return CampaignsInFromJSONTyped(json, false);
}

export function CampaignsInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignsIn {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'contactName': json['contact_name'] == null ? undefined : json['contact_name'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'description': json['description'] == null ? undefined : json['description'],
        'startDate': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'endDate': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'allocation': json['allocation'],
    };
}

export function CampaignsInToJSON(json: any): CampaignsIn {
    return CampaignsInToJSONTyped(json, false);
}

export function CampaignsInToJSONTyped(value?: CampaignsIn | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'contact_name': value['contactName'],
        'contact_email': value['contactEmail'],
        'description': value['description'],
        'start_date': value['startDate'] == null ? undefined : ((value['startDate'] as any).toISOString()),
        'end_date': value['endDate'] == null ? undefined : ((value['endDate'] as any).toISOString()),
        'allocation': value['allocation'],
    };
}

