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
import type { StationType } from './StationType';
import {
    StationTypeFromJSON,
    StationTypeFromJSONTyped,
    StationTypeToJSON,
    StationTypeToJSONTyped,
} from './StationType';

/**
 * 
 * @export
 * @interface StationCreate
 */
export interface StationCreate {
    /**
     * 
     * @type {string}
     * @memberof StationCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StationCreate
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StationCreate
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StationCreate
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StationCreate
     */
    active?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof StationCreate
     */
    startDate: Date;
    /**
     * 
     * @type {StationType}
     * @memberof StationCreate
     */
    stationType?: StationType;
}



/**
 * Check if a given object implements the StationCreate interface.
 */
export function instanceOfStationCreate(value: object): value is StationCreate {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    return true;
}

export function StationCreateFromJSON(json: any): StationCreate {
    return StationCreateFromJSONTyped(json, false);
}

export function StationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StationCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'contactName': json['contact_name'] == null ? undefined : json['contact_name'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'active': json['active'] == null ? undefined : json['active'],
        'startDate': (new Date(json['start_date'])),
        'stationType': json['station_type'] == null ? undefined : StationTypeFromJSON(json['station_type']),
    };
}

export function StationCreateToJSON(json: any): StationCreate {
    return StationCreateToJSONTyped(json, false);
}

export function StationCreateToJSONTyped(value?: StationCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'contact_name': value['contactName'],
        'contact_email': value['contactEmail'],
        'active': value['active'],
        'start_date': ((value['startDate']).toISOString()),
        'station_type': StationTypeToJSON(value['stationType']),
    };
}

