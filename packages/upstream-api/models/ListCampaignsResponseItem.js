"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfListCampaignsResponseItem = instanceOfListCampaignsResponseItem;
exports.ListCampaignsResponseItemFromJSON = ListCampaignsResponseItemFromJSON;
exports.ListCampaignsResponseItemFromJSONTyped = ListCampaignsResponseItemFromJSONTyped;
exports.ListCampaignsResponseItemToJSON = ListCampaignsResponseItemToJSON;
exports.ListCampaignsResponseItemToJSONTyped = ListCampaignsResponseItemToJSONTyped;
var SummaryListCampaigns_1 = require("./SummaryListCampaigns");
var Location_1 = require("./Location");
/**
 * Check if a given object implements the ListCampaignsResponseItem interface.
 */
function instanceOfListCampaignsResponseItem(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('summary' in value) || value['summary'] === undefined)
        return false;
    return true;
}
function ListCampaignsResponseItemFromJSON(json) {
    return ListCampaignsResponseItemFromJSONTyped(json, false);
}
function ListCampaignsResponseItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'location': json['location'] == null ? undefined : (0, Location_1.LocationFromJSON)(json['location']),
        'description': json['description'] == null ? undefined : json['description'],
        'contactName': json['contact_name'] == null ? undefined : json['contact_name'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'startDate': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'endDate': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'allocation': json['allocation'] == null ? undefined : json['allocation'],
        'summary': (0, SummaryListCampaigns_1.SummaryListCampaignsFromJSON)(json['summary']),
    };
}
function ListCampaignsResponseItemToJSON(json) {
    return ListCampaignsResponseItemToJSONTyped(json, false);
}
function ListCampaignsResponseItemToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'location': (0, Location_1.LocationToJSON)(value['location']),
        'description': value['description'],
        'contact_name': value['contactName'],
        'contact_email': value['contactEmail'],
        'start_date': value['startDate'] == null ? undefined : (value['startDate'].toISOString()),
        'end_date': value['endDate'] == null ? undefined : (value['endDate'].toISOString()),
        'allocation': value['allocation'],
        'summary': (0, SummaryListCampaigns_1.SummaryListCampaignsToJSON)(value['summary']),
    };
}
