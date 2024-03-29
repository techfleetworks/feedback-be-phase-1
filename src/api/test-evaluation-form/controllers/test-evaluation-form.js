// "use strict";

// /**
//  *  test-evaluation-form controller
//  */

// const { createCoreController } = require("@strapi/strapi").factories;
// const { nanoid } = import("nanoid");

// module.exports = createCoreController(
//   "api::test-evaluation-form.test-evaluation-form",
//   ({ strapi }) => ({
//     async create(ctx) {
//       // 2
//       ctx.request.body.data = {
//         ...ctx.request.body.data,
//         uid: nanoid(),
//       };

//       // 3
//       const response = await super.create(ctx);

//       // 4
//       return response;
//     },
//   })
// );

"use strict";

/**
 *  test-evaluation-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::test-evaluation-form.test-evaluation-form"
);
