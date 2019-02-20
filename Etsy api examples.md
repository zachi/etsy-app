# Etsy api examples


### get user shops
`https://openapi.etsy.com/v2/users/\_\_SELF__/shops`
[api documentation](https://www.etsy.com/developers/documentation/reference/shop#method_findallusershops)
```json
{
  "count": 1,
  "results": [
    {
      "shop_id": 19416173,
      "shop_name": "zachietsytest",
      "user_id": 197422866,
      "creation_tsz": 1548662883,
      "title": null,
      "announcement": null,
      "currency_code": "USD",
      "is_vacation": false,
      "vacation_message": null,
      "sale_message": null,
      "digital_sale_message": null,
      "last_updated_tsz": 1549297877,
      "listing_active_count": 0,
      "digital_listing_count": 0,
      "login_name": "k0v6bdoe",
      "accepts_custom_requests": false,
      "policy_welcome": null,
      "policy_payment": null,
      "policy_shipping": null,
      "policy_refunds": null,
      "policy_additional": null,
      "policy_seller_info": null,
      "policy_updated_tsz": 0,
      "policy_has_private_receipt_info": false,
      "vacation_autoreply": null,
      "url": "https://www.etsy.com/shop/zachietsytest?utm_source=greeninvoice&utm_medium=api&utm_campaign=api",
      "image_url_760x100": null,
      "num_favorers": 2,
      "languages": [
        "en-US"
      ],
      "upcoming_local_event_id": null,
      "icon_url_fullxfull": null,
      "is_using_structured_policies": false,
      "has_onboarded_structured_policies": false,
      "has_unstructured_policies": false,
      "include_dispute_form_link": false,
      "use_new_inventory_endpoints": true,
      "is_direct_checkout_onboarded": false,
      "policy_privacy": null,
      "is_calculated_eligible": false
    }
  ],
  "params": {
    "user_id": "__SELF__",
    "limit": 25,
    "offset": 0,
    "page": null
  },
  "type": "Shop",
  "pagination": {
    "effective_limit": 25,
    "effective_offset": 0,
    "next_offset": null,
    "effective_page": 1,
    "next_page": null
  }
}
```

### get shop transactions
https://openapi.etsy.com/v2/shops/zachietsytest/transactions
[api documentation](https://www.etsy.com/developers/documentation/reference/transaction#section_fields)
```json
{
  "count": 1,
  "results": [
    {
      "transaction_id": 1582622088,
      "title": "test",
      "description": "test",
      "seller_user_id": 197422866,
      "buyer_user_id": 11255801,
      "creation_tsz": 1550562795,
      "paid_tsz": null,
      "shipped_tsz": null,
      "price": "0.20",
      "currency_code": "USD",
      "quantity": 1,
      "tags": [
        "Toys"
      ],
      "materials": [
        
      ],
      "image_listing_id": 1816545423,
      "receipt_id": 1426631161,
      "shipping_cost": "0.00",
      "is_digital": false,
      "file_data": "",
      "listing_id": 666599744,
      "is_quick_sale": false,
      "seller_feedback_id": null,
      "buyer_feedback_id": null,
      "transaction_type": "listing",
      "url": "https://www.etsy.com/transaction/1582622088",
      "variations": [
        
      ],
      "product_data": {
        "product_id": 3200151940,
        "property_values": [
          
        ],
        "offerings": [
          {
            "offering_id": 3174568870,
            "price": {
              "amount": 75,
              "divisor": 100,
              "currency_code": "ILS",
              "currency_formatted_short": "₪0.75",
              "currency_formatted_long": "₪0.75 ILS",
              "currency_formatted_raw": "0.75",
              "original_currency_code": "USD",
              "before_conversion": {
                "amount": 20,
                "divisor": 100,
                "currency_code": "USD",
                "currency_formatted_short": "$0.20",
                "currency_formatted_long": "$0.20 USD",
                "currency_formatted_raw": "0.20"
              }
            },
            "quantity": 0
          }
        ]
      }
    }
  ],
  "params": {
    "shop_id": "zachietsytest",
    "limit": 25,
    "offset": 0,
    "page": null
  },
  "type": "Transaction",
  "pagination": {
    "effective_limit": 25,
    "effective_offset": 0,
    "next_offset": null,
    "effective_page": 1,
    "next_page": null
  }
}
```
