/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./errorMessages.ts":
/*!**************************!*\
  !*** ./errorMessages.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst errorsMessages = {\n    invalidEmail: \"L'adresse email n'est pas valide \",\n    userNotFound: 'Utilisateur introuvable ',\n    accountAlReadyExists: 'Ces identifiants existent déjà ',\n    isNotAnImage: 'Veuillez choisir une image ',\n    auth: {\n        userNotFound: 'Utilisateur introuvable ',\n        invalidPassword: \"Ce mot de passe n'est pas valide \",\n        incorrectPassword: 'Mot de passe incorrecte ',\n        invalidConf: 'Les mots de passe ne sont pas identiques ',\n        invalidCode: 'Code incorrecte ',\n        unAuthorized: 'Accès non autorisé',\n        emailAlreadyUsed: 'Adresse email déjà utilisée '\n    },\n    product: {\n        productNotFound: \"Produit n'existe pas \"\n    },\n    payment: {\n        cardNotValid: 'Données de la carte non valide'\n    },\n    command: {\n        commandNotFound: \"Commande n'est pas existe\",\n        stuart: {\n            createdJobError: 'stuart error create job',\n            notValidJob: 'stuart not valid job '\n        }\n    }\n};\nexports.default = errorsMessages;\n\n\n//# sourceURL=webpack:///./errorMessages.ts?");

/***/ }),

/***/ "./src/graphql/directiveResolvers/index.ts":
/*!*************************************************!*\
  !*** ./src/graphql/directiveResolvers/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nexports.default = {\n    auth: (next, source, { roles }, { user }) => roles.includes(user.role) ? next() : new apollo_server_express_1.AuthenticationError(\"UnAuthorized\")\n};\n\n\n//# sourceURL=webpack:///./src/graphql/directiveResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\nconst resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/graphql/resolvers/index.ts\");\nconst typeDefs_1 = __webpack_require__(/*! ./typeDefs */ \"./src/graphql/typeDefs/index.ts\");\nconst directiveResolvers_1 = __webpack_require__(/*! ./directiveResolvers */ \"./src/graphql/directiveResolvers/index.ts\");\nexports.default = graphql_tools_1.makeExecutableSchema({\n    typeDefs: typeDefs_1.default,\n    resolvers: resolvers_1.default,\n    directiveResolvers: directiveResolvers_1.default,\n    logger: {\n        log: message => {\n            //console.log(\"Logger: \", message);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/graphql/index.ts?");

/***/ }),

/***/ "./src/graphql/pubsub/index.ts":
/*!*************************************!*\
  !*** ./src/graphql/pubsub/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ \"graphql-subscriptions\");\nconst instance = new graphql_subscriptions_1.PubSub();\ninstance.ee.setMaxListeners(10e1000000);\nexports.default = instance;\n\n\n//# sourceURL=webpack:///./src/graphql/pubsub/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/index.ts":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst mutations_1 = __webpack_require__(/*! ./mutations */ \"./src/graphql/resolvers/mutations/index.ts\");\nconst queries_1 = __webpack_require__(/*! ./queries */ \"./src/graphql/resolvers/queries/index.ts\");\nconst subscriptions_1 = __webpack_require__(/*! ./subscriptions */ \"./src/graphql/resolvers/subscriptions/index.ts\");\nconst nestedResolvers_1 = __webpack_require__(/*! ./nestedResolvers */ \"./src/graphql/resolvers/nestedResolvers/index.ts\");\nexports.default = Object.assign({ Query: queries_1.default,\n    Mutation: mutations_1.default,\n    Subscription: subscriptions_1.default, Upload: apollo_server_express_1.GraphQLUpload }, nestedResolvers_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/index.ts":
/*!**************************************************!*\
  !*** ./src/graphql/resolvers/mutations/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst posts_1 = __webpack_require__(/*! ./posts */ \"./src/graphql/resolvers/mutations/posts/index.ts\");\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/mutations/organisation/index.ts\");\nexports.default = Object.assign(Object.assign({}, posts_1.default), organisation_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/organisation/index.ts":
/*!***************************************************************!*\
  !*** ./src/graphql/resolvers/mutations/organisation/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    addOrganisation: (root, { input }) => new Promise((resolve, reject) => {\n        new models_1.OrganisationModel(Object.assign({}, input)).save((err, org) => {\n            if (err)\n                return reject(err);\n            return resolve(org);\n        });\n    }),\n    addLevel: (root, { input }) => new Promise((resolve, reject) => {\n        new models_1.DepartmentModel(Object.assign({}, input)).save((err, org) => {\n            if (err)\n                return reject(err);\n            return resolve(org);\n        });\n    }),\n    addProject: (root, { input }) => new Promise((resolve, reject) => {\n        new models_1.ProjectModel(Object.assign({}, input)).save((err, org) => {\n            if (err)\n                return reject(err);\n            return resolve(org);\n        });\n    }),\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/organisation/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/posts/index.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/mutations/posts/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst function_1 = __webpack_require__(/*! ../../../../helpers/function */ \"./src/helpers/function.ts\");\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nconst comment_model_1 = __webpack_require__(/*! ../../../../models/comment.model */ \"./src/models/comment.model.ts\");\nconst notifications_model_1 = __webpack_require__(/*! ../../../../models/notifications.model */ \"./src/models/notifications.model.ts\");\nexports.default = {\n    addPost: (root, { input }, { user, role }) => new Promise((resolve, reject) => {\n        var _a;\n        const { media, body, project } = input;\n        let inputs = { body, createdBy: (_a = user) === null || _a === void 0 ? void 0 : _a.id, project };\n        if (media) {\n            const filename = `posts/${Date.now()}.jpg`;\n            const path = `uploads/${filename}`;\n            function_1.uploadFile(media, path);\n            inputs = Object.assign(Object.assign({}, inputs), { media: `${process.env.MEDIA_ENDPOINT}/${filename}` });\n        }\n        new models_1.PostModel(Object.assign({}, inputs)).save((err, post) => {\n            if (err)\n                return reject(err);\n            return resolve(post);\n        });\n    }),\n    addComment: (root, { input }, { user, role }) => {\n        return new Promise((resolve, reject) => {\n            if (!!!input.post)\n                return reject(\"POST NOT FOUND\");\n            new comment_model_1.CommentModel(Object.assign(Object.assign({}, input), { createdBy: user.id })).save((err, comment) => {\n                if (err || !!!comment)\n                    return reject(err);\n                const { post } = input;\n                models_1.PostModel.updateOne({ id: post }, {\n                    $push: { comments: comment.id },\n                }).exec((errP, PostComment) => {\n                    models_1.PostModel.findById(post).then((posti) => {\n                        var _a, _b, _c, _d, _e, _f, _g;\n                        let body = `${user.lastName} ${user.firstName} commented your post on ${(_a = posti.project) === null || _a === void 0 ? void 0 : _a.name}`;\n                        const inputNotif = { body, userWall: (_c = (_b = posti) === null || _b === void 0 ? void 0 : _b.createdBy) === null || _c === void 0 ? void 0 : _c.id, project: (_e = (_d = posti) === null || _d === void 0 ? void 0 : _d.project) === null || _e === void 0 ? void 0 : _e.id };\n                        if (user.id !== ((_g = (_f = posti) === null || _f === void 0 ? void 0 : _f.createdBy) === null || _g === void 0 ? void 0 : _g.id)) {\n                            new notifications_model_1.NotficationModel(inputNotif).save();\n                        }\n                        return resolve(comment);\n                    });\n                });\n            });\n        });\n    },\n    deleteComment: (r, { id }) => {\n        comment_model_1.CommentModel.findById(id).then((comm) => {\n            comm.remove();\n        });\n    },\n    updateComment: (r, { id, input }) => {\n        comment_model_1.CommentModel.findById(id).then((comm) => {\n            comm.body = input.body;\n            comm.save();\n        });\n    },\n    addLike: (root, { post }, { user, role }) => {\n        return new Promise((resolve, reject) => {\n            if (!!!post)\n                return reject(\"POST NOT FOUND\");\n            models_1.PostModel.updateOne({ id: post }, {\n                $push: { likes: user.id },\n            }).exec((err, res) => {\n                resolve(models_1.PostModel.findOne({ id: post }));\n            });\n        });\n    },\n    deletePost: (root, { post }, { user, role }) => {\n        console.log({ post });\n        return models_1.PostModel.findById(post).then((post) => {\n            return post.remove();\n        });\n    },\n    updatePost: (root, { id, input }, { user, role }) => {\n        models_1.PostModel.findById(id).then((post) => {\n            post.body = input.body;\n            post.save();\n        });\n    },\n    updateNotifications: (r, {}, { user }) => {\n        var _a;\n        notifications_model_1.NotficationModel.updateMany({\n            userWall: (_a = user) === null || _a === void 0 ? void 0 : _a.id\n        }, {\n            $set: {\n                readed: true\n            }\n        }).exec();\n    },\n    addQuestion: (r, { input }, { user }) => new Promise((resolve, reject) => {\n        var _a;\n        const { question, project } = input;\n        let inputs = { question, project, userWall: (_a = user) === null || _a === void 0 ? void 0 : _a.id };\n        new models_1.FivePointModel(Object.assign({}, inputs)).save((err, ques) => {\n            if (err)\n                return reject(err);\n            return resolve(ques);\n        });\n    })\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/posts/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/index.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst userWall_1 = __webpack_require__(/*! ./userWall */ \"./src/graphql/resolvers/nestedResolvers/userWall.ts\");\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/nestedResolvers/organisation.ts\");\nconst level_1 = __webpack_require__(/*! ./level */ \"./src/graphql/resolvers/nestedResolvers/level.ts\");\nconst projects_1 = __webpack_require__(/*! ./projects */ \"./src/graphql/resolvers/nestedResolvers/projects.ts\");\nconst post_1 = __webpack_require__(/*! ./post */ \"./src/graphql/resolvers/nestedResolvers/post.ts\");\nexports.default = {\n    UserWall: userWall_1.default,\n    Organisation: organisation_1.default,\n    Level: level_1.default,\n    Project: projects_1.default,\n    Post: post_1.default\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/level.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/level.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    projects: (_) => { var _a; return models_1.ProjectModel.find({ level: (_a = _) === null || _a === void 0 ? void 0 : _a.id }); }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/level.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/organisation.ts":
/*!***************************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/organisation.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    levels: (_) => { var _a; return models_1.DepartmentModel.find({ organisation: (_a = _) === null || _a === void 0 ? void 0 : _a.id }); }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/organisation.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/post.ts":
/*!*******************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/post.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    isMyPost: (p, {}, { user }) => { var _a, _b, _c; return ((_b = (_a = p) === null || _a === void 0 ? void 0 : _a.createdBy) === null || _b === void 0 ? void 0 : _b.id) === ((_c = user) === null || _c === void 0 ? void 0 : _c.id); }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/post.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/projects.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/projects.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    usersWall: (p) => models_1.UserWallModel.find(),\n    myRole: (p, {}, { user }) => { var _a, _b, _c; return (_c = (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.projects) === null || _b === void 0 ? void 0 : _b.find(pp => { var _a, _b, _c; return ((_b = (_a = pp) === null || _a === void 0 ? void 0 : _a.project) === null || _b === void 0 ? void 0 : _b.id) === ((_c = p) === null || _c === void 0 ? void 0 : _c.id); })) === null || _c === void 0 ? void 0 : _c.role; }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/projects.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/userWall.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/userWall.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    fullName: _ => _.firstName + ' ' + _.lastName\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/userWall.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/index.ts":
/*!************************************************!*\
  !*** ./src/graphql/resolvers/queries/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst posts_1 = __webpack_require__(/*! ./posts */ \"./src/graphql/resolvers/queries/posts/index.ts\");\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/queries/organisation/index.ts\");\nexports.default = Object.assign(Object.assign({}, posts_1.default), organisation_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/organisation/index.ts":
/*!*************************************************************!*\
  !*** ./src/graphql/resolvers/queries/organisation/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    getOrganisations: (root, {}) => {\n        return models_1.OrganisationModel.find({});\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/organisation/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/posts/index.ts":
/*!******************************************************!*\
  !*** ./src/graphql/resolvers/queries/posts/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nconst notifications_model_1 = __webpack_require__(/*! ../../../../models/notifications.model */ \"./src/models/notifications.model.ts\");\nexports.default = {\n    getPosts: (root, { project, tag }) => new Promise((resolve, reject) => {\n        console.log({ project, tag });\n        let query = { project };\n        models_1.PostModel.find(query)\n            .sort({ createdAt: -1 })\n            .then((forms) => {\n            var _a;\n            if (tag) {\n                return resolve((_a = forms) === null || _a === void 0 ? void 0 : _a.filter((p) => { var _a, _b; return (_b = (_a = p) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.some((cm) => { var _a, _b; return (_b = (_a = cm) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.includes(tag); }); }));\n            }\n            resolve(forms);\n        });\n    }),\n    getNotifications: (root, {}, { user }) => {\n        return new Promise((resolve, reject) => {\n            var _a;\n            notifications_model_1.NotficationModel.find({ userWall: (_a = user) === null || _a === void 0 ? void 0 : _a.id }).sort({ createdAt: -1 }).then(notifs => {\n                return resolve(notifs);\n            });\n        });\n    },\n    getFivePoints: (r, { project }) => {\n        return models_1.FivePointModel.find({ project });\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/posts/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/subscriptions/index.ts":
/*!******************************************************!*\
  !*** ./src/graphql/resolvers/subscriptions/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/subscriptions/index.ts?");

/***/ }),

/***/ "./src/graphql/typeDefs/index.ts":
/*!***************************************!*\
  !*** ./src/graphql/typeDefs/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst userType = fs.readFileSync('./src/graphql/typeDefs/user.graphql', 'utf-8');\nconst userWall = fs.readFileSync('./src/graphql/typeDefs/userWall.graphql', 'utf-8');\nconst posts = fs.readFileSync('./src/graphql/typeDefs/posts.graphql', 'utf-8');\nconst schema = fs.readFileSync('./src/graphql/typeDefs/schema.graphql', 'utf-8');\nconst notification = fs.readFileSync('./src/graphql/typeDefs/notification.graphql', 'utf-8');\nconst graphql = ''.concat(userType, posts, userWall, notification, schema);\nexports.default = graphql;\n\n\n//# sourceURL=webpack:///./src/graphql/typeDefs/index.ts?");

/***/ }),

/***/ "./src/graphql/util/constants.ts":
/*!***************************************!*\
  !*** ./src/graphql/util/constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SubscriptionFire = {\n    COMMAND_UPDATED: 'COMMAND_UPDATED',\n    COMMAND_ADDED: 'COMMAND_ADDED'\n};\n\n\n//# sourceURL=webpack:///./src/graphql/util/constants.ts?");

/***/ }),

/***/ "./src/graphql/util/populateFields.ts":
/*!********************************************!*\
  !*** ./src/graphql/util/populateFields.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.populateFields = {\n    clients: ['profile'],\n    client: ['profile'],\n    florists: ['profile'],\n    command: {\n        clientFlorist: [\n            { path: 'client', populate: [{ path: 'profile' }] },\n            { path: 'florist', populate: [{ path: 'profile' }] }\n        ],\n        clientFloristProducts: [\n            { path: 'florist', populate: [{ path: 'profile' }] },\n            { path: 'client', populate: [{ path: 'profile' }] },\n            { path: 'products.product' }\n        ]\n    },\n    florist: {\n        profile: [{ path: 'profile' }]\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/util/populateFields.ts?");

/***/ }),

/***/ "./src/helpers/function.ts":
/*!*********************************!*\
  !*** ./src/helpers/function.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst getUserModelByRole = () => {\n    return null;\n};\nexports.getUserByToken = token => {\n    return new Promise((resolve, reject) => {\n        token_1.default.ensure(token)\n            .then(payload => {\n            switch (payload.role) {\n                case constant_1.UserRole.usersWall:\n                    models_1.UserWallModel.findOne({ profile: payload.id }).populate('profile').then(client => resolve(client));\n                    break;\n                case constant_1.UserRole.ADMIN:\n                    {\n                        models_1.AdminModel.findOne({ profile: payload.id }).populate('profile').then(admin => {\n                            resolve(admin);\n                        });\n                    }\n                    break;\n                default:\n                    resolve(payload);\n            }\n        })\n            .catch(err => reject(err));\n    });\n};\nconst upload = (stream, filePath) => {\n    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\n        stream\n            .pipe(fs_1.createWriteStream(filePath))\n            .on(\"error\", (e) => reject(e.message))\n            .on(\"finish\", () => resolve(`${process.env.MEDIA_ENDPOINT}`));\n    }));\n};\nexports.uploadFile = (file, path, id = null, oldPath = null) => {\n    console.log(file);\n    return new Promise((resolve, reject) => {\n        Promise.resolve(file)\n            .then(({ createReadStream, mimetype }) => {\n            const stream = createReadStream();\n            //const filePath = `${PUBLIC_PATH}/images/${subPath}/${id}.${extension}`;\n            //if (!mimetype.startsWith('image')) return reject('isNotAnImage');\n            if (oldPath)\n                exports.removeFile(oldPath, () => {\n                    upload(stream, path)\n                        .then((link) => console.log(link))\n                        .catch((e) => reject(e));\n                });\n            else\n                upload(stream, path)\n                    .then((link) => resolve(link))\n                    .catch((e) => reject(e));\n        })\n            .catch((e) => reject(e.message));\n    });\n};\nexports.removeFile = (path, cb = null) => {\n    fs_1.default.unlink(`.${path}`, () => {\n        if (cb)\n            cb();\n    });\n};\nexports.getRandom = (min, max) => {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\n\n//# sourceURL=webpack:///./src/helpers/function.ts?");

/***/ }),

/***/ "./src/helpers/moment.js":
/*!*******************************!*\
  !*** ./src/helpers/moment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);\nvar moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst fr = 'France/Paris';\nconst tn = 'Africa/Tunis';\n/* harmony default export */ __webpack_exports__[\"default\"] = (moment.tz.setDefault(fr));\n\n\n//# sourceURL=webpack:///./src/helpers/moment.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_1 = __webpack_require__(/*! http */ \"http\");\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nconst server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nconst subscriptions_transport_ws_1 = __webpack_require__(/*! subscriptions-transport-ws */ \"subscriptions-transport-ws\");\nconst graphql_2 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\nconst ws = http_1.createServer(server_1.default);\nws\n    .listen(process.env.PORT, () => {\n    console.log(`Server listening at port ${process.env.PORT} ...`);\n})\n    .on('listening', () => {\n    console.log('Subscription is listing....');\n    new subscriptions_transport_ws_1.SubscriptionServer({\n        execute: graphql_1.execute,\n        subscribe: graphql_1.subscribe,\n        schema: graphql_2.default,\n        onConnect: (connectionParams) => __awaiter(void 0, void 0, void 0, function* () {\n            if (connectionParams.token) {\n                const token = connectionParams.token;\n                return new Promise((resolve, reject) => {\n                    function_1.getUserByToken(token)\n                        .then(res => {\n                        return resolve(res);\n                    })\n                        .catch(err => reject(err));\n                });\n            }\n        })\n    }, {\n        server: ws,\n        path: '/subscriptions'\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/admin.model.ts":
/*!***********************************!*\
  !*** ./src/models/admin.model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst adminSchema = new mongoose_1.Schema({\n    id: String,\n    profile: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        required: true,\n        ref: \"users\"\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(adminSchema);\nexports.AdminModel = mongoose_1.model(\"admins\", adminSchema);\n\n\n//# sourceURL=webpack:///./src/models/admin.model.ts?");

/***/ }),

/***/ "./src/models/comment.model.ts":
/*!*************************************!*\
  !*** ./src/models/comment.model.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst commentSchema = new mongoose_1.Schema({\n    id: String,\n    body: {\n        type: String,\n        default: ''\n    },\n    media: {\n        type: String,\n    },\n    subComments: {\n        type: [String],\n        ref: \"comments\",\n        autopopulate: true,\n        default: []\n    },\n    likes: {\n        type: [String],\n        default: []\n    },\n    createdBy: {\n        type: String,\n        ref: \"usersWall\",\n        autopopulate: true\n    },\n    post: {\n        type: String,\n        default: null,\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(commentSchema);\nexports.CommentModel = mongoose_1.model(\"comments\", commentSchema);\n\n\n//# sourceURL=webpack:///./src/models/comment.model.ts?");

/***/ }),

/***/ "./src/models/departement.model.ts":
/*!*****************************************!*\
  !*** ./src/models/departement.model.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst depSchema = new mongoose_1.Schema({\n    id: String,\n    name: {\n        type: String\n    },\n    organisation: {\n        type: String,\n        ref: \"organisations\"\n    },\n    photoUrl: String,\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(depSchema);\nexports.DepartmentModel = mongoose_1.model(\"departments\", depSchema);\n\n\n//# sourceURL=webpack:///./src/models/departement.model.ts?");

/***/ }),

/***/ "./src/models/fivepoints.model.ts":
/*!****************************************!*\
  !*** ./src/models/fivepoints.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst reviewSchema = new mongoose_1.Schema({\n    userWall: {\n        type: String,\n        ref: \"usersWall\",\n        autopopulate: true\n    },\n    rating: Number\n});\nconst projectSchema = new mongoose_1.Schema({\n    id: String,\n    question: {\n        type: String\n    },\n    userWall: {\n        type: String,\n        default: \"\"\n    },\n    project: {\n        type: String,\n        default: \"\",\n        autopopulate: true\n    },\n    reviews: {\n        type: [reviewSchema],\n        default: []\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(projectSchema);\nexports.FivePointModel = mongoose_1.model(\"fivepoints\", projectSchema);\n\n\n//# sourceURL=webpack:///./src/models/fivepoints.model.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst user_model_1 = __webpack_require__(/*! ./user.model */ \"./src/models/user.model.ts\");\nexports.UserModel = user_model_1.UserModel;\nconst admin_model_1 = __webpack_require__(/*! ./admin.model */ \"./src/models/admin.model.ts\");\nexports.AdminModel = admin_model_1.AdminModel;\nconst userWall_model_1 = __webpack_require__(/*! ./userWall.model */ \"./src/models/userWall.model.ts\");\nexports.UserWallModel = userWall_model_1.UserWallModel;\nconst post_model_1 = __webpack_require__(/*! ./post.model */ \"./src/models/post.model.ts\");\nexports.PostModel = post_model_1.PostModel;\nconst comment_model_1 = __webpack_require__(/*! ./comment.model */ \"./src/models/comment.model.ts\");\nexports.CommentModel = comment_model_1.CommentModel;\nconst organisation_model_1 = __webpack_require__(/*! ./organisation.model */ \"./src/models/organisation.model.ts\");\nexports.OrganisationModel = organisation_model_1.OrganisationModel;\nconst departement_model_1 = __webpack_require__(/*! ./departement.model */ \"./src/models/departement.model.ts\");\nexports.DepartmentModel = departement_model_1.DepartmentModel;\nconst project_model_1 = __webpack_require__(/*! ./project.model */ \"./src/models/project.model.ts\");\nexports.ProjectModel = project_model_1.ProjectModel;\nconst fivepoints_model_1 = __webpack_require__(/*! ./fivepoints.model */ \"./src/models/fivepoints.model.ts\");\nexports.FivePointModel = fivepoints_model_1.FivePointModel;\nconst seedsData = () => {\n    admin_model_1.AdminModel.countDocuments((err, count) => {\n        if (!err && count === 0) {\n            new user_model_1.UserModel({\n                email: \"admin@gmail.com\",\n                password: \"123456\",\n                ref: \"admins\",\n            })\n                .save()\n                .then((user) => new admin_model_1.AdminModel({ profile: user.id }).save().then((admin) => admin));\n        }\n    });\n    userWall_model_1.UserWallModel.countDocuments((err, count) => {\n        if (!err && count === 0) {\n            new user_model_1.UserModel({\n                email: \"client@gmail.com\",\n                password: \"123456\",\n                ref: \"usersWall\",\n            })\n                .save()\n                .then((user) => {\n                new userWall_model_1.UserWallModel({\n                    firstName: \"sahbani\",\n                    lastName: \"wael\",\n                    profile: user.id,\n                }).save();\n            });\n        }\n    });\n    organisation_model_1.OrganisationModel.countDocuments((err, count) => {\n        if (!err && count === 0) {\n            new organisation_model_1.OrganisationModel({ name: \"Informatique\", photoUrl: \"tes\" }).save((errc, org) => {\n                new departement_model_1.DepartmentModel({ name: \"SI\" }).save();\n            });\n        }\n    });\n};\nseedsData();\n\n\n//# sourceURL=webpack:///./src/models/index.ts?");

/***/ }),

/***/ "./src/models/notifications.model.ts":
/*!*******************************************!*\
  !*** ./src/models/notifications.model.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst projectSchema = new mongoose_1.Schema({\n    id: String,\n    body: {\n        type: String\n    },\n    userWall: {\n        type: String,\n        default: \"\"\n    },\n    project: {\n        type: String,\n        default: \"\",\n        autopopulate: true\n    },\n    readed: {\n        type: Boolean,\n        default: false,\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(projectSchema);\nexports.NotficationModel = mongoose_1.model(\"notifications\", projectSchema);\n\n\n//# sourceURL=webpack:///./src/models/notifications.model.ts?");

/***/ }),

/***/ "./src/models/organisation.model.ts":
/*!******************************************!*\
  !*** ./src/models/organisation.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst organisationSchema = new mongoose_1.Schema({\n    id: String,\n    name: {\n        type: String\n    },\n    photoUrl: String,\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(organisationSchema);\nexports.OrganisationModel = mongoose_1.model(\"organisations\", organisationSchema);\n\n\n//# sourceURL=webpack:///./src/models/organisation.model.ts?");

/***/ }),

/***/ "./src/models/post.model.ts":
/*!**********************************!*\
  !*** ./src/models/post.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst postsSchema = new mongoose_1.Schema({\n    id: String,\n    media: {\n        type: String,\n        default: \"\",\n    },\n    body: {\n        type: String,\n        default: ''\n    },\n    comments: {\n        type: [String],\n        ref: \"comments\",\n        autopopulate: true\n    },\n    likes: {\n        type: [String],\n        default: []\n    },\n    createdBy: {\n        type: String,\n        autopopulate: true,\n        ref: \"usersWall\"\n    },\n    project: {\n        type: String,\n        ref: \"projects\",\n        autopopulate: true\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(postsSchema);\nexports.PostModel = mongoose_1.model(\"posts\", postsSchema);\n\n\n//# sourceURL=webpack:///./src/models/post.model.ts?");

/***/ }),

/***/ "./src/models/preSave.ts":
/*!*******************************!*\
  !*** ./src/models/preSave.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\nexports.createdAt = schema => {\n    schema.plugin(__webpack_require__(/*! mongoose-autopopulate */ \"mongoose-autopopulate\"));\n    schema.pre(\"save\", function () {\n        if (this.isNew) {\n            this.createdAt = moment_1.default().valueOf();\n            if (!this.id)\n                this.id = this._id.toString();\n            else\n                this._id = this.id;\n        }\n        else\n            this.updatedAt = moment_1.default().valueOf();\n    });\n};\n\n\n//# sourceURL=webpack:///./src/models/preSave.ts?");

/***/ }),

/***/ "./src/models/project.model.ts":
/*!*************************************!*\
  !*** ./src/models/project.model.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst projectSchema = new mongoose_1.Schema({\n    id: String,\n    name: {\n        type: String\n    },\n    usersWall: {\n        type: [String],\n        default: []\n    },\n    level: {\n        type: String,\n        ref: \"departments\",\n        autopopulate: true\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(projectSchema);\nexports.ProjectModel = mongoose_1.model(\"projects\", projectSchema);\n\n\n//# sourceURL=webpack:///./src/models/project.model.ts?");

/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst userSchema = new mongoose_1.Schema({\n    id: String,\n    ref: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: true,\n        trim: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isBlocked: {\n        type: Boolean,\n        default: false\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    createdAt: Number,\n    updatedAt: Number\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n});\npreSave_1.createdAt(userSchema);\nuserSchema.pre(\"save\", function (next) {\n    if (this.isModified(\"password\") && this.isNew) {\n        try {\n            const salt = bcrypt.genSaltSync(10);\n            const hash = bcrypt.hashSync(this.password, salt);\n            this.password = hash;\n            next();\n        }\n        catch (e) {\n            next(e);\n        }\n    }\n    else {\n        next();\n    }\n});\nuserSchema.methods.isValidPassword = function (password) {\n    return bcrypt.compareSync(password, this.password);\n};\nuserSchema.statics.hashPassword = function (password) {\n    return new Promise((resolve, reject) => {\n        try {\n            const salt = bcrypt.genSaltSync(10);\n            const hash = bcrypt.hashSync(password, salt);\n            resolve(hash);\n        }\n        catch (e) {\n            reject(e);\n        }\n    });\n};\nexports.UserModel = mongoose_1.model(\"users\", userSchema);\n\n\n//# sourceURL=webpack:///./src/models/user.model.ts?");

/***/ }),

/***/ "./src/models/userWall.model.ts":
/*!**************************************!*\
  !*** ./src/models/userWall.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst projectSchema = new mongoose_1.Schema({\n    project: {\n        type: String,\n        ref: \"projects\",\n        autopopulate: true,\n    },\n    role: {\n        type: String,\n        enum: [\"MANAGER\", \"OBSERVER\", \"MENEGER\"]\n    }\n});\nconst userWallSchema = new mongoose_1.Schema({\n    id: String,\n    profile: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        required: true,\n        ref: 'users',\n        autopopulate: true\n    },\n    firstName: {\n        type: String,\n        required: true,\n        trim: true,\n        default: ''\n    },\n    lastName: {\n        type: String,\n        required: true,\n        trim: true,\n        default: ''\n    },\n    userName: {\n        type: String,\n        default: \"\"\n    },\n    tel: {\n        type: String,\n        trim: true,\n        default: ''\n    },\n    address: {\n        type: String,\n        trim: true,\n        default: ''\n    },\n    sexe: {\n        type: String,\n        default: 'Femme'\n    },\n    photoUrl: {\n        type: String,\n        default: ''\n    },\n    organisation: {\n        type: String,\n        ref: \"organisations\"\n    },\n    projects: {\n        type: [projectSchema],\n        default: []\n    },\n    createdAt: Number,\n    updatedAt: Number\n}, {\n    toObject: {\n        virtuals: true\n    },\n    toJSON: { virtuals: true }\n});\npreSave_1.createdAt(userWallSchema);\nexports.UserWallModel = mongoose_1.model('usersWall', userWallSchema);\n\n\n//# sourceURL=webpack:///./src/models/userWall.model.ts?");

/***/ }),

/***/ "./src/routes/auth.ts":
/*!****************************!*\
  !*** ./src/routes/auth.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst errorMessages_1 = __webpack_require__(/*! ../../errorMessages */ \"./errorMessages.ts\");\nexports.AuthRouter = express_1.Router();\nexports.AuthRouter.post(\"/login/visitor\", (req, res, next) => {\n    token_1.default.generate({ role: constant_1.UserRole.VISITOR }).then((token) => {\n        res.end(JSON.stringify({ success: true, token }, null, 5));\n    });\n});\nexports.AuthRouter.post(\"/login/admin\", (req, res, next) => {\n    let { email, password } = req.body;\n    if (email && password) {\n        email = email.trim();\n        models_1.UserModel.findOne({ email, ref: \"admins\" }).then((user) => {\n            if (!user) {\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\n            }\n            if (!user.isValidPassword(password)) {\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\n            }\n            token_1.default.generate({ id: user.id, role: constant_1.UserRole.ADMIN })\n                .then((token) => {\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\n            })\n                .catch((err) => next(err));\n        });\n    }\n    else {\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\n    }\n});\nexports.AuthRouter.get(\"/regsiter/mail-exist\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\n    const { email } = req.body;\n    models_1.UserModel.find;\n}));\nexports.AuthRouter.post(\"/register/userWall\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\n    const body = req.body;\n    if (body) {\n        const { email, password, lastName, firstName, userName } = body;\n        if (!email || !password) {\n            return res.end(JSON.stringify({ success: false, error: \"Email and password required\" }));\n        }\n        const user = yield models_1.UserModel.findOne({ email });\n        if (user)\n            return res.end(JSON.stringify({ succes: false, error: \"Email exist\" }));\n        new models_1.UserModel({ email, password, ref: constant_1.UserRole.usersWall }).save((err, user) => {\n            var _a;\n            if (err || !user)\n                return res.end(JSON.stringify(err));\n            new models_1.UserWallModel({ firstName, lastName, profile: (_a = user) === null || _a === void 0 ? void 0 : _a.id }).save((er, wall) => {\n                if (er || !wall)\n                    return res.end(JSON.stringify(er));\n                return res.end(JSON.stringify({ success: true, wall }));\n            });\n        });\n    }\n}));\nexports.AuthRouter.post(\"/login/userwall\", (req, res, next) => {\n    let { email, password } = req.body;\n    if (email && password) {\n        email = email.trim();\n        models_1.UserModel.findOne({ email, ref: \"usersWall\" }).then((user) => __awaiter(void 0, void 0, void 0, function* () {\n            var _a, _b;\n            if (!user) {\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\n            }\n            if (!user.isValidPassword(password)) {\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\n            }\n            const wall = yield models_1.UserWallModel.findOne({ profile: (_a = user) === null || _a === void 0 ? void 0 : _a.id });\n            token_1.default.generate({ id: user.id, userWallId: (_b = wall) === null || _b === void 0 ? void 0 : _b.id, role: constant_1.UserRole.usersWall })\n                .then((token) => {\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\n            })\n                .catch((err) => next(err));\n        }));\n    }\n    else {\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\n    }\n});\nexports.AuthRouter.post(\"/login/check-token\", (req, res, next) => {\n    const token = req.headers.authorization;\n    console.log(token);\n    if (!token) {\n        return res.sendStatus(401);\n    }\n    token_1.default.ensure(token)\n        .then((payload) => {\n        return res.end(JSON.stringify({ success: true, payload }, null, 5));\n    })\n        .catch((err) => res.sendStatus(401));\n});\nexports.default = exports.AuthRouter;\n\n\n//# sourceURL=webpack:///./src/routes/auth.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./auth */ \"./src/routes/auth.ts\"));\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/media.ts":
/*!*****************************!*\
  !*** ./src/routes/media.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nexports.MediaRouter = express_1.Router();\nconst pipe = (req, res, next, path) => {\n    if (fs_1.existsSync(path)) {\n        try {\n            const data = fs_1.readFileSync(path);\n            res.writeHead(200, { 'Content-Type': 'image/jpeg' });\n            res.end(data);\n        }\n        catch (e) {\n            next(e);\n        }\n    }\n    else {\n        res.writeHead(404);\n        res.end();\n    }\n};\nconst pipeImagePost = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/posts/${filename}`;\n    pipe(req, res, next, path);\n};\nconst pipeImageTheme = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/themes/${filename}`;\n    pipe(req, res, next, path);\n};\nconst pipeImageProduct = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/products/${filename}`;\n    pipe(req, res, next, path);\n};\nconst pipeImageStore = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/stores/${filename}`;\n    pipe(req, res, next, path);\n};\nconst pipeImageMention = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/mentions/${filename}`;\n    pipe(req, res, next, path);\n};\nconst pipeImageChat = (req, res, next) => {\n    const filename = req.params.name;\n    const path = `./uploads/chat/${filename}`;\n    pipe(req, res, next, path);\n};\nexports.MediaRouter.all('/posts/:name', pipeImagePost);\n\n\n//# sourceURL=webpack:///./src/routes/media.ts?");

/***/ }),

/***/ "./src/routes/stuart.ts":
/*!******************************!*\
  !*** ./src/routes/stuart.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst populateFields_1 = __webpack_require__(/*! ../graphql/util/populateFields */ \"./src/graphql/util/populateFields.ts\");\nconst pubsub_1 = __webpack_require__(/*! ../graphql/pubsub */ \"./src/graphql/pubsub/index.ts\");\nconst constants_1 = __webpack_require__(/*! ../graphql/util/constants */ \"./src/graphql/util/constants.ts\");\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\nexports.StuartRouter = express_1.Router();\nexports.StuartRouter.post('/webhooks', (req, res, next) => {\n    const { data } = req.body;\n    if (data) {\n        const { status, clientReference } = data;\n        let state = null;\n        if (status) {\n            switch (status) {\n                case 'in_progress':\n                    state = 'DELIVERING';\n                    break;\n                case 'delivering':\n                    state = 'DELIVERING';\n                    break;\n                case 'finished':\n                    state = 'DELIVERED';\n                    break;\n                case 'canceled':\n                    state = 'CANCELED';\n                    break;\n                case 'voided':\n                    state = 'VOIDED';\n                    break;\n                case 'revoked':\n                    state = 'REVOKED';\n                    break;\n                case 'expired':\n                    state = 'EXPIRED';\n                    break;\n            }\n        }\n        if (!!state) {\n            if (clientReference) {\n                models_1.CommandModel.findOne({ num: parseInt(clientReference) })\n                    .populate(populateFields_1.populateFields.command.clientFlorist)\n                    .then(cmd => {\n                    const order = cmd;\n                    if (order) {\n                        const { driver, trackingUrl } = data;\n                        order.state = state ? state : 'PENDING';\n                        order.status = [...order.status, { state, date: moment_1.default().valueOf() }];\n                        if (driver && trackingUrl) {\n                            order.apiResponseLivringInfos = {\n                                job: data ? data.id : null,\n                                trackingUrl,\n                                driver: {\n                                    firstName: driver ? driver.firstname : null,\n                                    lastName: driver ? driver.lastname : null,\n                                    phone: driver ? driver.phone : null\n                                }\n                            };\n                        }\n                        order.save();\n                        pubsub_1.default.publish(constants_1.SubscriptionFire.COMMAND_UPDATED, { command: order });\n                    }\n                });\n            }\n        }\n    }\n});\nexports.default = exports.StuartRouter;\n\n\n//# sourceURL=webpack:///./src/routes/stuart.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst compression = __webpack_require__(/*! compression */ \"compression\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\nconst bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst graphql_1 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\nconst token_1 = __webpack_require__(/*! ./tools/token */ \"./src/tools/token.ts\");\nconst constant_1 = __webpack_require__(/*! ./tools/constant */ \"./src/tools/constant.ts\");\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\nconst stuart_1 = __webpack_require__(/*! ./routes/stuart */ \"./src/routes/stuart.ts\");\nconst media_1 = __webpack_require__(/*! ./routes/media */ \"./src/routes/media.ts\");\n//import { getUserByToken } from './helpers/function';\n//ANCHOR conexion mongoose database\nclass Server {\n    constructor() {\n        dotenv.config();\n        this.app = express();\n        this.connectMongoDB();\n        this.config();\n        this.setupRoutes();\n        this.setupGraphQL();\n        //console.log(process.env.PORT)\n    }\n    connectMongoDB() {\n        const mongoUrl = process.env.MONGOOSE_URI_CONNECTION;\n        mongoose.Promise = bluebird;\n        mongoose\n            .connect(mongoUrl, {\n            useCreateIndex: true,\n            useNewUrlParser: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        })\n            .then(() => {\n            /** ready to use. The `mongoose.connect()` promise resolves to undefined. */\n            console.log('Connected to database');\n        })\n            .catch(err => {\n            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);\n            // process.exit();\n        });\n    }\n    setupRoutes() {\n        this.app.use(process.env.AUTH_ENDPOINT, routes_1.AuthRouter);\n        this.app.use(process.env.MEDIA_ENDPOINT, media_1.MediaRouter);\n        this.app.use(process.env.STUART_ENDPOINT, stuart_1.default);\n        this.app.use(process.env.GRAPHQL_ENDPOINT, (req, res, next) => {\n            const token = req.headers.authorization;\n            token_1.default.ensure(token).then(() => next()).catch(message => res.status(401).json({\n                success: false,\n                code: 401,\n                message\n            }));\n        });\n    }\n    setupGraphQL() {\n        const server = new apollo_server_express_1.ApolloServer({\n            schema: graphql_1.default,\n            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {\n                var _a, _b;\n                const user = yield function_1.getUserByToken(req.headers.authorization);\n                return { user, token: req.headers.authorization, role: (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.role, (_b !== null && _b !== void 0 ? _b : constant_1.UserRole.VISITOR)) };\n            })\n        });\n        server.applyMiddleware({ app: this.app, path: process.env.GRAPHQL_ENDPOINT });\n    }\n    config() {\n        this.app.use(bodyParser.urlencoded({ extended: true }));\n        this.app.use(bodyParser.json());\n        this.app.use(cookieParser());\n        this.app.use(logger('dev'));\n        //this.app.use(expressValidator());\n        this.app.use(helmet());\n        this.app.use(compression());\n        this.app.use(cors());\n    }\n}\nexports.default = new Server().app;\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/tools/constant.ts":
/*!*******************************!*\
  !*** ./src/tools/constant.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserRole = {\n    ADMIN: 'ADMIN',\n    CLIENT: 'CLIENT',\n    FLORIST: 'FLORIST',\n    VISITOR: 'VISITOR',\n    usersWall: \"usersWall\",\n    admin: \"admin\"\n};\nexports.MAIL_HOST = 'mail.toolynk.com';\nexports.MAIL_USER = 'bridge@toolynk.com';\nexports.MAIL_PASSWORD = 'G&340fvv';\nexports.EMAIL_SENDER = 'contact@toolynk.com';\nexports.EMAIL_SENDER_PASSWORD = 'sahbanial123';\nexports.CURRENCY = 'EUR';\nexports.PHONE_PRFIX = '+33';\nexports.MAX_DISTANCE = 7;\nexports.MomentFormat = {\n    DATE_HOURS: 'DD/MM/YYYY HH:mm',\n    DATE: 'DD/MM/YYYY',\n    TIME: 'HH:mm'\n};\n\n\n//# sourceURL=webpack:///./src/tools/constant.ts?");

/***/ }),

/***/ "./src/tools/token.ts":
/*!****************************!*\
  !*** ./src/tools/token.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst generate = (payload) => new Promise((resolve, reject) => {\n    console.log(process.env.JWT_EXPIRES_IN);\n    try {\n        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);\n        resolve(token);\n    }\n    catch (e) {\n        reject(e);\n    }\n});\nconst ensure = (token) => new Promise((resolve, reject) => {\n    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, payload) {\n        if (err) {\n            return reject(err);\n        }\n        resolve(payload);\n    });\n});\nexports.default = {\n    generate,\n    ensure\n};\n\n\n//# sourceURL=webpack:///./src/tools/token.ts?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-subscriptions\");\n\n//# sourceURL=webpack:///external_%22graphql-subscriptions%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-timezone\");\n\n//# sourceURL=webpack:///external_%22moment-timezone%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-autopopulate":
/*!****************************************!*\
  !*** external "mongoose-autopopulate" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-autopopulate\");\n\n//# sourceURL=webpack:///external_%22mongoose-autopopulate%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"subscriptions-transport-ws\");\n\n//# sourceURL=webpack:///external_%22subscriptions-transport-ws%22?");

/***/ })

/******/ });