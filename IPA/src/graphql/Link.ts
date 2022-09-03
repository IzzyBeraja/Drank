import { NexusGenObjects } from "./../../nexus-typegen";
import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});

let links: NexusGenObjects["Link"][] = [
  {
    id: 1,
    description: "this is the first link",
    url: "fakeUrl.com",
  },
  {
    id: 2,
    description: "this is the second link",
    url: "fakeUrl2.com",
  },
];

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(_, __, context) {
        return context.prisma.link.findMany();
      },
    });
  },
});

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      async resolve(_, args, context) {
        return await context.prisma.link.create({
          data: {
            description: args.description,
            url: args.url,
          },
        });
      },
    });
  },
});
