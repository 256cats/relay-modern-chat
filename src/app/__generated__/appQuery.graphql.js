/**
 * @flow
 * @relayHash 18b913c68dc2b5dc0a1fc542008c8c3d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query appQuery {
  user {
    ...App_user
    id
  }
}

fragment App_user on User {
  id
  totalCount
  avatar
  messages(first: 2147483647) {
    edges {
      node {
        __typename
        id
        text
        ts
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...MessageList_user
}

fragment MessageList_user on User {
  messages(first: 2147483647) {
    edges {
      node {
        __typename
        id
        text
        ts
        ...Message_message
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  totalCount
  avatar
  ...Message_user
}

fragment Message_message on Message {
  id
  text
  ts
}

fragment Message_user on User {
  id
  avatar
  totalCount
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "avatar",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "concreteType": "MessageConnection",
            "name": "messages",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "MessageEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Message",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "text",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "ts",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "messages{\"first\":2147483647}"
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "handle": "connection",
            "name": "messages",
            "key": "MessageList_messages",
            "filters": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appQuery {\n  user {\n    ...App_user\n    id\n  }\n}\n\nfragment App_user on User {\n  id\n  totalCount\n  avatar\n  messages(first: 2147483647) {\n    edges {\n      node {\n        __typename\n        id\n        text\n        ts\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...MessageList_user\n}\n\nfragment MessageList_user on User {\n  messages(first: 2147483647) {\n    edges {\n      node {\n        __typename\n        id\n        text\n        ts\n        ...Message_message\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  totalCount\n  avatar\n  ...Message_user\n}\n\nfragment Message_message on Message {\n  id\n  text\n  ts\n}\n\nfragment Message_user on User {\n  id\n  avatar\n  totalCount\n}\n"
};

module.exports = batch;
