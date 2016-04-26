import * as types from './standard';

import requireType from '../helpers/requireType';
import ApiResourceType from '../builders/ApiResourceType';

const attachmentType = new ApiResourceType('Attachment', () => ({
  attributes: {
    file_url: new types.GraphQLNonNull(types.GraphQLString),
    mimetype: types.GraphQLString,
    extension: types.GraphQLString,
    filename: types.GraphQLString,
    size: types.GraphQLInt,
    thumbnail_url: types.GraphQLString,
    preview_url: types.GraphQLString,
    thumbnailed: types.GraphQLBoolean,
    width: types.GraphQLInt,
    height: types.GraphQLInt,
    best_metadata: types.GraphQLReusableObject,
    other_metadata: types.GraphQLReusableObject,
    position: types.GraphQLInt
  },
  relatesToOne: {
    asset: requireType('Asset'),
    creator: requireType('User')
  }
}));

module.exports = attachmentType;
