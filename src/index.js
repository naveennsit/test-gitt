import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import 'react-table/react-table.css'

import styled from 'styled-components';

import '@atlaskit/css-reset';
import AddAgency from "./add-agency";
import AddUser from "./add-user";
import Home from "./home";
import Router from "./router";
import LoadingProvider from "./providers/loading.providers";
import Spinner from "./spinner";

export const ConfigContext = React.createContext({});
const configValue = {
    showLoader: false
}
ReactDOM.render(
    <BrowserRouter>
        <LoadingProvider>
            <Spinner/>
            <Router/>
        </LoadingProvider>
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// db.angency.aggregate([
//     {
//         $project: {
//             apps: {
//                 $filter: {
//                     input: "$apps",
//                     as: "app",
//                     cond: {"$$app.name": {$regex: 'DSB', $options: 'i'}, "$$app.pincodes": {$in: ['135001', '134002']}}
//                 }
//             }
//         }
//     }
// ])
//
//
// db.angency.aggregate([
//     {
//         $project: {
//             apps: {
//                 $filter: {
//                     input: "$apps",
//                     as: "app",
//                     cond: {
//                         $eq: ["$$app.name", 'DSB']}
//                 }
//             }
//         }
//     }
// ])
//
//
//
// db.address.aggregate([
//     {
//         $project: {
//             applications: {
//                 $filter: {
//                     input: "$applications",
//                     as: "applications",
//                     cond: {
//                         $and: {
//                             $eq: ["$$applications.name", 'DSB'],
//                             $in:["$$applications.name",['122018']]
//                         }
//                     }
//                 }
//             }
//         }
//     }
// ])

// db.angency.aggregate([
//     {$match: {"apps.name": {$regex: 'DSB', $options: 'i'}}},
//     {$unwind: "$apps"},
//     {$match: {"apps.name": {$regex: 'DSB', $options: 'i'}, "apps.pincodes": {$in: ['122017']}}},
//     {
//         $group: {
//             _id: "$_id",
//             name: {$first: "$name"},
//             applications: {$push: {name: "$apps.name", code: "$apps.pincodes"}}
//         }
//     }
//
// ])
//
//
// db.address.aggregate([
//     { "$project": {
//             "applications": {
//                 "$filter": {
//                     "input": "$applications",
//                     "as": "applications",
//                     "cond": {
//                         "$and": [
//                             { "$eq": ["$$applications.name", "DSB"] },
//                             { "$in": ["$$applications.code", ["122018"]] }
//                         ]
//                     }
//                 }
//             }
//         }}
// ])


// db.address.aggregate([
//     {
//         "$project": {
//             "applications": {
//                 "$filter": {
//                     "input": "$applications",
//                     "as": "applications",
//                     "cond": {
//                         "$or": [
//                             {
//                                 "cond":{
//                                     "$and": [
//                                         {"$in": ['122018', "$$applications.code"]},
//                                         {"$eq": ["$$applications.name", "DSB"]}
//                                     ]
//                                 }
//                             },
//                             {
//                                 "cond":{
//                                     "$and": [
//                                         {"$in": ['122018', "$$applications.code"]},
//                                         {"$eq": ["$$applications.name", "DSB"]}
//                                     ]
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             name: true
//         }
//     },
//     {$unwind: {path: "$applications", preserveNullAndEmptyArrays: false}}
// ])


// db.address.aggregate([{
//     "$project": {
//         "applications": {
//             "$filter": {
//                 "input": "$applications",
//                 "as": "applications",
//                 "cond": {"$or": [{"$and": [{"$in": ['122018', "$$applications.code"]}, {"$eq": ["$$applications.name", "DSB"]},]}, {"$and": [{"$in": ['122011', "$$applications.code"]}, {"$eq": ["$$applications.name", "HELLO"]},]}]}
//             }
//         }, name: true
//     }
// }, {$unwind: {path: "$applications", preserveNullAndEmptyArrays: false}}])
//
//
// //final
// db.address.aggregate([ { "$project": { "applications": { "$filter": { "input": "$applications", "as": "applications", "cond": {  "$or": [ { "$and": [ {"$in": ['122018', "$$applications.code"]}, {"$eq": ["$$applications.name", "DSB"]}, ] }, { "$and": [ {"$in": ['122011', "$$applications.code"]}, {"$eq": ["$$applications.name", "HELLO"]}, ] } ]   } } }, name: true } }, {$unwind: {path: "$applications", preserveNullAndEmptyArrays: false}},{$group: { _id: "$_id",name: { $first: "$name" },applications: { $push:  { name: "$applications.name",code: "$applications.code" } }}}]).pretty()
//
// db.address.aggregate([{
//     "$project": {
//         "applications": {
//             "$filter": {
//                 "input": "$applications",
//                 "as": "applications",
//                 "cond": {"$or": [{"$and": [{"$in": ['122018', "$$applications.code"]}, {"$eq": ["$$applications.name", "DSB"]},]}, {"$and": [{"$in": ['122018', "$$applications.code"]}, {"$eq": ["$$applications.name", "DSB"]},]}]}
//             }
//         }, name: true
//     }
// }, {$unwind: {path: "$applications", preserveNullAndEmptyArrays: false}}, {
//     $group: {
//         _id: "$_id",
//         applications: {$push: {item: "$applications.name"}}
//     }
// }])

// db.address.aggregate([
//     {
//         "$project": {
//             "applications": {
//                 "$filter": {
//                     "input": "$applications",
//                     "as": "applications",
//                     "cond":  {
//                         "$and": [
//                             { "$in": ['122018',"$$applications.code"] },
//                             { "$eq": ["$$applications.name", "DSB"] },
//                         ]
//                     }
//                 }
//             },
//             name:true
//         }
//     }
// ])

//
// db.address.aggregate([{
//     "$project": {
//         "applications": {
//             "$filter": {
//                 "input": "$applications",
//                 "as": "applications",
//                 "cond": {"$or": [{"$and": [{"$in": ['122018', "$$applications.code"]}, {"$eq": ["$$applications.name", "DSB"]},]}, {"$and": [{"$in": ['122011', "$$applications.code"]}, {"$eq": ["$$applications.name", "HELLO"]},]}]}
//             }
//         }, name: true
//     }
// }, {$unwind: {path: "$applications", preserveNullAndEmptyArrays: false}}, {
//     $group: {
//         _id: "$_id",
//         name: {$first: "$name"},
//         applications: {$push: {name: "$applications.name", code: "$applications.code"}}
//     }
// }]).pretty()
