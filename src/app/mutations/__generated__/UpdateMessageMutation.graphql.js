/**
 * @flow
 * @relayHash 386fa43c0c74c05f2cee9b892719ba9a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdateMessageMutationVariables = {|
  input: {
    id: string;
    text: string;
    clientMutationId?: ?string;
  };
|};
export type UpdateMessageMutationResponse = {|
  +updateMessage: ?{|
    +message: ?{|
      +id: string;
      +text: ?string;
    |};
  |};
|};
*/


/*
mutation UpdateMessageMutation(
  $input: UpdateMessageInput!
) {
  updateMessage(input: $input) {
    message {
      id
      text
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateMessageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateMessageInput!"
          }
        ],
        "concreteType": "UpdateMessagePayload",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
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
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdateMessageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdateMessageMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateMessageInput!"
          }
        ],
        "concreteType": "UpdateMessagePayload",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
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
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation UpdateMessageMutation(\n  $input: UpdateMessageInput!\n) {\n  updateMessage(input: $input) {\n    message {\n      id\n      text\n    }\n  }\n}\n"
};

module.exports = batch;
