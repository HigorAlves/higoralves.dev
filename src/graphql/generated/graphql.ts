import { useQuery, UseQueryOptions } from 'react-query'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
	return async (): Promise<TData> => {
		const res = await fetch(
			'https://api-us-west-2.graphcms.com/v2/ckzvruldv2zgj01za831374p6/master',
			{
				method: 'POST',
				body: JSON.stringify({ query, variables })
			}
		)

		const json = await res.json()

		if (json.errors) {
			const { message } = json.errors[0]

			throw new Error(message)
		}

		return json.data
	}
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: any
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: any
	Hex: any
	/** Raw JSON value */
	Json: any
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: any
	RGBAHue: any
	RGBATransparency: any
	/** Slate-compatible RichText AST */
	RichTextAST: any
}

export type Aggregate = {
	__typename?: 'Aggregate'
	count: Scalars['Int']
}

/** Blog articles */
export type Article = Node & {
	__typename?: 'Article'
	body: RichText
	cover: Asset
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	description: Scalars['String']
	/** Get the document in other stages */
	documentInStages: Array<Article>
	/** List of Article versions */
	history: Array<Version>
	/** The unique identifier */
	id: Scalars['ID']
	language: Language
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	scheduledIn: Array<ScheduledOperation>
	/** Select a slug for this blog post, such as post-1, post-2, etc. */
	slug: Scalars['String']
	/** System stage field */
	stage: Stage
	subject: Subjects
	title: Scalars['String']
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
}

/** Blog articles */
export type ArticleCoverArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Blog articles */
export type ArticleCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Blog articles */
export type ArticleDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

/** Blog articles */
export type ArticleHistoryArgs = {
	limit?: Scalars['Int']
	skip?: Scalars['Int']
	stageOverride?: InputMaybe<Stage>
}

/** Blog articles */
export type ArticlePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Blog articles */
export type ArticleScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Blog articles */
export type ArticleUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ArticleConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: ArticleWhereUniqueInput
}

/** A connection to a list of items. */
export type ArticleConnection = {
	__typename?: 'ArticleConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<ArticleEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type ArticleCreateInput = {
	body: Scalars['RichTextAST']
	cover: AssetCreateOneInlineInput
	createdAt?: InputMaybe<Scalars['DateTime']>
	description: Scalars['String']
	language: Language
	slug: Scalars['String']
	subject: Subjects
	title: Scalars['String']
	updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ArticleCreateManyInlineInput = {
	/** Connect multiple existing Article documents */
	connect?: InputMaybe<Array<ArticleWhereUniqueInput>>
	/** Create and connect multiple existing Article documents */
	create?: InputMaybe<Array<ArticleCreateInput>>
}

export type ArticleCreateOneInlineInput = {
	/** Connect one existing Article document */
	connect?: InputMaybe<ArticleWhereUniqueInput>
	/** Create and connect one Article document */
	create?: InputMaybe<ArticleCreateInput>
}

/** An edge in a connection. */
export type ArticleEdge = {
	__typename?: 'ArticleEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: Article
}

/** Identifies documents */
export type ArticleManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ArticleWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ArticleWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ArticleWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	cover?: InputMaybe<AssetWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	language?: InputMaybe<Language>
	/** All values that are contained in given list. */
	language_in?: InputMaybe<Array<Language>>
	/** All values that are not equal to given value. */
	language_not?: InputMaybe<Language>
	/** All values that are not contained in given list. */
	language_not_in?: InputMaybe<Array<Language>>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	slug?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>
	subject?: InputMaybe<Subjects>
	/** All values that are contained in given list. */
	subject_in?: InputMaybe<Array<Subjects>>
	/** All values that are not equal to given value. */
	subject_not?: InputMaybe<Subjects>
	/** All values that are not contained in given list. */
	subject_not_in?: InputMaybe<Array<Subjects>>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

export enum ArticleOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	LanguageAsc = 'language_ASC',
	LanguageDesc = 'language_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	SubjectAsc = 'subject_ASC',
	SubjectDesc = 'subject_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type ArticleUpdateInput = {
	body?: InputMaybe<Scalars['RichTextAST']>
	cover?: InputMaybe<AssetUpdateOneInlineInput>
	description?: InputMaybe<Scalars['String']>
	language?: InputMaybe<Language>
	slug?: InputMaybe<Scalars['String']>
	subject?: InputMaybe<Subjects>
	title?: InputMaybe<Scalars['String']>
}

export type ArticleUpdateManyInlineInput = {
	/** Connect multiple existing Article documents */
	connect?: InputMaybe<Array<ArticleConnectInput>>
	/** Create and connect multiple Article documents */
	create?: InputMaybe<Array<ArticleCreateInput>>
	/** Delete multiple Article documents */
	delete?: InputMaybe<Array<ArticleWhereUniqueInput>>
	/** Disconnect multiple Article documents */
	disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing Article documents */
	set?: InputMaybe<Array<ArticleWhereUniqueInput>>
	/** Update multiple Article documents */
	update?: InputMaybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple Article documents */
	upsert?: InputMaybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>
}

export type ArticleUpdateManyInput = {
	body?: InputMaybe<Scalars['RichTextAST']>
	description?: InputMaybe<Scalars['String']>
	language?: InputMaybe<Language>
	subject?: InputMaybe<Subjects>
	title?: InputMaybe<Scalars['String']>
}

export type ArticleUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ArticleUpdateManyInput
	/** Document search */
	where: ArticleWhereInput
}

export type ArticleUpdateOneInlineInput = {
	/** Connect existing Article document */
	connect?: InputMaybe<ArticleWhereUniqueInput>
	/** Create and connect one Article document */
	create?: InputMaybe<ArticleCreateInput>
	/** Delete currently connected Article document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected Article document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single Article document */
	update?: InputMaybe<ArticleUpdateWithNestedWhereUniqueInput>
	/** Upsert single Article document */
	upsert?: InputMaybe<ArticleUpsertWithNestedWhereUniqueInput>
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ArticleUpdateInput
	/** Unique document search */
	where: ArticleWhereUniqueInput
}

export type ArticleUpsertInput = {
	/** Create document if it didn't exist */
	create: ArticleCreateInput
	/** Update document if it exists */
	update: ArticleUpdateInput
}

export type ArticleUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ArticleUpsertInput
	/** Unique document search */
	where: ArticleWhereUniqueInput
}

/** Identifies documents */
export type ArticleWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ArticleWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ArticleWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ArticleWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	cover?: InputMaybe<AssetWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	language?: InputMaybe<Language>
	/** All values that are contained in given list. */
	language_in?: InputMaybe<Array<Language>>
	/** All values that are not equal to given value. */
	language_not?: InputMaybe<Language>
	/** All values that are not contained in given list. */
	language_not_in?: InputMaybe<Array<Language>>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	slug?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>
	subject?: InputMaybe<Subjects>
	/** All values that are contained in given list. */
	subject_in?: InputMaybe<Array<Subjects>>
	/** All values that are not equal to given value. */
	subject_not?: InputMaybe<Subjects>
	/** All values that are not contained in given list. */
	subject_not_in?: InputMaybe<Array<Subjects>>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
	slug?: InputMaybe<Scalars['String']>
}

/** Asset system model */
export type Asset = Node & {
	__typename?: 'Asset'
	coverArticle: Array<Article>
	coverProject: Array<Project>
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Get the document in other stages */
	documentInStages: Array<Asset>
	/** The file name */
	fileName: Scalars['String']
	/** The file handle */
	handle: Scalars['String']
	/** The height of the file */
	height?: Maybe<Scalars['Float']>
	/** List of Asset versions */
	history: Array<Version>
	iconTechnology: Array<Technology>
	/** The unique identifier */
	id: Scalars['ID']
	/** System Locale field */
	locale: Locale
	/** Get the other localizations for this document */
	localizations: Array<Asset>
	/** The mime type of the file */
	mimeType?: Maybe<Scalars['String']>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	scheduledIn: Array<ScheduledOperation>
	seoImage: Array<Seo>
	/** The file size */
	size?: Maybe<Scalars['Float']>
	/** System stage field */
	stage: Stage
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
	/** Get the url for the asset with provided transformations applied. */
	url: Scalars['String']
	/** The file width */
	width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCoverArticleArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<ArticleOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ArticleWhereInput>
}

/** Asset system model */
export type AssetCoverProjectArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<ProjectOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ProjectWhereInput>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
	limit?: Scalars['Int']
	skip?: Scalars['Int']
	stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetIconTechnologyArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<TechnologyOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<TechnologyWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']
	locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetSeoImageArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<SeoOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<SeoWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
	transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
	__typename?: 'AssetConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<AssetEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type AssetCreateInput = {
	coverArticle?: InputMaybe<ArticleCreateManyInlineInput>
	coverProject?: InputMaybe<ProjectCreateManyInlineInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	fileName: Scalars['String']
	handle: Scalars['String']
	height?: InputMaybe<Scalars['Float']>
	iconTechnology?: InputMaybe<TechnologyCreateManyInlineInput>
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>
	mimeType?: InputMaybe<Scalars['String']>
	seoImage?: InputMaybe<SeoCreateManyInlineInput>
	size?: InputMaybe<Scalars['Float']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>
	fileName: Scalars['String']
	handle: Scalars['String']
	height?: InputMaybe<Scalars['Float']>
	mimeType?: InputMaybe<Scalars['String']>
	size?: InputMaybe<Scalars['Float']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput
	locale: Locale
}

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
	__typename?: 'AssetEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	coverArticle_every?: InputMaybe<ArticleWhereInput>
	coverArticle_none?: InputMaybe<ArticleWhereInput>
	coverArticle_some?: InputMaybe<ArticleWhereInput>
	coverProject_every?: InputMaybe<ProjectWhereInput>
	coverProject_none?: InputMaybe<ProjectWhereInput>
	coverProject_some?: InputMaybe<ProjectWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	iconTechnology_every?: InputMaybe<TechnologyWhereInput>
	iconTechnology_none?: InputMaybe<TechnologyWhereInput>
	iconTechnology_some?: InputMaybe<TechnologyWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	seoImage_every?: InputMaybe<SeoWhereInput>
	seoImage_none?: InputMaybe<SeoWhereInput>
	seoImage_some?: InputMaybe<SeoWhereInput>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	FileNameAsc = 'fileName_ASC',
	FileNameDesc = 'fileName_DESC',
	HandleAsc = 'handle_ASC',
	HandleDesc = 'handle_DESC',
	HeightAsc = 'height_ASC',
	HeightDesc = 'height_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WidthAsc = 'width_ASC',
	WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>
	image?: InputMaybe<ImageTransformationInput>
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
	coverArticle?: InputMaybe<ArticleUpdateManyInlineInput>
	coverProject?: InputMaybe<ProjectUpdateManyInlineInput>
	fileName?: InputMaybe<Scalars['String']>
	handle?: InputMaybe<Scalars['String']>
	height?: InputMaybe<Scalars['Float']>
	iconTechnology?: InputMaybe<TechnologyUpdateManyInlineInput>
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>
	mimeType?: InputMaybe<Scalars['String']>
	seoImage?: InputMaybe<SeoUpdateManyInlineInput>
	size?: InputMaybe<Scalars['Float']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']>
	handle?: InputMaybe<Scalars['String']>
	height?: InputMaybe<Scalars['Float']>
	mimeType?: InputMaybe<Scalars['String']>
	size?: InputMaybe<Scalars['Float']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput
	locale: Locale
}

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars['String']>
	height?: InputMaybe<Scalars['Float']>
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
	mimeType?: InputMaybe<Scalars['String']>
	size?: InputMaybe<Scalars['Float']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']>
	height?: InputMaybe<Scalars['Float']>
	mimeType?: InputMaybe<Scalars['String']>
	size?: InputMaybe<Scalars['Float']>
	width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput
	locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput
	/** Document search */
	where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput
	/** Unique document search */
	where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput
	/** Update document if it exists */
	update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput
	locale: Locale
	update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput
	/** Unique document search */
	where: AssetWhereUniqueInput
}

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	coverArticle_every?: InputMaybe<ArticleWhereInput>
	coverArticle_none?: InputMaybe<ArticleWhereInput>
	coverArticle_some?: InputMaybe<ArticleWhereInput>
	coverProject_every?: InputMaybe<ProjectWhereInput>
	coverProject_none?: InputMaybe<ProjectWhereInput>
	coverProject_some?: InputMaybe<ProjectWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	fileName?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	fileName_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars['String']>
	handle?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	handle_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars['String']>
	height?: InputMaybe<Scalars['Float']>
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars['Float']>
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars['Float']>
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<Scalars['Float']>>
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars['Float']>
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars['Float']>
	/** All values that are not equal to given value. */
	height_not?: InputMaybe<Scalars['Float']>
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<Scalars['Float']>>
	iconTechnology_every?: InputMaybe<TechnologyWhereInput>
	iconTechnology_none?: InputMaybe<TechnologyWhereInput>
	iconTechnology_some?: InputMaybe<TechnologyWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	mimeType?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	mimeType_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	seoImage_every?: InputMaybe<SeoWhereInput>
	seoImage_none?: InputMaybe<SeoWhereInput>
	seoImage_some?: InputMaybe<SeoWhereInput>
	size?: InputMaybe<Scalars['Float']>
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars['Float']>
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars['Float']>
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<Scalars['Float']>>
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars['Float']>
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars['Float']>
	/** All values that are not equal to given value. */
	size_not?: InputMaybe<Scalars['Float']>
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<Scalars['Float']>>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
	width?: InputMaybe<Scalars['Float']>
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars['Float']>
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars['Float']>
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<Scalars['Float']>>
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars['Float']>
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars['Float']>
	/** All values that are not equal to given value. */
	width_not?: InputMaybe<Scalars['Float']>
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<Scalars['Float']>>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
	__typename?: 'BatchPayload'
	/** The number of nodes that have been affected by the Batch operation. */
	count: Scalars['Long']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
	__typename?: 'Color'
	css: Scalars['String']
	hex: Scalars['Hex']
	rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars['Hex']>
	rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars['ID']>
	/** Connect document before specified document */
	before?: InputMaybe<Scalars['ID']>
	/** Connect document at last position */
	end?: InputMaybe<Scalars['Boolean']>
	/** Connect document at first position */
	start?: InputMaybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
	Doc = 'doc',
	Docx = 'docx',
	Html = 'html',
	Jpg = 'jpg',
	Odp = 'odp',
	Ods = 'ods',
	Odt = 'odt',
	Pdf = 'pdf',
	Png = 'png',
	Ppt = 'ppt',
	Pptx = 'pptx',
	Svg = 'svg',
	Txt = 'txt',
	Webp = 'webp',
	Xls = 'xls',
	Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
	__typename?: 'DocumentVersion'
	createdAt: Scalars['DateTime']
	data?: Maybe<Scalars['Json']>
	id: Scalars['ID']
	revision: Scalars['Int']
	stage: Stage
}

export enum ImageFit {
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	Clip = 'clip',
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	Crop = 'crop',
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	Max = 'max',
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	Scale = 'scale'
}

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars['Int']>
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>
}

export enum Language {
	En = 'en',
	Pt = 'pt'
}

/** Locale system enumeration */
export enum Locale {
	Br = 'br',
	/** System locale */
	En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
	__typename?: 'Location'
	distance: Scalars['Float']
	latitude: Scalars['Float']
	longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
	from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars['Float']
	longitude: Scalars['Float']
}

export type Mutation = {
	__typename?: 'Mutation'
	/** Create one article */
	createArticle?: Maybe<Article>
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>
	/** Create one project */
	createProject?: Maybe<Project>
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>
	/** Create one seo */
	createSeo?: Maybe<Seo>
	/** Create one technology */
	createTechnology?: Maybe<Technology>
	/** Delete one article from _all_ existing stages. Returns deleted document. */
	deleteArticle?: Maybe<Article>
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>
	/**
	 * Delete many Article documents
	 * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
	 */
	deleteManyArticles: BatchPayload
	/** Delete many Article documents, return deleted documents */
	deleteManyArticlesConnection: ArticleConnection
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection
	/**
	 * Delete many Project documents
	 * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
	 */
	deleteManyProjects: BatchPayload
	/** Delete many Project documents, return deleted documents */
	deleteManyProjectsConnection: ProjectConnection
	/**
	 * Delete many Seo documents
	 * @deprecated Please use the new paginated many mutation (deleteManySeosConnection)
	 */
	deleteManySeos: BatchPayload
	/** Delete many Seo documents, return deleted documents */
	deleteManySeosConnection: SeoConnection
	/**
	 * Delete many Technology documents
	 * @deprecated Please use the new paginated many mutation (deleteManyTechnologiesConnection)
	 */
	deleteManyTechnologies: BatchPayload
	/** Delete many Technology documents, return deleted documents */
	deleteManyTechnologiesConnection: TechnologyConnection
	/** Delete one project from _all_ existing stages. Returns deleted document. */
	deleteProject?: Maybe<Project>
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>
	/** Delete one seo from _all_ existing stages. Returns deleted document. */
	deleteSeo?: Maybe<Seo>
	/** Delete one technology from _all_ existing stages. Returns deleted document. */
	deleteTechnology?: Maybe<Technology>
	/** Publish one article */
	publishArticle?: Maybe<Article>
	/** Publish one asset */
	publishAsset?: Maybe<Asset>
	/**
	 * Publish many Article documents
	 * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
	 */
	publishManyArticles: BatchPayload
	/** Publish many Article documents */
	publishManyArticlesConnection: ArticleConnection
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection
	/**
	 * Publish many Project documents
	 * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
	 */
	publishManyProjects: BatchPayload
	/** Publish many Project documents */
	publishManyProjectsConnection: ProjectConnection
	/**
	 * Publish many Seo documents
	 * @deprecated Please use the new paginated many mutation (publishManySeosConnection)
	 */
	publishManySeos: BatchPayload
	/** Publish many Seo documents */
	publishManySeosConnection: SeoConnection
	/**
	 * Publish many Technology documents
	 * @deprecated Please use the new paginated many mutation (publishManyTechnologiesConnection)
	 */
	publishManyTechnologies: BatchPayload
	/** Publish many Technology documents */
	publishManyTechnologiesConnection: TechnologyConnection
	/** Publish one project */
	publishProject?: Maybe<Project>
	/** Publish one seo */
	publishSeo?: Maybe<Seo>
	/** Publish one technology */
	publishTechnology?: Maybe<Technology>
	/** Schedule to publish one article */
	schedulePublishArticle?: Maybe<Article>
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>
	/** Schedule to publish one project */
	schedulePublishProject?: Maybe<Project>
	/** Schedule to publish one seo */
	schedulePublishSeo?: Maybe<Seo>
	/** Schedule to publish one technology */
	schedulePublishTechnology?: Maybe<Technology>
	/** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishArticle?: Maybe<Article>
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>
	/** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishProject?: Maybe<Project>
	/** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishSeo?: Maybe<Seo>
	/** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishTechnology?: Maybe<Technology>
	/** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishArticle?: Maybe<Article>
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>
	/**
	 * Unpublish many Article documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
	 */
	unpublishManyArticles: BatchPayload
	/** Find many Article documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyArticlesConnection: ArticleConnection
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection
	/**
	 * Unpublish many Project documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
	 */
	unpublishManyProjects: BatchPayload
	/** Find many Project documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyProjectsConnection: ProjectConnection
	/**
	 * Unpublish many Seo documents
	 * @deprecated Please use the new paginated many mutation (unpublishManySeosConnection)
	 */
	unpublishManySeos: BatchPayload
	/** Find many Seo documents that match criteria in specified stage and unpublish from target stages */
	unpublishManySeosConnection: SeoConnection
	/**
	 * Unpublish many Technology documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyTechnologiesConnection)
	 */
	unpublishManyTechnologies: BatchPayload
	/** Find many Technology documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyTechnologiesConnection: TechnologyConnection
	/** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishProject?: Maybe<Project>
	/** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishSeo?: Maybe<Seo>
	/** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishTechnology?: Maybe<Technology>
	/** Update one article */
	updateArticle?: Maybe<Article>
	/** Update one asset */
	updateAsset?: Maybe<Asset>
	/**
	 * Update many articles
	 * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
	 */
	updateManyArticles: BatchPayload
	/** Update many Article documents */
	updateManyArticlesConnection: ArticleConnection
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection
	/**
	 * Update many projects
	 * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
	 */
	updateManyProjects: BatchPayload
	/** Update many Project documents */
	updateManyProjectsConnection: ProjectConnection
	/**
	 * Update many seos
	 * @deprecated Please use the new paginated many mutation (updateManySeosConnection)
	 */
	updateManySeos: BatchPayload
	/** Update many Seo documents */
	updateManySeosConnection: SeoConnection
	/**
	 * Update many technologies
	 * @deprecated Please use the new paginated many mutation (updateManyTechnologiesConnection)
	 */
	updateManyTechnologies: BatchPayload
	/** Update many Technology documents */
	updateManyTechnologiesConnection: TechnologyConnection
	/** Update one project */
	updateProject?: Maybe<Project>
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>
	/** Update one seo */
	updateSeo?: Maybe<Seo>
	/** Update one technology */
	updateTechnology?: Maybe<Technology>
	/** Upsert one article */
	upsertArticle?: Maybe<Article>
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>
	/** Upsert one project */
	upsertProject?: Maybe<Project>
	/** Upsert one seo */
	upsertSeo?: Maybe<Seo>
	/** Upsert one technology */
	upsertTechnology?: Maybe<Technology>
}

export type MutationCreateArticleArgs = {
	data: ArticleCreateInput
}

export type MutationCreateAssetArgs = {
	data: AssetCreateInput
}

export type MutationCreateProjectArgs = {
	data: ProjectCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput
}

export type MutationCreateSeoArgs = {
	data: SeoCreateInput
}

export type MutationCreateTechnologyArgs = {
	data: TechnologyCreateInput
}

export type MutationDeleteArticleArgs = {
	where: ArticleWhereUniqueInput
}

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput
}

export type MutationDeleteManyArticlesArgs = {
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationDeleteManyArticlesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationDeleteManyAssetsArgs = {
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyProjectsArgs = {
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManyProjectsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManySeosArgs = {
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationDeleteManySeosConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationDeleteManyTechnologiesArgs = {
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationDeleteManyTechnologiesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationDeleteProjectArgs = {
	where: ProjectWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSeoArgs = {
	where: SeoWhereUniqueInput
}

export type MutationDeleteTechnologyArgs = {
	where: TechnologyWhereUniqueInput
}

export type MutationPublishArticleArgs = {
	to?: Array<Stage>
	where: ArticleWhereUniqueInput
}

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	to?: Array<Stage>
	where: AssetWhereUniqueInput
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyArticlesArgs = {
	to?: Array<Stage>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationPublishManyArticlesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: InputMaybe<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	to?: Array<Stage>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	to?: Array<Stage>
	where?: InputMaybe<AssetManyWhereInput>
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: InputMaybe<Stage>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	skip?: InputMaybe<Scalars['Int']>
	to?: Array<Stage>
	where?: InputMaybe<AssetManyWhereInput>
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyProjectsArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	to?: Array<Stage>
	where?: InputMaybe<ProjectManyWhereInput>
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyProjectsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: InputMaybe<Stage>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	skip?: InputMaybe<Scalars['Int']>
	to?: Array<Stage>
	where?: InputMaybe<ProjectManyWhereInput>
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManySeosArgs = {
	to?: Array<Stage>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationPublishManySeosConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: InputMaybe<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	to?: Array<Stage>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationPublishManyTechnologiesArgs = {
	to?: Array<Stage>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationPublishManyTechnologiesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: InputMaybe<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	to?: Array<Stage>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationPublishProjectArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	to?: Array<Stage>
	where: ProjectWhereUniqueInput
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishSeoArgs = {
	to?: Array<Stage>
	where: SeoWhereUniqueInput
}

export type MutationPublishTechnologyArgs = {
	to?: Array<Stage>
	where: TechnologyWhereUniqueInput
}

export type MutationSchedulePublishArticleArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	to?: Array<Stage>
	where: ArticleWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	to?: Array<Stage>
	where: AssetWhereUniqueInput
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishProjectArgs = {
	locales?: InputMaybe<Array<Locale>>
	publishBase?: InputMaybe<Scalars['Boolean']>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	to?: Array<Stage>
	where: ProjectWhereUniqueInput
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishSeoArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	to?: Array<Stage>
	where: SeoWhereUniqueInput
}

export type MutationSchedulePublishTechnologyArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	to?: Array<Stage>
	where: TechnologyWhereUniqueInput
}

export type MutationScheduleUnpublishArticleArgs = {
	from?: Array<Stage>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	where: ArticleWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishProjectArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where: ProjectWhereUniqueInput
}

export type MutationScheduleUnpublishSeoArgs = {
	from?: Array<Stage>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	where: SeoWhereUniqueInput
}

export type MutationScheduleUnpublishTechnologyArgs = {
	from?: Array<Stage>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	releaseId?: InputMaybe<Scalars['String']>
	where: TechnologyWhereUniqueInput
}

export type MutationUnpublishArticleArgs = {
	from?: Array<Stage>
	where: ArticleWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where: AssetWhereUniqueInput
}

export type MutationUnpublishManyArticlesArgs = {
	from?: Array<Stage>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUnpublishManyArticlesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: Array<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	stage?: InputMaybe<Stage>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUnpublishManyAssetsArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: Array<Stage>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	stage?: InputMaybe<Stage>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyProjectsArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManyProjectsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: Array<Stage>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	stage?: InputMaybe<Stage>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManySeosArgs = {
	from?: Array<Stage>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationUnpublishManySeosConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: Array<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	stage?: InputMaybe<Stage>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationUnpublishManyTechnologiesArgs = {
	from?: Array<Stage>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUnpublishManyTechnologiesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	first?: InputMaybe<Scalars['Int']>
	from?: Array<Stage>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	stage?: InputMaybe<Stage>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUnpublishProjectArgs = {
	from?: Array<Stage>
	locales?: InputMaybe<Array<Locale>>
	unpublishBase?: InputMaybe<Scalars['Boolean']>
	where: ProjectWhereUniqueInput
}

export type MutationUnpublishSeoArgs = {
	from?: Array<Stage>
	where: SeoWhereUniqueInput
}

export type MutationUnpublishTechnologyArgs = {
	from?: Array<Stage>
	where: TechnologyWhereUniqueInput
}

export type MutationUpdateArticleArgs = {
	data: ArticleUpdateInput
	where: ArticleWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput
	where: AssetWhereUniqueInput
}

export type MutationUpdateManyArticlesArgs = {
	data: ArticleUpdateManyInput
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUpdateManyArticlesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	data: ArticleUpdateManyInput
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUpdateManyAssetsArgs = {
	data: AssetUpdateManyInput
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	data: AssetUpdateManyInput
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyProjectsArgs = {
	data: ProjectUpdateManyInput
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManyProjectsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	data: ProjectUpdateManyInput
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManySeosArgs = {
	data: SeoUpdateManyInput
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationUpdateManySeosConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	data: SeoUpdateManyInput
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<SeoManyWhereInput>
}

export type MutationUpdateManyTechnologiesArgs = {
	data: TechnologyUpdateManyInput
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUpdateManyTechnologiesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>
	before?: InputMaybe<Scalars['ID']>
	data: TechnologyUpdateManyInput
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUpdateProjectArgs = {
	data: ProjectUpdateInput
	where: ProjectWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput
	where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSeoArgs = {
	data: SeoUpdateInput
	where: SeoWhereUniqueInput
}

export type MutationUpdateTechnologyArgs = {
	data: TechnologyUpdateInput
	where: TechnologyWhereUniqueInput
}

export type MutationUpsertArticleArgs = {
	upsert: ArticleUpsertInput
	where: ArticleWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput
	where: AssetWhereUniqueInput
}

export type MutationUpsertProjectArgs = {
	upsert: ProjectUpsertInput
	where: ProjectWhereUniqueInput
}

export type MutationUpsertSeoArgs = {
	upsert: SeoUpsertInput
	where: SeoWhereUniqueInput
}

export type MutationUpsertTechnologyArgs = {
	upsert: TechnologyUpsertInput
	where: TechnologyWhereUniqueInput
}

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID']
	/** The Stage of an object */
	stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: 'PageInfo'
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']>
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']
	/** Number of items in the current page. */
	pageSize?: Maybe<Scalars['Int']>
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']>
}

export type Project = Node & {
	__typename?: 'Project'
	body: RichText
	city: Scalars['String']
	company: Scalars['String']
	country: Scalars['String']
	cover: Asset
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Get the document in other stages */
	documentInStages: Array<Project>
	/** List of Project versions */
	history: Array<Version>
	/** The unique identifier */
	id: Scalars['ID']
	industry: Scalars['String']
	/** System Locale field */
	locale: Locale
	/** Get the other localizations for this document */
	localizations: Array<Project>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	role: Scalars['String']
	scheduledIn: Array<ScheduledOperation>
	seo?: Maybe<Seo>
	slug: Scalars['String']
	/** System stage field */
	stage: Stage
	technologies: Array<Technology>
	title: Scalars['String']
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
	website: Scalars['String']
}

export type ProjectCoverArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ProjectCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

export type ProjectCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ProjectDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

export type ProjectHistoryArgs = {
	limit?: Scalars['Int']
	skip?: Scalars['Int']
	stageOverride?: InputMaybe<Stage>
}

export type ProjectLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']
	locales?: Array<Locale>
}

export type ProjectPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

export type ProjectPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ProjectScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ProjectSeoArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ProjectTechnologiesArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<TechnologyOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<TechnologyWhereInput>
}

export type ProjectUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation
}

export type ProjectUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ProjectConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: ProjectWhereUniqueInput
}

/** A connection to a list of items. */
export type ProjectConnection = {
	__typename?: 'ProjectConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<ProjectEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type ProjectCreateInput = {
	/** body input for default locale (en) */
	body: Scalars['RichTextAST']
	/** city input for default locale (en) */
	city: Scalars['String']
	company: Scalars['String']
	/** country input for default locale (en) */
	country: Scalars['String']
	cover: AssetCreateOneInlineInput
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** industry input for default locale (en) */
	industry: Scalars['String']
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<ProjectCreateLocalizationsInput>
	/** role input for default locale (en) */
	role: Scalars['String']
	seo?: InputMaybe<SeoCreateOneInlineInput>
	slug: Scalars['String']
	technologies?: InputMaybe<TechnologyCreateManyInlineInput>
	title: Scalars['String']
	updatedAt?: InputMaybe<Scalars['DateTime']>
	website: Scalars['String']
}

export type ProjectCreateLocalizationDataInput = {
	body: Scalars['RichTextAST']
	city: Scalars['String']
	country: Scalars['String']
	createdAt?: InputMaybe<Scalars['DateTime']>
	industry: Scalars['String']
	role: Scalars['String']
	updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProjectCreateLocalizationInput = {
	/** Localization input */
	data: ProjectCreateLocalizationDataInput
	locale: Locale
}

export type ProjectCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<ProjectCreateLocalizationInput>>
}

export type ProjectCreateManyInlineInput = {
	/** Connect multiple existing Project documents */
	connect?: InputMaybe<Array<ProjectWhereUniqueInput>>
	/** Create and connect multiple existing Project documents */
	create?: InputMaybe<Array<ProjectCreateInput>>
}

export type ProjectCreateOneInlineInput = {
	/** Connect one existing Project document */
	connect?: InputMaybe<ProjectWhereUniqueInput>
	/** Create and connect one Project document */
	create?: InputMaybe<ProjectCreateInput>
}

/** An edge in a connection. */
export type ProjectEdge = {
	__typename?: 'ProjectEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: Project
}

/** Identifies documents */
export type ProjectManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProjectWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProjectWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProjectWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	company?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	company_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	company_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	company_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	company_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	company_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	company_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	company_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	company_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	company_starts_with?: InputMaybe<Scalars['String']>
	cover?: InputMaybe<AssetWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	seo?: InputMaybe<SeoWhereInput>
	slug?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>
	technologies_every?: InputMaybe<TechnologyWhereInput>
	technologies_none?: InputMaybe<TechnologyWhereInput>
	technologies_some?: InputMaybe<TechnologyWhereInput>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
	website?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	website_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	website_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	website_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	website_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	website_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	website_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	website_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	website_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	website_starts_with?: InputMaybe<Scalars['String']>
}

export enum ProjectOrderByInput {
	CityAsc = 'city_ASC',
	CityDesc = 'city_DESC',
	CompanyAsc = 'company_ASC',
	CompanyDesc = 'company_DESC',
	CountryAsc = 'country_ASC',
	CountryDesc = 'country_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IndustryAsc = 'industry_ASC',
	IndustryDesc = 'industry_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	RoleAsc = 'role_ASC',
	RoleDesc = 'role_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WebsiteAsc = 'website_ASC',
	WebsiteDesc = 'website_DESC'
}

export type ProjectUpdateInput = {
	/** body input for default locale (en) */
	body?: InputMaybe<Scalars['RichTextAST']>
	/** city input for default locale (en) */
	city?: InputMaybe<Scalars['String']>
	company?: InputMaybe<Scalars['String']>
	/** country input for default locale (en) */
	country?: InputMaybe<Scalars['String']>
	cover?: InputMaybe<AssetUpdateOneInlineInput>
	/** industry input for default locale (en) */
	industry?: InputMaybe<Scalars['String']>
	/** Manage document localizations */
	localizations?: InputMaybe<ProjectUpdateLocalizationsInput>
	/** role input for default locale (en) */
	role?: InputMaybe<Scalars['String']>
	seo?: InputMaybe<SeoUpdateOneInlineInput>
	slug?: InputMaybe<Scalars['String']>
	technologies?: InputMaybe<TechnologyUpdateManyInlineInput>
	title?: InputMaybe<Scalars['String']>
	website?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateLocalizationDataInput = {
	body?: InputMaybe<Scalars['RichTextAST']>
	city?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	industry?: InputMaybe<Scalars['String']>
	role?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateLocalizationInput = {
	data: ProjectUpdateLocalizationDataInput
	locale: Locale
}

export type ProjectUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<ProjectCreateLocalizationInput>>
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>
	/** Localizations to update */
	update?: InputMaybe<Array<ProjectUpdateLocalizationInput>>
	upsert?: InputMaybe<Array<ProjectUpsertLocalizationInput>>
}

export type ProjectUpdateManyInlineInput = {
	/** Connect multiple existing Project documents */
	connect?: InputMaybe<Array<ProjectConnectInput>>
	/** Create and connect multiple Project documents */
	create?: InputMaybe<Array<ProjectCreateInput>>
	/** Delete multiple Project documents */
	delete?: InputMaybe<Array<ProjectWhereUniqueInput>>
	/** Disconnect multiple Project documents */
	disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing Project documents */
	set?: InputMaybe<Array<ProjectWhereUniqueInput>>
	/** Update multiple Project documents */
	update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple Project documents */
	upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>
}

export type ProjectUpdateManyInput = {
	/** body input for default locale (en) */
	body?: InputMaybe<Scalars['RichTextAST']>
	/** city input for default locale (en) */
	city?: InputMaybe<Scalars['String']>
	company?: InputMaybe<Scalars['String']>
	/** country input for default locale (en) */
	country?: InputMaybe<Scalars['String']>
	/** industry input for default locale (en) */
	industry?: InputMaybe<Scalars['String']>
	/** Optional updates to localizations */
	localizations?: InputMaybe<ProjectUpdateManyLocalizationsInput>
	/** role input for default locale (en) */
	role?: InputMaybe<Scalars['String']>
	title?: InputMaybe<Scalars['String']>
	website?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateManyLocalizationDataInput = {
	body?: InputMaybe<Scalars['RichTextAST']>
	city?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	industry?: InputMaybe<Scalars['String']>
	role?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateManyLocalizationInput = {
	data: ProjectUpdateManyLocalizationDataInput
	locale: Locale
}

export type ProjectUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<ProjectUpdateManyLocalizationInput>>
}

export type ProjectUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ProjectUpdateManyInput
	/** Document search */
	where: ProjectWhereInput
}

export type ProjectUpdateOneInlineInput = {
	/** Connect existing Project document */
	connect?: InputMaybe<ProjectWhereUniqueInput>
	/** Create and connect one Project document */
	create?: InputMaybe<ProjectCreateInput>
	/** Delete currently connected Project document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected Project document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single Project document */
	update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>
	/** Upsert single Project document */
	upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>
}

export type ProjectUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ProjectUpdateInput
	/** Unique document search */
	where: ProjectWhereUniqueInput
}

export type ProjectUpsertInput = {
	/** Create document if it didn't exist */
	create: ProjectCreateInput
	/** Update document if it exists */
	update: ProjectUpdateInput
}

export type ProjectUpsertLocalizationInput = {
	create: ProjectCreateLocalizationDataInput
	locale: Locale
	update: ProjectUpdateLocalizationDataInput
}

export type ProjectUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ProjectUpsertInput
	/** Unique document search */
	where: ProjectWhereUniqueInput
}

/** Identifies documents */
export type ProjectWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProjectWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProjectWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProjectWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	city?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	city_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	city_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	city_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	city_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	city_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	city_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	city_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	city_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	city_starts_with?: InputMaybe<Scalars['String']>
	company?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	company_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	company_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	company_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	company_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	company_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	company_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	company_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	company_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	company_starts_with?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	country_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	country_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	country_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	country_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	country_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	country_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	country_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	country_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	country_starts_with?: InputMaybe<Scalars['String']>
	cover?: InputMaybe<AssetWhereInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	industry?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	industry_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	industry_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	industry_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	industry_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	industry_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	industry_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	industry_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	industry_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	industry_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	role?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	role_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	role_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	role_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	role_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	role_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	role_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	role_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	role_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	role_starts_with?: InputMaybe<Scalars['String']>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	seo?: InputMaybe<SeoWhereInput>
	slug?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>
	technologies_every?: InputMaybe<TechnologyWhereInput>
	technologies_none?: InputMaybe<TechnologyWhereInput>
	technologies_some?: InputMaybe<TechnologyWhereInput>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
	website?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	website_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	website_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	website_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	website_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	website_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	website_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	website_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	website_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	website_starts_with?: InputMaybe<Scalars['String']>
}

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
	slug?: InputMaybe<Scalars['String']>
}

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale
	/** Stages to publish selected locales to */
	stages: Array<Stage>
}

export type Query = {
	__typename?: 'Query'
	/** Retrieve a single article */
	article?: Maybe<Article>
	/** Retrieve document version */
	articleVersion?: Maybe<DocumentVersion>
	/** Retrieve multiple articles */
	articles: Array<Article>
	/** Retrieve multiple articles using the Relay connection interface */
	articlesConnection: ArticleConnection
	/** Retrieve a single asset */
	asset?: Maybe<Asset>
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>
	/** Retrieve multiple assets */
	assets: Array<Asset>
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection
	/** Fetches an object given its ID */
	node?: Maybe<Node>
	/** Retrieve a single project */
	project?: Maybe<Project>
	/** Retrieve document version */
	projectVersion?: Maybe<DocumentVersion>
	/** Retrieve multiple projects */
	projects: Array<Project>
	/** Retrieve multiple projects using the Relay connection interface */
	projectsConnection: ProjectConnection
	/** Retrieve a single scheduledOperation */
	scheduledOperation?: Maybe<ScheduledOperation>
	/** Retrieve multiple scheduledOperations */
	scheduledOperations: Array<ScheduledOperation>
	/** Retrieve multiple scheduledOperations using the Relay connection interface */
	scheduledOperationsConnection: ScheduledOperationConnection
	/** Retrieve a single scheduledRelease */
	scheduledRelease?: Maybe<ScheduledRelease>
	/** Retrieve multiple scheduledReleases */
	scheduledReleases: Array<ScheduledRelease>
	/** Retrieve multiple scheduledReleases using the Relay connection interface */
	scheduledReleasesConnection: ScheduledReleaseConnection
	/** Retrieve a single seo */
	seo?: Maybe<Seo>
	/** Retrieve document version */
	seoVersion?: Maybe<DocumentVersion>
	/** Retrieve multiple seos */
	seos: Array<Seo>
	/** Retrieve multiple seos using the Relay connection interface */
	seosConnection: SeoConnection
	/** Retrieve multiple technologies */
	technologies: Array<Technology>
	/** Retrieve multiple technologies using the Relay connection interface */
	technologiesConnection: TechnologyConnection
	/** Retrieve a single technology */
	technology?: Maybe<Technology>
	/** Retrieve document version */
	technologyVersion?: Maybe<DocumentVersion>
	/** Retrieve a single user */
	user?: Maybe<User>
	/** Retrieve multiple users */
	users: Array<User>
	/** Retrieve multiple users using the Relay connection interface */
	usersConnection: UserConnection
}

export type QueryArticleArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: ArticleWhereUniqueInput
}

export type QueryArticleVersionArgs = {
	where: VersionWhereInput
}

export type QueryArticlesArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ArticleOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ArticleWhereInput>
}

export type QueryArticlesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ArticleOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ArticleWhereInput>
}

export type QueryAssetArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
	where: VersionWhereInput
}

export type QueryAssetsArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<AssetOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<AssetOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<AssetWhereInput>
}

export type QueryNodeArgs = {
	id: Scalars['ID']
	locales?: Array<Locale>
	stage?: Stage
}

export type QueryProjectArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: ProjectWhereUniqueInput
}

export type QueryProjectVersionArgs = {
	where: VersionWhereInput
}

export type QueryProjectsArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ProjectOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ProjectWhereInput>
}

export type QueryProjectsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ProjectOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ProjectWhereInput>
}

export type QueryScheduledOperationArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySeoArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: SeoWhereUniqueInput
}

export type QuerySeoVersionArgs = {
	where: VersionWhereInput
}

export type QuerySeosArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<SeoOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<SeoWhereInput>
}

export type QuerySeosConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<SeoOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<SeoWhereInput>
}

export type QueryTechnologiesArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<TechnologyOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<TechnologyWhereInput>
}

export type QueryTechnologiesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<TechnologyOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<TechnologyWhereInput>
}

export type QueryTechnologyArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: TechnologyWhereUniqueInput
}

export type QueryTechnologyVersionArgs = {
	where: VersionWhereInput
}

export type QueryUserArgs = {
	locales?: Array<Locale>
	stage?: Stage
	where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<UserOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: Array<Locale>
	orderBy?: InputMaybe<UserOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	stage?: Stage
	where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
	__typename?: 'RGBA'
	a: Scalars['RGBATransparency']
	b: Scalars['RGBAHue']
	g: Scalars['RGBAHue']
	r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars['RGBATransparency']
	b: Scalars['RGBAHue']
	g: Scalars['RGBAHue']
	r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
	__typename?: 'RichText'
	/** Returns HTMl representation */
	html: Scalars['String']
	/** Returns Markdown representation */
	markdown: Scalars['String']
	/** Returns AST representation */
	raw: Scalars['RichTextAST']
	/** Returns plain-text contents of RichText */
	text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
	__typename?: 'ScheduledOperation'
	affectedDocuments: Array<ScheduledOperationAffectedDocument>
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Operation description */
	description?: Maybe<Scalars['String']>
	/** Get the document in other stages */
	documentInStages: Array<ScheduledOperation>
	/** Operation error message */
	errorMessage?: Maybe<Scalars['String']>
	/** The unique identifier */
	id: Scalars['ID']
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	/** Raw operation payload including all details, this field is subject to change */
	rawPayload: Scalars['Json']
	/** The release this operation is scheduled for */
	release?: Maybe<ScheduledRelease>
	/** System stage field */
	stage: Stage
	/** operation Status */
	status: ScheduledOperationStatus
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
	| Article
	| Asset
	| Project
	| Seo
	| Technology

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
	__typename?: 'ScheduledOperationConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<ScheduledOperationEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
	__typename?: 'ScheduledOperationEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	release?: InputMaybe<ScheduledReleaseWhereInput>
	status?: InputMaybe<ScheduledOperationStatus>
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledOperationStatus>>
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	release?: InputMaybe<ScheduledReleaseWhereInput>
	status?: InputMaybe<ScheduledOperationStatus>
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledOperationStatus>>
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
	__typename?: 'ScheduledRelease'
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Release description */
	description?: Maybe<Scalars['String']>
	/** Get the document in other stages */
	documentInStages: Array<ScheduledRelease>
	/** Release error message */
	errorMessage?: Maybe<Scalars['String']>
	/** The unique identifier */
	id: Scalars['ID']
	/** Whether scheduled release should be run */
	isActive: Scalars['Boolean']
	/** Whether scheduled release is implicit */
	isImplicit: Scalars['Boolean']
	/** Operations to run with this release */
	operations: Array<ScheduledOperation>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	/** Release date and time */
	releaseAt?: Maybe<Scalars['DateTime']>
	/** System stage field */
	stage: Stage
	/** Release Status */
	status: ScheduledReleaseStatus
	/** Release Title */
	title?: Maybe<Scalars['String']>
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
	__typename?: 'ScheduledReleaseConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<ScheduledReleaseEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>
	description?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	isActive?: InputMaybe<Scalars['Boolean']>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	title?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
	__typename?: 'ScheduledReleaseEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	isActive?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>
	isImplicit?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']>
	operations_every?: InputMaybe<ScheduledOperationWhereInput>
	operations_none?: InputMaybe<ScheduledOperationWhereInput>
	operations_some?: InputMaybe<ScheduledOperationWhereInput>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	status?: InputMaybe<ScheduledReleaseStatus>
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledReleaseStatus>>
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	IsImplicitAsc = 'isImplicit_ASC',
	IsImplicitDesc = 'isImplicit_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	ReleaseAtAsc = 'releaseAt_ASC',
	ReleaseAtDesc = 'releaseAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	isActive?: InputMaybe<Scalars['Boolean']>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	isActive?: InputMaybe<Scalars['Boolean']>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput
	/** Document search */
	where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	errorMessage?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	isActive?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>
	isImplicit?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']>
	operations_every?: InputMaybe<ScheduledOperationWhereInput>
	operations_none?: InputMaybe<ScheduledOperationWhereInput>
	operations_some?: InputMaybe<ScheduledOperationWhereInput>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	releaseAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	status?: InputMaybe<ScheduledReleaseStatus>
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledReleaseStatus>>
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

export type Seo = Node & {
	__typename?: 'Seo'
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Create a custom meta description */
	description?: Maybe<Scalars['String']>
	/** Get the document in other stages */
	documentInStages: Array<Seo>
	/** List of Seo versions */
	history: Array<Version>
	/** The unique identifier */
	id: Scalars['ID']
	/** Select a custom OG image (the most common size is usually 1280x720) */
	image?: Maybe<Asset>
	/** Select your focus keywords */
	keywords: Array<Scalars['String']>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	scheduledIn: Array<ScheduledOperation>
	/** System stage field */
	stage: Stage
	/** Create a custom meta title */
	title?: Maybe<Scalars['String']>
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
}

export type SeoCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type SeoDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

export type SeoHistoryArgs = {
	limit?: Scalars['Int']
	skip?: Scalars['Int']
	stageOverride?: InputMaybe<Stage>
}

export type SeoImageArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type SeoPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type SeoScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

export type SeoUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type SeoConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: SeoWhereUniqueInput
}

/** A connection to a list of items. */
export type SeoConnection = {
	__typename?: 'SeoConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<SeoEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type SeoCreateInput = {
	cl066lmuh2alp01xoed5fd08o?: InputMaybe<ProjectCreateManyInlineInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	description?: InputMaybe<Scalars['String']>
	image?: InputMaybe<AssetCreateOneInlineInput>
	keywords?: InputMaybe<Array<Scalars['String']>>
	title?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type SeoCreateManyInlineInput = {
	/** Connect multiple existing Seo documents */
	connect?: InputMaybe<Array<SeoWhereUniqueInput>>
	/** Create and connect multiple existing Seo documents */
	create?: InputMaybe<Array<SeoCreateInput>>
}

export type SeoCreateOneInlineInput = {
	/** Connect one existing Seo document */
	connect?: InputMaybe<SeoWhereUniqueInput>
	/** Create and connect one Seo document */
	create?: InputMaybe<SeoCreateInput>
}

/** An edge in a connection. */
export type SeoEdge = {
	__typename?: 'SeoEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: Seo
}

/** Identifies documents */
export type SeoManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<SeoWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<SeoWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<SeoWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	image?: InputMaybe<AssetWhereInput>
	/** Matches if the field array contains *all* items provided to the filter and order does match */
	keywords?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array contains *all* items provided to the filter */
	keywords_contains_all?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array does not contain any of the items provided to the filter */
	keywords_contains_none?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array contains at least one item provided to the filter */
	keywords_contains_some?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
	keywords_not?: InputMaybe<Array<Scalars['String']>>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

export enum SeoOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	KeywordsAsc = 'keywords_ASC',
	KeywordsDesc = 'keywords_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type SeoUpdateInput = {
	cl066lmuh2alp01xoed5fd08o?: InputMaybe<ProjectUpdateManyInlineInput>
	description?: InputMaybe<Scalars['String']>
	image?: InputMaybe<AssetUpdateOneInlineInput>
	keywords?: InputMaybe<Array<Scalars['String']>>
	title?: InputMaybe<Scalars['String']>
}

export type SeoUpdateManyInlineInput = {
	/** Connect multiple existing Seo documents */
	connect?: InputMaybe<Array<SeoConnectInput>>
	/** Create and connect multiple Seo documents */
	create?: InputMaybe<Array<SeoCreateInput>>
	/** Delete multiple Seo documents */
	delete?: InputMaybe<Array<SeoWhereUniqueInput>>
	/** Disconnect multiple Seo documents */
	disconnect?: InputMaybe<Array<SeoWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing Seo documents */
	set?: InputMaybe<Array<SeoWhereUniqueInput>>
	/** Update multiple Seo documents */
	update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple Seo documents */
	upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueInput>>
}

export type SeoUpdateManyInput = {
	description?: InputMaybe<Scalars['String']>
	keywords?: InputMaybe<Array<Scalars['String']>>
	title?: InputMaybe<Scalars['String']>
}

export type SeoUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: SeoUpdateManyInput
	/** Document search */
	where: SeoWhereInput
}

export type SeoUpdateOneInlineInput = {
	/** Connect existing Seo document */
	connect?: InputMaybe<SeoWhereUniqueInput>
	/** Create and connect one Seo document */
	create?: InputMaybe<SeoCreateInput>
	/** Delete currently connected Seo document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected Seo document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single Seo document */
	update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>
	/** Upsert single Seo document */
	upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>
}

export type SeoUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: SeoUpdateInput
	/** Unique document search */
	where: SeoWhereUniqueInput
}

export type SeoUpsertInput = {
	/** Create document if it didn't exist */
	create: SeoCreateInput
	/** Update document if it exists */
	update: SeoUpdateInput
}

export type SeoUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: SeoUpsertInput
	/** Unique document search */
	where: SeoWhereUniqueInput
}

/** Identifies documents */
export type SeoWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<SeoWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<SeoWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<SeoWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	description?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	image?: InputMaybe<AssetWhereInput>
	/** Matches if the field array contains *all* items provided to the filter and order does match */
	keywords?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array contains *all* items provided to the filter */
	keywords_contains_all?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array does not contain any of the items provided to the filter */
	keywords_contains_none?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array contains at least one item provided to the filter */
	keywords_contains_some?: InputMaybe<Array<Scalars['String']>>
	/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
	keywords_not?: InputMaybe<Array<Scalars['String']>>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	title?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
}

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
	/** The Draft is the default stage for all your content. */
	Draft = 'DRAFT',
	/** The Published stage is where you can publish your content to. */
	Published = 'PUBLISHED'
}

/** All the subject???s that I talk about */
export enum Subjects {
	Html = 'HTML',
	HomeOffice = 'Home_Office',
	Javascript = 'Javascript',
	Programming = 'Programming',
	React = 'React',
	ReactNative = 'ReactNative',
	Typescript = 'Typescript'
}

export enum SystemDateTimeFieldVariation {
	Base = 'BASE',
	Combined = 'COMBINED',
	Localization = 'LOCALIZATION'
}

export type Technology = Node & {
	__typename?: 'Technology'
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** User that created this document */
	createdBy?: Maybe<User>
	/** Get the document in other stages */
	documentInStages: Array<Technology>
	/** List of Technology versions */
	history: Array<Version>
	icon?: Maybe<Asset>
	/** The unique identifier */
	id: Scalars['ID']
	name?: Maybe<Scalars['String']>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** User that last published this document */
	publishedBy?: Maybe<User>
	scheduledIn: Array<ScheduledOperation>
	/** System stage field */
	stage: Stage
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
	/** User that last updated this document */
	updatedBy?: Maybe<User>
	website?: Maybe<Scalars['String']>
}

export type TechnologyCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type TechnologyDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

export type TechnologyHistoryArgs = {
	limit?: Scalars['Int']
	skip?: Scalars['Int']
	stageOverride?: InputMaybe<Stage>
}

export type TechnologyIconArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type TechnologyPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type TechnologyScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>
	before?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	last?: InputMaybe<Scalars['Int']>
	locales?: InputMaybe<Array<Locale>>
	skip?: InputMaybe<Scalars['Int']>
	where?: InputMaybe<ScheduledOperationWhereInput>
}

export type TechnologyUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>
}

export type TechnologyConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: TechnologyWhereUniqueInput
}

/** A connection to a list of items. */
export type TechnologyConnection = {
	__typename?: 'TechnologyConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<TechnologyEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type TechnologyCreateInput = {
	cl072p48g0zht01z3ex02h8yk?: InputMaybe<ProjectCreateManyInlineInput>
	createdAt?: InputMaybe<Scalars['DateTime']>
	icon?: InputMaybe<AssetCreateOneInlineInput>
	name?: InputMaybe<Scalars['String']>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	website?: InputMaybe<Scalars['String']>
}

export type TechnologyCreateManyInlineInput = {
	/** Connect multiple existing Technology documents */
	connect?: InputMaybe<Array<TechnologyWhereUniqueInput>>
	/** Create and connect multiple existing Technology documents */
	create?: InputMaybe<Array<TechnologyCreateInput>>
}

export type TechnologyCreateOneInlineInput = {
	/** Connect one existing Technology document */
	connect?: InputMaybe<TechnologyWhereUniqueInput>
	/** Create and connect one Technology document */
	create?: InputMaybe<TechnologyCreateInput>
}

/** An edge in a connection. */
export type TechnologyEdge = {
	__typename?: 'TechnologyEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: Technology
}

/** Identifies documents */
export type TechnologyManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TechnologyWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TechnologyWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TechnologyWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	icon?: InputMaybe<AssetWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	name?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
	website?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	website_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	website_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	website_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	website_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	website_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	website_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	website_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	website_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	website_starts_with?: InputMaybe<Scalars['String']>
}

export enum TechnologyOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WebsiteAsc = 'website_ASC',
	WebsiteDesc = 'website_DESC'
}

export type TechnologyUpdateInput = {
	cl072p48g0zht01z3ex02h8yk?: InputMaybe<ProjectUpdateManyInlineInput>
	icon?: InputMaybe<AssetUpdateOneInlineInput>
	name?: InputMaybe<Scalars['String']>
	website?: InputMaybe<Scalars['String']>
}

export type TechnologyUpdateManyInlineInput = {
	/** Connect multiple existing Technology documents */
	connect?: InputMaybe<Array<TechnologyConnectInput>>
	/** Create and connect multiple Technology documents */
	create?: InputMaybe<Array<TechnologyCreateInput>>
	/** Delete multiple Technology documents */
	delete?: InputMaybe<Array<TechnologyWhereUniqueInput>>
	/** Disconnect multiple Technology documents */
	disconnect?: InputMaybe<Array<TechnologyWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing Technology documents */
	set?: InputMaybe<Array<TechnologyWhereUniqueInput>>
	/** Update multiple Technology documents */
	update?: InputMaybe<Array<TechnologyUpdateWithNestedWhereUniqueInput>>
	/** Upsert multiple Technology documents */
	upsert?: InputMaybe<Array<TechnologyUpsertWithNestedWhereUniqueInput>>
}

export type TechnologyUpdateManyInput = {
	name?: InputMaybe<Scalars['String']>
	website?: InputMaybe<Scalars['String']>
}

export type TechnologyUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: TechnologyUpdateManyInput
	/** Document search */
	where: TechnologyWhereInput
}

export type TechnologyUpdateOneInlineInput = {
	/** Connect existing Technology document */
	connect?: InputMaybe<TechnologyWhereUniqueInput>
	/** Create and connect one Technology document */
	create?: InputMaybe<TechnologyCreateInput>
	/** Delete currently connected Technology document */
	delete?: InputMaybe<Scalars['Boolean']>
	/** Disconnect currently connected Technology document */
	disconnect?: InputMaybe<Scalars['Boolean']>
	/** Update single Technology document */
	update?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>
	/** Upsert single Technology document */
	upsert?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>
}

export type TechnologyUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: TechnologyUpdateInput
	/** Unique document search */
	where: TechnologyWhereUniqueInput
}

export type TechnologyUpsertInput = {
	/** Create document if it didn't exist */
	create: TechnologyCreateInput
	/** Update document if it exists */
	update: TechnologyUpdateInput
}

export type TechnologyUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: TechnologyUpsertInput
	/** Unique document search */
	where: TechnologyWhereUniqueInput
}

/** Identifies documents */
export type TechnologyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TechnologyWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TechnologyWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TechnologyWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	createdBy?: InputMaybe<UserWhereInput>
	icon?: InputMaybe<AssetWhereInput>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	name?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	publishedBy?: InputMaybe<UserWhereInput>
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedBy?: InputMaybe<UserWhereInput>
	website?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	website_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	website_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	website_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	website_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	website_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	website_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	website_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	website_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	website_starts_with?: InputMaybe<Scalars['String']>
}

/** References Technology record uniquely */
export type TechnologyWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>
}

/** User system model */
export type User = Node & {
	__typename?: 'User'
	/** The time the document was created */
	createdAt: Scalars['DateTime']
	/** Get the document in other stages */
	documentInStages: Array<User>
	/** The unique identifier */
	id: Scalars['ID']
	/** Flag to determine if user is active or not */
	isActive: Scalars['Boolean']
	/** User Kind. Can be either MEMBER, PAT or PUBLIC */
	kind: UserKind
	/** The username */
	name: Scalars['String']
	/** Profile Picture url */
	picture?: Maybe<Scalars['String']>
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>
	/** System stage field */
	stage: Stage
	/** The time the document was updated */
	updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']
	inheritLocale?: Scalars['Boolean']
	stages?: Array<Stage>
}

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>
	/** Document to connect */
	where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
	__typename?: 'UserConnection'
	aggregate: Aggregate
	/** A list of edges. */
	edges: Array<UserEdge>
	/** Information to aid in pagination. */
	pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
	__typename?: 'UserEdge'
	/** A cursor for use in pagination. */
	cursor: Scalars['String']
	/** The item at the end of the edge. */
	node: User
}

/** System User Kind */
export enum UserKind {
	Member = 'MEMBER',
	Pat = 'PAT',
	Public = 'PUBLIC',
	Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	isActive?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>
	kind?: InputMaybe<UserKind>
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<UserKind>>
	/** All values that are not equal to given value. */
	kind_not?: InputMaybe<UserKind>
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<UserKind>>
	name?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>
	picture?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	picture_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
}

export enum UserOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	KindAsc = 'kind_ASC',
	KindDesc = 'kind_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PictureAsc = 'picture_ASC',
	PictureDesc = 'picture_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>
	createdAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	id?: InputMaybe<Scalars['ID']>
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>
	isActive?: InputMaybe<Scalars['Boolean']>
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>
	kind?: InputMaybe<UserKind>
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<UserKind>>
	/** All values that are not equal to given value. */
	kind_not?: InputMaybe<UserKind>
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<UserKind>>
	name?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>
	picture?: InputMaybe<Scalars['String']>
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']>
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<Scalars['String']>>
	/** All values that are not equal to given value. */
	picture_not?: InputMaybe<Scalars['String']>
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']>
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']>
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<Scalars['String']>>
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']>
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']>
	publishedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
	updatedAt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>
}

export type Version = {
	__typename?: 'Version'
	createdAt: Scalars['DateTime']
	id: Scalars['ID']
	revision: Scalars['Int']
	stage: Stage
}

export type VersionWhereInput = {
	id: Scalars['ID']
	revision: Scalars['Int']
	stage: Stage
}

export enum _FilterKind {
	And = 'AND',
	Not = 'NOT',
	Or = 'OR',
	Contains = 'contains',
	ContainsAll = 'contains_all',
	ContainsNone = 'contains_none',
	ContainsSome = 'contains_some',
	EndsWith = 'ends_with',
	Eq = 'eq',
	EqNot = 'eq_not',
	Gt = 'gt',
	Gte = 'gte',
	In = 'in',
	Lt = 'lt',
	Lte = 'lte',
	NotContains = 'not_contains',
	NotEndsWith = 'not_ends_with',
	NotIn = 'not_in',
	NotStartsWith = 'not_starts_with',
	RelationalEvery = 'relational_every',
	RelationalNone = 'relational_none',
	RelationalSingle = 'relational_single',
	RelationalSome = 'relational_some',
	Search = 'search',
	StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
	Enum = 'enum',
	Relation = 'relation',
	RichText = 'richText',
	RichTextWithEmbeds = 'richTextWithEmbeds',
	Scalar = 'scalar',
	Union = 'union',
	Virtual = 'virtual'
}

export enum _MutationKind {
	Create = 'create',
	Delete = 'delete',
	DeleteMany = 'deleteMany',
	Publish = 'publish',
	PublishMany = 'publishMany',
	SchedulePublish = 'schedulePublish',
	ScheduleUnpublish = 'scheduleUnpublish',
	Unpublish = 'unpublish',
	UnpublishMany = 'unpublishMany',
	Update = 'update',
	UpdateMany = 'updateMany',
	Upsert = 'upsert'
}

export enum _OrderDirection {
	Asc = 'asc',
	Desc = 'desc'
}

export enum _RelationInputCardinality {
	Many = 'many',
	One = 'one'
}

export enum _RelationInputKind {
	Create = 'create',
	Update = 'update'
}

export enum _RelationKind {
	Regular = 'regular',
	Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
	Base = 'base',
	Combined = 'combined',
	Localization = 'localization'
}

export type ProjectsQueryVariables = Exact<{
	locale: Locale
}>

export type ProjectsQuery = {
	__typename?: 'Query'
	projects: Array<{
		__typename?: 'Project'
		id: string
		city: string
		company: string
		country: string
		slug: string
		title: string
		role: string
		cover: { __typename?: 'Asset'; id: string; url: string }
		body: { __typename?: 'RichText'; text: string }
	}>
}

export type ProjectQueryVariables = Exact<{
	locale: Locale
	slug: Scalars['String']
}>

export type ProjectQuery = {
	__typename?: 'Query'
	projects: Array<{
		__typename?: 'Project'
		id: string
		city: string
		company: string
		country: string
		industry: string
		slug: string
		title: string
		website: string
		role: string
		locale: Locale
		body: { __typename?: 'RichText'; markdown: string }
		cover: { __typename?: 'Asset'; id: string; url: string }
		seo?: {
			__typename?: 'Seo'
			description?: string | null
			keywords: Array<string>
			title?: string | null
		} | null
		technologies: Array<{
			__typename?: 'Technology'
			name?: string | null
			website?: string | null
			icon?: { __typename?: 'Asset'; url: string } | null
		}>
	}>
}

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>

export type ArticlesQuery = {
	__typename?: 'Query'
	articles: Array<{
		__typename?: 'Article'
		slug: string
		subject: Subjects
		title: string
		language: Language
		description: string
		body: { __typename?: 'RichText'; markdown: string }
		cover: { __typename?: 'Asset'; id: string; url: string }
	}>
}

export type ArticleQueryVariables = Exact<{
	slug: Scalars['String']
}>

export type ArticleQuery = {
	__typename?: 'Query'
	article?: {
		__typename?: 'Article'
		description: string
		language: Language
		slug: string
		subject: Subjects
		title: string
		cover: { __typename?: 'Asset'; id: string; url: string }
	} | null
}

export const ProjectsDocument = `
    query Projects($locale: Locale!) {
  projects(locales: [$locale]) {
    id
    city
    company
    country
    slug
    title
    role
    cover {
      id
      url(transformation: {document: {output: {format: webp}}})
    }
    body {
      text
    }
  }
}
    `
export const useProjectsQuery = <TData = ProjectsQuery, TError = unknown>(
	variables: ProjectsQueryVariables,
	options?: UseQueryOptions<ProjectsQuery, TError, TData>
) =>
	useQuery<ProjectsQuery, TError, TData>(
		['Projects', variables],
		fetcher<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, variables),
		options
	)
useProjectsQuery.fetcher = (variables: ProjectsQueryVariables) =>
	fetcher<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, variables)
export const ProjectDocument = `
    query Project($locale: Locale!, $slug: String!) {
  projects(locales: [$locale], where: {slug: $slug}) {
    id
    city
    company
    country
    industry
    slug
    title
    website
    role
    locale
    body {
      markdown
    }
    cover {
      id
      url(transformation: {document: {output: {format: webp}}})
    }
    seo {
      description
      keywords
      title
    }
    technologies {
      name
      website
      icon {
        url
      }
    }
  }
}
    `
export const useProjectQuery = <TData = ProjectQuery, TError = unknown>(
	variables: ProjectQueryVariables,
	options?: UseQueryOptions<ProjectQuery, TError, TData>
) =>
	useQuery<ProjectQuery, TError, TData>(
		['Project', variables],
		fetcher<ProjectQuery, ProjectQueryVariables>(ProjectDocument, variables),
		options
	)
useProjectQuery.fetcher = (variables: ProjectQueryVariables) =>
	fetcher<ProjectQuery, ProjectQueryVariables>(ProjectDocument, variables)
export const ArticlesDocument = `
    query Articles {
  articles {
    body {
      markdown
    }
    cover {
      id
      url(transformation: {document: {output: {format: webp}}})
    }
    slug
    subject
    title
    language
    description
  }
}
    `
export const useArticlesQuery = <TData = ArticlesQuery, TError = unknown>(
	variables?: ArticlesQueryVariables,
	options?: UseQueryOptions<ArticlesQuery, TError, TData>
) =>
	useQuery<ArticlesQuery, TError, TData>(
		variables === undefined ? ['Articles'] : ['Articles', variables],
		fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables),
		options
	)
useArticlesQuery.fetcher = (variables?: ArticlesQueryVariables) =>
	fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables)
export const ArticleDocument = `
    query Article($slug: String!) {
  article(where: {slug: $slug}) {
    cover {
      id
      url(transformation: {document: {output: {format: webp}}})
    }
    description
    language
    slug
    subject
    title
  }
}
    `
export const useArticleQuery = <TData = ArticleQuery, TError = unknown>(
	variables: ArticleQueryVariables,
	options?: UseQueryOptions<ArticleQuery, TError, TData>
) =>
	useQuery<ArticleQuery, TError, TData>(
		['Article', variables],
		fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables),
		options
	)
useArticleQuery.fetcher = (variables: ArticleQueryVariables) =>
	fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables)
