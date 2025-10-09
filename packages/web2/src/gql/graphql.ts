/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type BrandRequestT = {
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type BrandResponseT = {
  __typename?: 'BrandResponseT';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** The basic directions */
export enum Direction {
  Approved = 'Approved',
  Rejected = 'Rejected',
  WaitingApproval = 'Waiting_Approval'
}

export type LoginInputT = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MerchantRequestT = {
  brand: Scalars['String']['input'];
  brandName: Scalars['String']['input'];
  business: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['Int']['input'];
  status: Direction;
};

export type MerchantResposeT = {
  __typename?: 'MerchantResposeT';
  brand?: Maybe<BrandResponseT>;
  brandName: Scalars['String']['output'];
  business: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['Int']['output'];
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBrand: Scalars['String']['output'];
  addMerchant: Scalars['String']['output'];
  addProduct: Scalars['String']['output'];
  loginUserMutation: Scalars['String']['output'];
  registerUserMutation: Scalars['String']['output'];
};


export type MutationAddBrandArgs = {
  body: BrandRequestT;
};


export type MutationAddMerchantArgs = {
  body: MerchantRequestT;
};


export type MutationAddProductArgs = {
  body: ProductInputT;
};


export type MutationLoginUserMutationArgs = {
  body: LoginInputT;
};


export type MutationRegisterUserMutationArgs = {
  body: RegisterInputT;
};

export type ProductInputT = {
  brand: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageKey?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  sku: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  taxable: Scalars['Boolean']['input'];
};

export type ProductT = {
  __typename?: 'ProductT';
  brand?: Maybe<BrandResponseT>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageKey?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  taxable: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  Brand: Array<BrandResponseT>;
  Merchant: Array<MerchantResposeT>;
  ProductById: Array<ProductT>;
  Products: Array<ProductT>;
  Users: Array<RegisterResponseT>;
};


export type QueryProductByIdArgs = {
  id: Scalars['String']['input'];
};

export type RegisterInputT = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type RegisterResponseT = {
  __typename?: 'RegisterResponseT';
  created: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  merchant?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type ProductByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductByIdQuery = { __typename?: 'Query', ProductById: Array<{ __typename?: 'ProductT', id: string, sku: string, name: string, slug: string, imageUrl?: string | null, imageKey?: string | null, description?: string | null, quantity: number, price: number, taxable: boolean, isActive: boolean }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', Products: Array<{ __typename?: 'ProductT', id: string, sku: string, name: string, slug: string, imageUrl?: string | null, imageKey?: string | null, description?: string | null, quantity: number, price: number, taxable: boolean, isActive: boolean }> }

export const ProductByIdDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "ProductById" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "ProductById" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "StringValue", "value": "", "block": false } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sku" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "imageUrl" } }, { "kind": "Field", "name": { "kind": "Name", "value": "imageKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "price" } }, { "kind": "Field", "name": { "kind": "Name", "value": "taxable" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isActive" } }] } }] } }] } as unknown as DocumentNode<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "Products" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sku" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "imageUrl" } }, { "kind": "Field", "name": { "kind": "Name", "value": "imageKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" } }, { "kind": "Field", "name": { "kind": "Name", "value": "price" } }, { "kind": "Field", "name": { "kind": "Name", "value": "taxable" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isActive" } }] } }] } }] } as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
