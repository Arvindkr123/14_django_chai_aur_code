const products = [
    {
        "_id": "682c2b0bf0d39812f563ce32",
        "listingPartner": "walmart",
        "platformAccount": "wm-a2",
        "fulfilmentPartner": "repro_warehouse_1234",
        "productType": "wm-jewelry_other",
        "purchaseOrderId": "109011426348092",
        "customerOrderId": "200013075052100",
        "orderDate": 1745438749915,
        "shippingInfo": {
            "phone": "8434427087",
            "estimatedDeliveryDate": 1746039600000,
            "estimatedShipDate": 1745463600000,
            "methodCode": "Standard",
            "postalAddress": {
                "name": "Frederick Bearsch",
                "address1": "843 Centerwood Dr",
                "address2": null,
                "city": "Charleston",
                "state": "SC",
                "postalCode": "29412",
                "country": "USA",
                "addressType": "RESIDENTIAL"
            },
            "carrierMethodName": null
        },
        "lineNumber": "1",
        "productName": "Tootles the Turtle Tells the Truth: An Interactive Tale about Secrets (Paperback)",
        "sku": "9781452579009",
        "chargeBreakup": [
            {
                "chargeType": "PRODUCT",
                "chargeName": "ItemPrice",
                "chargeAmount": {
                    "currency": "USD",
                    "amount": 15.99
                },
                "tax": {
                    "taxName": "Tax1",
                    "taxAmount": {
                        "currency": "USD",
                        "amount": 1.44
                    }
                }
            }
        ],
        "charge": {
            "amount": 17.43,
            "currency": "USD"
        },
        "qty": 1,
        "lastStatus": "Delivered",
        "marketplaceStatus": "Delivered",
        "lastStatusUpdatedAt": 1746020767000,
        "marketplaceStatusUpdatedAt": 1746020767000,
        "statusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "SentToPartner",
                "dt": 1745443906929
            },
            {
                "status": "ShippedByPartner",
                "dt": 1745563107104
            },
            {
                "status": "Shipped",
                "dt": 1745563108245
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "marketPlaceStatusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "Shipped",
                "dt": 1745563108245,
                "_id": "680b2de4209f553c234e0258"
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "refund": null,
        "fulfillment": {
            "fulfillmentOption": "DELIVERY",
            "shipMethod": "STANDARD",
            "storeId": null,
            "pickUpDateTime": 1746039600000,
            "pickUpBy": null,
            "shippingProgramType": "THREE_TO_FIVE_DAY"
        },
        "subSellerId": null,
        "cancellationReason": null,
        "trackingInfo": {
            "carrierName": {
                "otherCarrier": null,
                "carrier": null
            },
            "methodCode": "Standard",
            "carrierMethodCode": null,
            "trackingURL": null
        },
        "returnCenterAddress": null,
        "orderCreationAtWarehouse": {
            "orderDetails": {
                "id": 127405472,
                "state": {
                    "internalStatus": "CREATED",
                    "fulfillmentInProgress": true,
                    "fulfillmentDelayed": false,
                    "fulfillmentStatus": "ROUTING_IN_PROGRESS"
                },
                "shippedAt": null,
                "deliveredAt": null,
                "promisedShipByTime": 1745467200000,
                "promisedDeliveryByTime": 1746480707000,
                "createdAt": 1745443907000,
                "externalOrderId": "109011426348092",
                "address": {
                    "address1": "843 Centerwood Dr",
                    "address2": "",
                    "city": "Charleston",
                    "countryCode": "US",
                    "name": "",
                    "company": "",
                    "provinceCode": "SC",
                    "zip": "29412",
                    "phone": ""
                },
                "lineItems": [
                    {
                        "lineItemId": "109011426348092",
                        "quantity": 1,
                        "logisticsSku": "DNUKNA8JQTD"
                    }
                ],
                "shipments": [],
                "cost": null,
                "source": "WALMART"
            },
            "status": "success"
        },
        "partnerBatchId": "0770eaf9-0063-4425-a63d-bc2b8c4ad5f9",
        "warehouseStatusLog": [
            {
                "status": "WAREHOUSE",
                "dt": 1745479007793
            }
        ],
        "parcelInfo": {
            "carrierCode": "DHL",
            "deliveredAt": "",
            "estimatedDeliveryTime": 1746122400000,
            "estimatedShipTime": 1745517600000,
            "fulfillmentStatus": "SHIPPED",
            "marketPlaceCarrierCode": "DHL",
            "promisedDeliveryByTime": 1746480707000,
            "promisedShipByTime": 1745467200000,
            "shippedAt": 1745511196000,
            "status": "SHIPPED",
            "trackingCode": "9261290316871715031291",
            "trackingUrl": "https://tracker.flexport.com/9261290316871715031291"
        },
        "parcelTrackingInfo": [
            {
                "promisedDeliveryByTime": 1746480707000,
                "promisedShipByTime": 1745467200000,
                "shippedAt": 1745511196000,
                "source": "WALMART",
                "fulfillmentDelayed": false,
                "fulfillmentInProgress": true,
                "fulfillmentStatus": "SHIPPED",
                "internalStatus": "SHIPPED",
                "labelUrl": "",
                "estimatedDeliveryTime": 1746122400000,
                "status": "SHIPPED",
                "ts": 1745561807467
            }
        ],
        "nqTrackingURL": "https://tracker.flexport.com/9261290316871715031291",
        "settlement": {
            "channelFees": 2.1,
            "distrologicFees": 0.74,
            "totalShipping": 16.2,
            "platformFees": 2
        }
    },
    {
        "_id": "6824488896fe6f72e73bbfd1",
        "listingPartner": "walmart",
        "platformAccount": "wm-a2",
        "fulfilmentPartner": "repro_warehouse_1234",
        "productType": "nq-book",
        "purchaseOrderId": "109011426348092",
        "customerOrderId": "200013075052100",
        "orderDate": 1745438749915,
        "shippingInfo": {
            "phone": "8434427087",
            "estimatedDeliveryDate": 1746039600000,
            "estimatedShipDate": 1745463600000,
            "methodCode": "Standard",
            "postalAddress": {
                "name": "Frederick Bearsch",
                "address1": "843 Centerwood Dr",
                "address2": null,
                "city": "Charleston",
                "state": "SC",
                "postalCode": "29412",
                "country": "USA",
                "addressType": "RESIDENTIAL"
            },
            "carrierMethodName": null
        },
        "lineNumber": "1",
        "productName": "Tootles the Turtle Tells the Truth: An Interactive Tale about Secrets (Paperback)",
        "sku": "9781452579009",
        "chargeBreakup": [
            {
                "chargeType": "PRODUCT",
                "chargeName": "ItemPrice",
                "chargeAmount": {
                    "currency": "USD",
                    "amount": 15.99
                },
                "tax": {
                    "taxName": "Tax1",
                    "taxAmount": {
                        "currency": "USD",
                        "amount": 1.44
                    }
                }
            }
        ],
        "charge": {
            "amount": 17.43,
            "currency": "USD"
        },
        "qty": 1,
        "lastStatus": "Delivered",
        "marketplaceStatus": "Delivered",
        "lastStatusUpdatedAt": 1746020767000,
        "marketplaceStatusUpdatedAt": 1746020767000,
        "statusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "SentToPartner",
                "dt": 1745443906929
            },
            {
                "status": "ShippedByPartner",
                "dt": 1745563107104
            },
            {
                "status": "Shipped",
                "dt": 1745563108245
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "marketPlaceStatusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "Shipped",
                "dt": 1745563108245,
                "_id": "680b2de4209f553c234e0258"
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "refund": null,
        "fulfillment": {
            "fulfillmentOption": "DELIVERY",
            "shipMethod": "STANDARD",
            "storeId": null,
            "pickUpDateTime": 1746039600000,
            "pickUpBy": null,
            "shippingProgramType": "THREE_TO_FIVE_DAY"
        },
        "subSellerId": null,
        "cancellationReason": null,
        "trackingInfo": {
            "carrierName": {
                "otherCarrier": null,
                "carrier": null
            },
            "methodCode": "Standard",
            "carrierMethodCode": null,
            "trackingURL": null
        },
        "returnCenterAddress": null,
        "orderCreationAtWarehouse": {
            "orderDetails": {
                "id": 127405472,
                "state": {
                    "internalStatus": "CREATED",
                    "fulfillmentInProgress": true,
                    "fulfillmentDelayed": false,
                    "fulfillmentStatus": "ROUTING_IN_PROGRESS"
                },
                "shippedAt": null,
                "deliveredAt": null,
                "promisedShipByTime": 1745467200000,
                "promisedDeliveryByTime": 1746480707000,
                "createdAt": 1745443907000,
                "externalOrderId": "109011426348092",
                "address": {
                    "address1": "843 Centerwood Dr",
                    "address2": "",
                    "city": "Charleston",
                    "countryCode": "US",
                    "name": "",
                    "company": "",
                    "provinceCode": "SC",
                    "zip": "29412",
                    "phone": ""
                },
                "lineItems": [
                    {
                        "lineItemId": "109011426348092",
                        "quantity": 1,
                        "logisticsSku": "DNUKNA8JQTD"
                    }
                ],
                "shipments": [],
                "cost": null,
                "source": "WALMART"
            },
            "status": "success"
        },
        "partnerBatchId": "0770eaf9-0063-4425-a63d-bc2b8c4ad5f9",
        "warehouseStatusLog": [
            {
                "status": "WAREHOUSE",
                "dt": 1745479007793
            }
        ],
        "parcelInfo": {
            "carrierCode": "DHL",
            "deliveredAt": "",
            "estimatedDeliveryTime": 1746122400000,
            "estimatedShipTime": 1745517600000,
            "fulfillmentStatus": "SHIPPED",
            "marketPlaceCarrierCode": "DHL",
            "promisedDeliveryByTime": 1746480707000,
            "promisedShipByTime": 1745467200000,
            "shippedAt": 1745511196000,
            "status": "SHIPPED",
            "trackingCode": "9261290316871715031291",
            "trackingUrl": "https://tracker.flexport.com/9261290316871715031291"
        },
        "parcelTrackingInfo": [
            {
                "promisedDeliveryByTime": 1746480707000,
                "promisedShipByTime": 1745467200000,
                "shippedAt": 1745511196000,
                "source": "WALMART",
                "fulfillmentDelayed": false,
                "fulfillmentInProgress": true,
                "fulfillmentStatus": "SHIPPED",
                "internalStatus": "SHIPPED",
                "labelUrl": "",
                "estimatedDeliveryTime": 1746122400000,
                "status": "SHIPPED",
                "ts": 1745561807467
            }
        ],
        "nqTrackingURL": "https://tracker.flexport.com/9261290316871715031291",
        "settlement": {
            "channelFees": 2.61,
            "distrologicFees": 1.74,
            "totalShipping": 16.2,
            "platformFees": 7.76
        }
    },
    {
        "_id": "682c2ab1f0d39812f563ce30",
        "listingPartner": "walmart",
        "platformAccount": "wm-a2",
        "fulfilmentPartner": "repro_warehouse_1234",
        "productType": "wm-art_and_craft_other",
        "purchaseOrderId": "109011426348092",
        "customerOrderId": "200013075052100",
        "orderDate": 1745438749915,
        "shippingInfo": {
            "phone": "8434427087",
            "estimatedDeliveryDate": 1746039600000,
            "estimatedShipDate": 1745463600000,
            "methodCode": "Standard",
            "postalAddress": {
                "name": "Frederick Bearsch",
                "address1": "843 Centerwood Dr",
                "address2": null,
                "city": "Charleston",
                "state": "SC",
                "postalCode": "29412",
                "country": "USA",
                "addressType": "RESIDENTIAL"
            },
            "carrierMethodName": null
        },
        "lineNumber": "1",
        "productName": "Tootles the Turtle Tells the Truth: An Interactive Tale about Secrets (Paperback)",
        "sku": "9781452579009",
        "chargeBreakup": [
            {
                "chargeType": "PRODUCT",
                "chargeName": "ItemPrice",
                "chargeAmount": {
                    "currency": "USD",
                    "amount": 15.99
                },
                "tax": {
                    "taxName": "Tax1",
                    "taxAmount": {
                        "currency": "USD",
                        "amount": 1.44
                    }
                }
            }
        ],
        "charge": {
            "amount": 17.43,
            "currency": "USD"
        },
        "qty": 1,
        "lastStatus": "Delivered",
        "marketplaceStatus": "Delivered",
        "lastStatusUpdatedAt": 1746020767000,
        "marketplaceStatusUpdatedAt": 1746020767000,
        "statusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "SentToPartner",
                "dt": 1745443906929
            },
            {
                "status": "ShippedByPartner",
                "dt": 1745563107104
            },
            {
                "status": "Shipped",
                "dt": 1745563108245
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "marketPlaceStatusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "Shipped",
                "dt": 1745563108245,
                "_id": "680b2de4209f553c234e0258"
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "refund": null,
        "fulfillment": {
            "fulfillmentOption": "DELIVERY",
            "shipMethod": "STANDARD",
            "storeId": null,
            "pickUpDateTime": 1746039600000,
            "pickUpBy": null,
            "shippingProgramType": "THREE_TO_FIVE_DAY"
        },
        "subSellerId": null,
        "cancellationReason": null,
        "trackingInfo": {
            "carrierName": {
                "otherCarrier": null,
                "carrier": null
            },
            "methodCode": "Standard",
            "carrierMethodCode": null,
            "trackingURL": null
        },
        "returnCenterAddress": null,
        "orderCreationAtWarehouse": {
            "orderDetails": {
                "id": 127405472,
                "state": {
                    "internalStatus": "CREATED",
                    "fulfillmentInProgress": true,
                    "fulfillmentDelayed": false,
                    "fulfillmentStatus": "ROUTING_IN_PROGRESS"
                },
                "shippedAt": null,
                "deliveredAt": null,
                "promisedShipByTime": 1745467200000,
                "promisedDeliveryByTime": 1746480707000,
                "createdAt": 1745443907000,
                "externalOrderId": "109011426348092",
                "address": {
                    "address1": "843 Centerwood Dr",
                    "address2": "",
                    "city": "Charleston",
                    "countryCode": "US",
                    "name": "",
                    "company": "",
                    "provinceCode": "SC",
                    "zip": "29412",
                    "phone": ""
                },
                "lineItems": [
                    {
                        "lineItemId": "109011426348092",
                        "quantity": 1,
                        "logisticsSku": "DNUKNA8JQTD"
                    }
                ],
                "shipments": [],
                "cost": null,
                "source": "WALMART"
            },
            "status": "success"
        },
        "partnerBatchId": "0770eaf9-0063-4425-a63d-bc2b8c4ad5f9",
        "warehouseStatusLog": [
            {
                "status": "WAREHOUSE",
                "dt": 1745479007793
            }
        ],
        "parcelInfo": {
            "carrierCode": "DHL",
            "deliveredAt": "",
            "estimatedDeliveryTime": 1746122400000,
            "estimatedShipTime": 1745517600000,
            "fulfillmentStatus": "SHIPPED",
            "marketPlaceCarrierCode": "DHL",
            "promisedDeliveryByTime": 1746480707000,
            "promisedShipByTime": 1745467200000,
            "shippedAt": 1745511196000,
            "status": "SHIPPED",
            "trackingCode": "9261290316871715031291",
            "trackingUrl": "https://tracker.flexport.com/9261290316871715031291"
        },
        "parcelTrackingInfo": [
            {
                "promisedDeliveryByTime": 1746480707000,
                "promisedShipByTime": 1745467200000,
                "shippedAt": 1745511196000,
                "source": "WALMART",
                "fulfillmentDelayed": false,
                "fulfillmentInProgress": true,
                "fulfillmentStatus": "SHIPPED",
                "internalStatus": "SHIPPED",
                "labelUrl": "",
                "estimatedDeliveryTime": 1746122400000,
                "status": "SHIPPED",
                "ts": 1745561807467
            }
        ],
        "nqTrackingURL": "https://tracker.flexport.com/9261290316871715031291",
        "settlement": {
            "channelFees": 2.61,
            "distrologicFees": 1.74,
            "totalShipping": 16.2,
            "platformFees": 7.76
        }
    },
    {
        "_id": "682448a396fe6f72e73bbfd2",
        "listingPartner": "walmart",
        "platformAccount": "wm-a3",
        "fulfilmentPartner": "lcix_edition_1234",
        "productType": "nq-book",
        "purchaseOrderId": "109012362304564",
        "customerOrderId": "200013171043048",
        "orderDate": 1746228579853,
        "shippingInfo": {
            "phone": "8434427087",
            "estimatedDeliveryDate": 1746730800000,
            "estimatedShipDate": 1746500400000,
            "methodCode": "Standard",
            "postalAddress": {
                "name": "Frederick Bearsch",
                "address1": "843 Centerwood Dr",
                "address2": null,
                "city": "Charleston",
                "state": "SC",
                "postalCode": "29412",
                "country": "USA",
                "addressType": "RESIDENTIAL"
            },
            "carrierMethodName": null
        },
        "lineNumber": "1",
        "productName": "Miami Vegan: Plant-Based Recipes from the Tropics To Your Table by Ellen Kanner (Hardcover) Cookbook",
        "sku": "9781962539210",
        "chargeBreakup": [
            {
                "chargeType": "PRODUCT",
                "chargeName": "ItemPrice",
                "chargeAmount": {
                    "currency": "USD",
                    "amount": 39.98
                },
                "tax": {
                    "taxName": "Tax1",
                    "taxAmount": {
                        "currency": "USD",
                        "amount": 3.6
                    }
                }
            }
        ],
        "charge": {
            "amount": 43.58,
            "currency": "USD"
        },
        "qty": 1,
        "lastStatus": "Delivered",
        "marketplaceStatus": "Delivered",
        "lastStatusUpdatedAt": 1746625471000,
        "marketplaceStatusUpdatedAt": 1746625471000,
        "statusLog": [
            {
                "status": "Created",
                "dt": 1746230447810
            },
            {
                "status": "Acknowledged",
                "dt": 1746230448950
            },
            {
                "status": "SentToPartner",
                "dt": 1746232307166
            },
            {
                "status": "ShippedByPartner",
                "dt": 1746277302876
            },
            {
                "status": "Shipped",
                "dt": 1746277306128
            },
            {
                "status": "Delivered",
                "dt": 1746625471000
            }
        ],
        "marketPlaceStatusLog": [
            {
                "status": "Created",
                "dt": 1746230447810
            },
            {
                "status": "Acknowledged",
                "dt": 1746230448950
            },
            {
                "status": "Shipped",
                "dt": 1746277306128,
                "_id": "681613ba4c445fb085a0eb90"
            },
            {
                "status": "Delivered",
                "dt": 1746625471000
            }
        ],
        "refund": null,
        "fulfillment": {
            "fulfillmentOption": "DELIVERY",
            "shipMethod": "STANDARD",
            "storeId": null,
            "pickUpDateTime": 1746730800000,
            "pickUpBy": null,
            "shippingProgramType": "THREE_TO_FIVE_DAY"
        },
        "subSellerId": null,
        "cancellationReason": null,
        "trackingInfo": {
            "carrierName": {
                "otherCarrier": null,
                "carrier": null
            },
            "methodCode": "Standard",
            "carrierMethodCode": null,
            "trackingURL": null
        },
        "returnCenterAddress": null,
        "orderCreationAtWarehouse": {
            "orderDetails": {
                "id": 127906674,
                "state": {
                    "internalStatus": "CREATED",
                    "fulfillmentInProgress": true,
                    "fulfillmentDelayed": false,
                    "fulfillmentStatus": "ROUTING_IN_PROGRESS"
                },
                "shippedAt": null,
                "deliveredAt": null,
                "promisedShipByTime": 1746417600000,
                "promisedDeliveryByTime": 1747269108000,
                "createdAt": 1746232308000,
                "externalOrderId": "109012362304564",
                "address": {
                    "address1": "843 Centerwood Dr",
                    "address2": "",
                    "city": "Charleston",
                    "countryCode": "US",
                    "name": "",
                    "company": "",
                    "provinceCode": "SC",
                    "zip": "29412",
                    "phone": ""
                },
                "lineItems": [
                    {
                        "lineItemId": "109012362304564",
                        "quantity": 1,
                        "logisticsSku": "DS2G8C8ETAQ"
                    }
                ],
                "shipments": [],
                "cost": null,
                "source": "WALMART"
            },
            "status": "success"
        },
        "partnerBatchId": "0c9bd477-b0c5-441a-98db-fe36ff0d8854",
        "warehouseStatusLog": [
            {
                "status": "WAREHOUSE",
                "dt": 1746233207103
            }
        ],
        "parcelInfo": {
            "carrierCode": "DHL",
            "deliveredAt": "",
            "estimatedDeliveryTime": 1747072800000,
            "estimatedShipTime": 1746295200000,
            "fulfillmentStatus": "SHIPPED",
            "marketPlaceCarrierCode": "DHL",
            "promisedDeliveryByTime": 1747269108000,
            "promisedShipByTime": 1746417600000,
            "shippedAt": 1746276878000,
            "status": "SHIPPED",
            "trackingCode": "9261290316871715793571",
            "trackingUrl": "https://tracker.flexport.com/9261290316871715793571"
        },
        "nqTrackingURL": "https://tracker.flexport.com/9261290316871715793571",
        "settlement": {
            "channelFees": 6.54,
            "distrologicFees": 4.36,
            "totalShipping": 16.2,
            "platformFees": 11.27
        }
    },
    {
        "_id": "682c2adbf0d39812f563ce31",
        "listingPartner": "walmart",
        "platformAccount": "wm-a2",
        "fulfilmentPartner": "repro_warehouse_1234",
        "productType": "wm-home_other",
        "purchaseOrderId": "109011426348092",
        "customerOrderId": "200013075052100",
        "orderDate": 1745438749915,
        "shippingInfo": {
            "phone": "8434427087",
            "estimatedDeliveryDate": 1746039600000,
            "estimatedShipDate": 1745463600000,
            "methodCode": "Standard",
            "postalAddress": {
                "name": "Frederick Bearsch",
                "address1": "843 Centerwood Dr",
                "address2": null,
                "city": "Charleston",
                "state": "SC",
                "postalCode": "29412",
                "country": "USA",
                "addressType": "RESIDENTIAL"
            },
            "carrierMethodName": null
        },
        "lineNumber": "1",
        "productName": "Tootles the Turtle Tells the Truth: An Interactive Tale about Secrets (Paperback)",
        "sku": "9781452579009",
        "chargeBreakup": [
            {
                "chargeType": "PRODUCT",
                "chargeName": "ItemPrice",
                "chargeAmount": {
                    "currency": "USD",
                    "amount": 15.99
                },
                "tax": {
                    "taxName": "Tax1",
                    "taxAmount": {
                        "currency": "USD",
                        "amount": 1.44
                    }
                }
            }
        ],
        "charge": {
            "amount": 17.43,
            "currency": "USD"
        },
        "qty": 1,
        "lastStatus": "Delivered",
        "marketplaceStatus": "Delivered",
        "lastStatusUpdatedAt": 1746020767000,
        "marketplaceStatusUpdatedAt": 1746020767000,
        "statusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "SentToPartner",
                "dt": 1745443906929
            },
            {
                "status": "ShippedByPartner",
                "dt": 1745563107104
            },
            {
                "status": "Shipped",
                "dt": 1745563108245
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "marketPlaceStatusLog": [
            {
                "status": "Created",
                "dt": 1745442046234
            },
            {
                "status": "Acknowledged",
                "dt": 1745442047526
            },
            {
                "status": "Shipped",
                "dt": 1745563108245,
                "_id": "680b2de4209f553c234e0258"
            },
            {
                "status": "Delivered",
                "dt": 1746020767000
            }
        ],
        "refund": null,
        "fulfillment": {
            "fulfillmentOption": "DELIVERY",
            "shipMethod": "STANDARD",
            "storeId": null,
            "pickUpDateTime": 1746039600000,
            "pickUpBy": null,
            "shippingProgramType": "THREE_TO_FIVE_DAY"
        },
        "subSellerId": null,
        "cancellationReason": null,
        "trackingInfo": {
            "carrierName": {
                "otherCarrier": null,
                "carrier": null
            },
            "methodCode": "Standard",
            "carrierMethodCode": null,
            "trackingURL": null
        },
        "returnCenterAddress": null,
        "orderCreationAtWarehouse": {
            "orderDetails": {
                "id": 127405472,
                "state": {
                    "internalStatus": "CREATED",
                    "fulfillmentInProgress": true,
                    "fulfillmentDelayed": false,
                    "fulfillmentStatus": "ROUTING_IN_PROGRESS"
                },
                "shippedAt": null,
                "deliveredAt": null,
                "promisedShipByTime": 1745467200000,
                "promisedDeliveryByTime": 1746480707000,
                "createdAt": 1745443907000,
                "externalOrderId": "109011426348092",
                "address": {
                    "address1": "843 Centerwood Dr",
                    "address2": "",
                    "city": "Charleston",
                    "countryCode": "US",
                    "name": "",
                    "company": "",
                    "provinceCode": "SC",
                    "zip": "29412",
                    "phone": ""
                },
                "lineItems": [
                    {
                        "lineItemId": "109011426348092",
                        "quantity": 1,
                        "logisticsSku": "DNUKNA8JQTD"
                    }
                ],
                "shipments": [],
                "cost": null,
                "source": "WALMART"
            },
            "status": "success"
        },
        "partnerBatchId": "0770eaf9-0063-4425-a63d-bc2b8c4ad5f9",
        "warehouseStatusLog": [
            {
                "status": "WAREHOUSE",
                "dt": 1745479007793
            }
        ],
        "parcelInfo": {
            "carrierCode": "DHL",
            "deliveredAt": "",
            "estimatedDeliveryTime": 1746122400000,
            "estimatedShipTime": 1745517600000,
            "fulfillmentStatus": "SHIPPED",
            "marketPlaceCarrierCode": "DHL",
            "promisedDeliveryByTime": 1746480707000,
            "promisedShipByTime": 1745467200000,
            "shippedAt": 1745511196000,
            "status": "SHIPPED",
            "trackingCode": "9261290316871715031291",
            "trackingUrl": "https://tracker.flexport.com/9261290316871715031291"
        },
        "parcelTrackingInfo": [
            {
                "promisedDeliveryByTime": 1746480707000,
                "promisedShipByTime": 1745467200000,
                "shippedAt": 1745511196000,
                "source": "WALMART",
                "fulfillmentDelayed": false,
                "fulfillmentInProgress": true,
                "fulfillmentStatus": "SHIPPED",
                "internalStatus": "SHIPPED",
                "labelUrl": "",
                "estimatedDeliveryTime": 1746122400000,
                "status": "SHIPPED",
                "ts": 1745561807467
            }
        ],
        "nqTrackingURL": "https://tracker.flexport.com/9261290316871715031291",
        "settlement": {
            "channelFees": 2.61,
            "distrologicFees": 1.74,
            "totalShipping": 16.2,
            "platformFees": 7.76
        }
    }
]


function getProductTypeData(products) {
    const resultMap = {};
    for (const doc of products) {
        const key = doc.productType;
        // Calculate settlement value
        const settlementValue = doc.charge.amount - (
            (doc.settlement?.channelFees || 0) +
            (doc.settlement?.distrologicFees || 0) +
            (doc.settlement?.totalShipping || 0) +
            (doc.settlement?.platformFees || 0)
        );

        if (!resultMap[key]) {
            resultMap[key] = {
                _id: key,
                totalOrders: 0,
                totalAmount: 0,
                settlementValue: 0,
                listingPartner: doc.listingPartner,
                items:[]
            };
        }

        resultMap[key].totalOrders += 1;
        resultMap[key].totalAmount += doc.charge.amount;
        resultMap[key].settlementValue += settlementValue;
        resultMap[key].items.push(doc)

    }
    return Object.values(resultMap)
}
// getProductTypeData(products)
console.log(JSON.stringify(getProductTypeData(products), null, 2));
