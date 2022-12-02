# React Full Text Search

This project demonstrate a full text Search query on a mongodb database over multiple fields.

### Mongo Collections Schema

1. Company Collection
  ```
  {
    "_id": ObjectId,
    "name": String,
    "url": "String
  }
  ```
2. Ad Collection
  ```
  {
    "_id": ObjectId,
    "companyId": {type: ObjectId, ref: "Company"},
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String
  }
  ```

### Approach 1

We can use `$text` in mongodb over a compoundIndex of `{primaryText, headline, description}`. This would be fast and supports advance $search function.

BUT. we also want to search on Company name, which is avaiable in differrent collection. `$text` cannot work jointly on 2 collections. So we need another approach

### Approach 2

We will join both collections by `$lookUp` and then `$unwind` in aggregations pipeline, and then pass a regex pattern in `$or` on all the fields required.
This method in not advanced as above but it works fine for case.

Hence we are using Approach 2.

@author: shavika619@gmail.com

