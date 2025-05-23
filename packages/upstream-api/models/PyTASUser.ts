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
 * @interface PyTASUser
 */
export interface PyTASUser {
    /**
     * 
     * @type {number}
     * @memberof PyTASUser
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PyTASUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof PyTASUser
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PyTASUser
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PyTASUser
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PyTASUser
     */
    email?: string | null;
}

/**
 * Check if a given object implements the PyTASUser interface.
 */
export function instanceOfPyTASUser(value: object): value is PyTASUser {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function PyTASUserFromJSON(json: any): PyTASUser {
    return PyTASUserFromJSONTyped(json, false);
}

export function PyTASUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PyTASUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'role': json['role'] == null ? undefined : json['role'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function PyTASUserToJSON(json: any): PyTASUser {
    return PyTASUserToJSONTyped(json, false);
}

export function PyTASUserToJSONTyped(value?: PyTASUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'username': value['username'],
        'role': value['role'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'email': value['email'],
    };
}

