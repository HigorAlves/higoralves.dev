import Auth0 from '~/assets/svgs/techs/auth0.svg'
import AwsServices from '~/assets/svgs/techs/aws-services.svg'
import AWS from '~/assets/svgs/techs/aws.svg'
import AwsEc2 from '~/assets/svgs/techs/awsec2.svg'
import CircleCi from '~/assets/svgs/techs/circleci.svg'
import Css from '~/assets/svgs/techs/css.svg'
import Cypress from '~/assets/svgs/techs/cypress.svg'
import Docker from '~/assets/svgs/techs/docker.svg'
import Elasticsearch from '~/assets/svgs/techs/elasticsearch.svg'
import Electron from '~/assets/svgs/techs/electron.svg'
import ESLint from '~/assets/svgs/techs/eslint.svg'
import Figma from '~/assets/svgs/techs/figma.svg'
import Firebase from '~/assets/svgs/techs/firebase.svg'
import Flutter from '~/assets/svgs/techs/flutter.svg'
import Git from '~/assets/svgs/techs/git.svg'
import Github from '~/assets/svgs/techs/github.svg'
import Githubactions from '~/assets/svgs/techs/githubactions.svg'
import Golang from '~/assets/svgs/techs/golang.svg'
import GoogleAnalytics from '~/assets/svgs/techs/google-analytics.svg'
import GoogleCloud from '~/assets/svgs/techs/google-cloud.svg'
import Graphql from '~/assets/svgs/techs/graphql.svg'
import Html from '~/assets/svgs/techs/html.svg'
import JamStack from '~/assets/svgs/techs/jamstack.svg'
import Javascript from '~/assets/svgs/techs/javascript.svg'
import Jest from '~/assets/svgs/techs/jest.svg'
import Jira from '~/assets/svgs/techs/jira.svg'
import K8s from '~/assets/svgs/techs/k8s.svg'
import Mocha from '~/assets/svgs/techs/mocha.svg'
import MongoDb from '~/assets/svgs/techs/mongo.svg'
import Mui from '~/assets/svgs/techs/mui.svg'
import Mysql from '~/assets/svgs/techs/mysql.svg'
import NestJs from '~/assets/svgs/techs/nestjs.svg'
import Netlify from '~/assets/svgs/techs/netlify.svg'
import Nextjs from '~/assets/svgs/techs/nextjs.svg'
import Nodejs from '~/assets/svgs/techs/nodejs.svg'
import Npm from '~/assets/svgs/techs/npm.svg'
import Postgre from '~/assets/svgs/techs/postgress.svg'
import Postman from '~/assets/svgs/techs/postman.svg'
import Prettier from '~/assets/svgs/techs/prettier.svg'
import Pwa from '~/assets/svgs/techs/pwa.svg'
import Python from '~/assets/svgs/techs/python.svg'
import ReactLogo from '~/assets/svgs/techs/react.svg'
import ReactQuery from '~/assets/svgs/techs/reactquery.svg'
import ReactRouter from '~/assets/svgs/techs/reactrouter.svg'
import Reacttestlibrary from '~/assets/svgs/techs/reacttestlibrary.png'
import Redis from '~/assets/svgs/techs/redis.svg'
import ReduxSaga from '~/assets/svgs/techs/redux-saga.svg'
import Redux from '~/assets/svgs/techs/redux.svg'
import Sass from '~/assets/svgs/techs/sass.svg'
import Serverless from '~/assets/svgs/techs/serverless.svg'
import Storybook from '~/assets/svgs/techs/storybook.svg'
import Svelte from '~/assets/svgs/techs/svelte.png'
import Swift from '~/assets/svgs/techs/swift.svg'
import Tailwind from '~/assets/svgs/techs/tailwind.svg'
import Trpc from '~/assets/svgs/techs/trpc.svg'
import Typescript from '~/assets/svgs/techs/typescript.svg'
import Vercel from '~/assets/svgs/techs/vercel.svg'
import Vite from '~/assets/svgs/techs/vite.svg'
import Vue from '~/assets/svgs/techs/vue.svg'
import Webassembly from '~/assets/svgs/techs/webassembly.svg'
import Webpack from '~/assets/svgs/techs/webpack.svg'
import { Skill } from '~/types/projects'

export const TECH_ICONS: Record<string, Skill> = {
	auth0: {
		id: 'auth0',
		name: 'Auth 0',
		website: 'https://auth0.com/',
		worksWithSince: new Date(2019, 0, 1),
		logo: Auth0
	},
	aws: {
		id: 'aws',
		name: 'AWS',
		website: 'https://aws.amazon.com/',
		worksWithSince: new Date(2019, 0, 1),
		logo: AWS
	},
	awsservices: {
		id: 'awsservices',
		name: 'Amazon Web Services',
		website: 'https://aws.amazon.com/',
		worksWithSince: new Date(2019, 0, 1),
		logo: AwsServices
	},
	awsec2: {
		id: 'awsec2',
		name: 'Amazon EC2',
		website: 'https://aws.amazon.com/ec2/',
		worksWithSince: new Date(2019, 0, 1),
		logo: AwsEc2
	},
	css: {
		id: 'css',
		name: 'CSS',
		website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		worksWithSince: new Date(2014, 0, 1),
		logo: Css
	},
	docker: {
		id: 'docker',
		name: 'Docker',
		website: 'https://www.docker.com/',
		worksWithSince: new Date(2017, 0, 1),
		logo: Docker
	},
	electron: {
		id: 'electron',
		name: 'Electron',
		website: 'https://www.electronjs.org/',
		worksWithSince: new Date(2016, 0, 1),
		logo: Electron
	},
	eslint: {
		id: 'eslint',
		name: 'Eslint',
		website: 'https://eslint.org/',
		worksWithSince: new Date(2016, 0, 1),
		logo: ESLint
	},
	figma: {
		id: 'figma',
		name: 'Figma',
		website: 'https://www.figma.com/',
		worksWithSince: new Date(2019, 0, 1),
		logo: Figma
	},
	firebase: {
		id: 'firebase',
		name: 'Firebase',
		website: 'https://firebase.google.com/',
		worksWithSince: new Date(2016, 0, 1),
		logo: Firebase
	},
	flutter: {
		id: 'flutter',
		name: 'Flutter',
		website: 'https://flutter.dev/',
		worksWithSince: new Date(2020, 0, 1),
		logo: Flutter
	},
	git: {
		id: 'git',
		name: 'Git',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Git
	},
	github: {
		id: 'github',
		name: 'GitHub',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Github
	},
	golang: {
		id: 'golang',
		name: 'Go lang',
		website: '',
		worksWithSince: new Date(2022, 0, 1),
		logo: Golang
	},
	googleanalytics: {
		id: 'googleanalytics',
		name: 'Google Analytics',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: GoogleAnalytics
	},
	googlecloud: {
		id: 'googlecloud',
		name: 'Google Cloud',
		website: '',
		worksWithSince: new Date(2017, 0, 1),
		logo: GoogleCloud
	},
	graphql: {
		id: 'graphql',
		name: 'GraphQL',
		website: '',
		worksWithSince: new Date(2019, 0, 1),
		logo: Graphql
	},
	html: {
		id: 'html',
		name: 'HTML 5',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Html
	},
	jamstack: {
		id: 'jamstack',
		name: 'JamStack',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: JamStack
	},
	javascript: {
		id: 'javascript',
		name: 'Javascript',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Javascript
	},
	jest: {
		id: 'jest',
		name: 'Jest',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Jest
	},
	jira: {
		id: 'jira',
		name: 'Jira',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Jira
	},
	k8s: {
		id: 'k8s',
		name: 'Kubernets',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: K8s
	},
	mocha: {
		id: 'mocha',
		name: 'Mocha',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Mocha
	},
	mongodb: {
		id: 'mongodb',
		name: 'MongoDB',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: MongoDb
	},
	mui: {
		id: 'mui',
		name: 'Material UI',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Mui
	},
	mysql: {
		id: 'mysql',
		name: 'MySQL',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Mysql
	},
	nestjs: {
		id: 'nestjs',
		name: 'NestJS',
		website: '',
		worksWithSince: new Date(2019, 0, 1),
		logo: NestJs
	},
	netlify: {
		id: 'netlify',
		name: 'Netlify',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: Netlify
	},
	nextjs: {
		id: 'nextjs',
		name: 'NextJS',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Nextjs
	},
	nodejs: {
		id: 'nodejs',
		name: 'NodeJS',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Nodejs
	},
	npm: {
		id: 'npm',
		name: 'NPM',
		website: '',
		worksWithSince: new Date(2015, 0, 1),
		logo: Npm
	},
	postgres: {
		id: 'postgres',
		name: 'Postgres SQL',
		website: '',
		worksWithSince: new Date(2017, 0, 1),
		logo: Postgre
	},
	postman: {
		id: 'postman',
		name: 'Postman',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Postman
	},
	prettier: {
		id: 'prettier',
		name: 'Prettier',
		website: '',
		worksWithSince: new Date(2017, 0, 1),
		logo: Prettier
	},
	pwa: {
		id: 'pwa',
		name: 'PWA',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Pwa
	},
	python: {
		id: 'python',
		name: 'Python',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: Python
	},
	react: {
		id: 'react',
		name: 'ReactJS',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: ReactLogo
	},
	reactquery: {
		id: 'reactquery',
		name: 'React Query',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: ReactQuery
	},
	reactrouter: {
		id: 'reactrouter',
		name: 'React Router',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: ReactRouter
	},
	redis: {
		id: 'redis',
		name: 'Redis',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Redis
	},
	redux: {
		id: 'redux',
		name: 'Redux',
		website: '',
		worksWithSince: new Date(2017, 0, 1),
		logo: Redux
	},
	sass: {
		id: 'sass',
		name: 'Sass',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Sass
	},
	serverless: {
		id: 'serverless',
		name: 'Serverless',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Serverless
	},
	storybook: {
		id: 'storybook',
		name: 'Storybook',
		website: '',
		worksWithSince: new Date(2019, 0, 1),
		logo: Storybook
	},
	svelte: {
		id: 'Svelte',
		name: 'Svelte',
		website: '',
		worksWithSince: new Date(2023, 0, 1),
		// @ts-ignore
		logo: Svelte
	},
	swift: {
		id: 'swift',
		name: 'Swift',
		website: '',
		worksWithSince: new Date(2023, 0, 1),
		logo: Swift
	},
	tailwind: {
		id: 'tailwind',
		name: 'Tailwind',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: Tailwind
	},
	trpc: {
		id: 'trpc',
		name: 'TRPC',
		website: '',
		worksWithSince: new Date(2022, 0, 1),
		logo: Trpc
	},
	typescript: {
		id: 'typescript',
		name: 'Typescript',
		website: '',
		worksWithSince: new Date(2016, 0, 1),
		logo: Typescript
	},
	vite: {
		id: 'vite',
		name: 'Vite JS',
		website: '',
		worksWithSince: new Date(2022, 0, 1),
		logo: Vite
	},
	vue: {
		id: 'vue',
		name: 'VueJS',
		website: '',
		worksWithSince: new Date(2022, 0, 1),
		logo: Vue
	},
	webassembly: {
		id: 'webassembly',
		name: 'Web Assembly',
		website: '',
		worksWithSince: new Date(2023, 0, 1),
		logo: Webassembly
	},
	webpack: {
		id: 'webpack',
		name: 'Webpack',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		logo: Webpack
	},
	vercel: {
		id: 'vercel',
		name: 'Vercel',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: Vercel
	},
	cypress: {
		id: 'cypress',
		name: 'Cypress',
		website: '',
		worksWithSince: new Date(2019, 0, 1),
		logo: Cypress
	},
	reduxsaga: {
		id: 'reduxsaga',
		name: 'Redux Saga',
		website: '',
		worksWithSince: new Date(2017, 0, 1),
		logo: ReduxSaga
	},
	circleci: {
		id: 'circleci',
		name: 'Circle CI',
		website: '',
		worksWithSince: new Date(2020, 0, 1),
		logo: CircleCi
	},
	elasticsearch: {
		id: 'elasticsearch',
		name: 'Elasticsearch',
		website: '',
		worksWithSince: new Date(2021, 0, 1),
		logo: Elasticsearch
	},
	githubactions: {
		id: 'githubactions',
		name: 'Github Actions',
		website: '',
		worksWithSince: new Date(2021, 0, 1),
		logo: Githubactions
	},
	reacttestlibrary: {
		id: 'reacttestlibrary',
		name: 'React Test Library',
		website: '',
		worksWithSince: new Date(2018, 0, 1),
		// @ts-ignore
		logo: Reacttestlibrary
	}
}
